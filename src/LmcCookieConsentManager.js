import 'vanilla-cookieconsent';
import { nanoid } from 'nanoid';

import { config as configCs } from './languages/cs';
import { config as configDe } from './languages/de';
import { config as configEn } from './languages/en';
import { config as configHu } from './languages/hu';
import { config as configPl } from './languages/pl';
import { config as configRu } from './languages/ru';
import { config as configSk } from './languages/sk';
import { config as configUk } from './languages/uk';

const defaultOptions = {
  defaultLang: 'cs',
  autodetectLang: true,
  onFirstAccept: (cookie, cookieConsent) => {},
  onFirstAcceptOnlyNecessary: (cookie, cookieConsent) => {},
  onFirstAcceptAll: (cookie, cookieConsent) => {},
  onAccept: (cookie, cookieConsent) => {},
  onAcceptOnlyNecessary: (cookie, cookieConsent) => {},
  onAcceptAll: (cookie, cookieConsent) => {},
  companyNames: ['LMC'],
  config: {},
};

/**
 * @param {string} serviceName - Identifier of the source service (website/application). Must be provided.
 * @param {Object} [args] - Options for cookie consent manager
 * @param {string} [args.defaultLang] - Default language. Must be one of predefined languages.
 * @param {boolean} [args.autodetectLang] - Autodetect language from the browser
 * @param {function} [args.onFirstAccept] - Callback to be executed right after any consent is just accepted
 * @param {function} [args.onFirstAcceptOnlyNecessary] - Callback to be executed right after only necessary cookies are accepted
 * @param {function} [args.onFirstAcceptAll] - Callback to be executed right after all cookies are accepted
 * @param {function} [args.onAccept] - Callback to be executed when any consent is detected (either given right now or already saved previously)
 * @param {function} [args.onAcceptOnlyNecessary] - Callback to be executed when consent with only necessary cookies is detected (either given right now or already saved previously)
 * @param {function} [args.onAcceptAll] - Callback to be executed when consent with all cookies is detected (either given right now or already saved previously)
 * @param {array} [args.companyNames] - Array of strings with company names. Adjust only when the consent needs to be given to multiple companies.
 * @param {Object} [args.config] - Override default config. See https://github.com/orestbida/cookieconsent/blob/master/Readme.md#all-available-options
 * @returns {Object} Instance of the underlying CookieConsent component. For available API, see https://github.com/orestbida/cookieconsent#apis--configuration-parameters
 */
const LmcCookieConsentManager = (serviceName, args) => {
  if (!serviceName || serviceName === '' || typeof serviceName !== 'string') {
    throw new Error('serviceName is a required parameter and must be a string');
  }

  const options = { ...defaultOptions, ...args };
  const {
    defaultLang,
    autodetectLang,
    onFirstAccept,
    onFirstAcceptOnlyNecessary,
    onFirstAcceptAll,
    onAccept,
    onAcceptOnlyNecessary,
    onAcceptAll,
    companyNames,
    config,
  } = options;
  const cookieName = 'lmc_ccm';
  const cookieConsent = window.initCookieConsent();
  const isFirstTimeAccept = !cookieConsent.validCookie(cookieName);

  const languages = {
    cs: configCs({ companyNames }),
    de: configDe({ companyNames }),
    en: configEn({ companyNames }),
    hu: configHu({ companyNames }),
    pl: configPl({ companyNames }),
    ru: configRu({ companyNames }),
    sk: configSk({ companyNames }),
    uk: configUk({ companyNames }),
  };

  const cookieConsentConfig = {
    auto_language: autodetectLang, // Enable detection from navigator.language
    autorun: true, // Show the cookie consent banner as soon as possible
    cookie_expiration: 365, // 1 year
    cookie_name: cookieName, // Predefined cookie name. Do not override.
    current_lang: defaultLang, // Default language used when auto_language is false (or when autodetect failed)
    delay: 0, // Show the modal immediately after init
    force_consent: false, // Do not force the consent before page could be used
    hide_from_bots: true, // To be hidden also from Selenium
    page_scripts: true, // Manage third-party scripts loaded using <script>
    use_rfc_cookie: true, // Store cookie content in RFC compatible format.
    gui_options: {
      consent_modal: {
        layout: 'bar', // box/cloud/bar
        position: 'bottom center', // bottom/middle/top + left/right/center
        transition: 'slide', // zoom/slide
      },
    },
    onAccept: (cookie) => {
      const givenLevels = cookieConsent.get('level');
      const acceptedOnlyNecessary = givenLevels.length === 1 && givenLevels[0] === 'necessary';

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'CookieConsent-update',
        'CookieConsent.necessary': cookie.level.includes('necessary'),
        'CookieConsent.analytics': cookie.level.includes('analytics'),
        'CookieConsent.functionality': cookie.level.includes('functionality'),
        'CookieConsent.personalization': cookie.level.includes('personalization'),
        'CookieConsent.revision': cookie.revision,
      });

      onAccept(cookie, cookieConsent);

      if (isFirstTimeAccept) {
        const cookieData = cookieConsent.get('data');
        if (cookieData === null || !('uid' in cookieData)) {
          cookieConsent.set('data', {
            value: { serviceName: serviceName, uid: nanoid() },
            mode: 'update',
          });
        }

        onFirstAccept(cookie, cookieConsent);
        acceptedOnlyNecessary
          ? onFirstAcceptOnlyNecessary(cookie, cookieConsent)
          : onFirstAcceptAll(cookie, cookieConsent);
      }

      acceptedOnlyNecessary
        ? onAcceptOnlyNecessary(cookie, cookieConsent)
        : onAcceptAll(cookie, cookieConsent);
    },
    languages,
    // override default config if necessary
    ...config,
  };

  cookieConsent.run(cookieConsentConfig);

  return cookieConsent;
};

export default LmcCookieConsentManager;
