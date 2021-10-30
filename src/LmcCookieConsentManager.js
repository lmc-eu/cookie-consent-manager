import 'vanilla-cookieconsent';

import { config as configCs } from './languages/cs';
import { config as configEn } from './languages/en';
import { config as configPl } from './languages/pl';
import { config as configSk } from './languages/sk';

const defaultOptions = {
  defaultLang: 'cs',
  themeCss: '',
  onFirstAccept: (cookie, cookieConsent) => {},
  onFirstAcceptOnlyNecessary: (cookie, cookieConsent) => {},
  onFirstAcceptAll: (cookie, cookieConsent) => {},
  onAccept: (cookie, cookieConsent) => {},
  onAcceptOnlyNecessary: (cookie, cookieConsent) => {},
  onAcceptAll: (cookie, cookieConsent) => {},
  config: {},
};

/**
 * @param {Object} [args] - Options for cookie consent manager
 * @param {string} [args.defaultLang] - Default language. Must be one of predefined languages.
 * @param {string} [args.themeCss] - Specify file to the .css file
 * @param {function} [args.onFirstAccept] - Callback to be executed right after any consent is just accepted
 * @param {function} [args.onFirstAcceptOnlyNecessary] - Callback to be executed right after only necessary cookies are accepted
 * @param {function} [args.onFirstAcceptAll] - Callback to be executed right after all cookies are accepted
 * @param {function} [args.onAccept] - Callback to be executed when any consent is detected (either given right now or already saved previously)
 * @param {function} [args.onAcceptOnlyNecessary] - Callback to be executed when consent with only necessary cookies is detected (either given right now or already saved previously)
 * @param {function} [args.onAcceptAll] - Callback to be executed when consent with all cookies is detected (either given right now or already saved previously)
 * @param {Object} [args.config] - Override default config. See https://github.com/orestbida/cookieconsent/blob/master/Readme.md#all-available-options
 * @returns {Object} Instance of the underlying CookieConsent component. For available API, see https://github.com/orestbida/cookieconsent#apis--configuration-parameters
 */
const LmcCookieConsentManager = (args) => {
  const options = { ...defaultOptions, ...args };
  const {
    defaultLang,
    themeCss,
    onFirstAccept,
    onFirstAcceptOnlyNecessary,
    onFirstAcceptAll,
    onAccept,
    onAcceptOnlyNecessary,
    onAcceptAll,
    config,
  } = options;
  const cookieName = 'lmc_ccm';
  const cookieConsent = window.initCookieConsent();
  const isFirstTimeAccept = !cookieConsent.validCookie(cookieName);

  cookieConsent.run({
    current_lang: defaultLang,
    auto_language: true,
    theme_css: themeCss,
    cookie_name: cookieName,
    cookie_expiration: 365,
    use_rfc_cookie: true,
    autorun: true,
    delay: 0,
    force_consent: false,
    hide_from_bots: true, // To be hidden also from Selenium
    gui_options: {
      consent_modal: {
        layout: 'bar', // box/cloud/bar
        position: 'bottom center', // bottom/middle/top + left/right/center
        transition: 'slide', // zoom/slide
      },
    },
    onAccept: (cookie) => {
      const givenLevels = cookieConsent.get('level');
      const acceptedOnlyNecessary =
        givenLevels.length === 1 && givenLevels[0] === 'necessary';

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'CookieConsent-update',
        'CookieConsent.necessary': cookie.level.includes('necessary'),
        'CookieConsent.analytics': cookie.level.includes('analytics'),
        'CookieConsent.functionality': cookie.level.includes('functionality'),
        'CookieConsent.personalization':
          cookie.level.includes('personalization'),
        'CookieConsent.revision': cookie.revision,
      });

      onAccept(cookie, cookieConsent);

      if (isFirstTimeAccept) {
        onFirstAccept(cookie, cookieConsent);
        acceptedOnlyNecessary
          ? onFirstAcceptOnlyNecessary(cookie, cookieConsent)
          : onFirstAcceptAll(cookie, cookieConsent);
      }

      acceptedOnlyNecessary
        ? onAcceptOnlyNecessary(cookie, cookieConsent)
        : onAcceptAll(cookie, cookieConsent);
    },
    languages: {
      cs: configCs,
      en: configEn,
      pl: configPl,
      sk: configSk,
    },
    // override default config if necessary
    ...config,
  });

  return cookieConsent;
};

export default LmcCookieConsentManager;
