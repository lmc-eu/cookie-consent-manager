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
import submitConsent from './consentCollector';
import { CookieConsentCategory, CookieConsentManager, CookieConsentManagerOptions, OnAcceptCallback } from './types';
import { VanillaCookieConsent } from './types/vanilla-cookieconsent';

/* eslint-disable-next-line no-unused-vars */
const noopAcceptCallback: OnAcceptCallback = (cookie, cookieConsent) => {};

const defaultOptions: CookieConsentManagerOptions = {
  defaultLang: 'cs',
  autodetectLang: true,
  consentCollectorApiUrl: 'https://ccm.lmc.cz/local-data-acceptation-data-entries',
  onFirstAccept: noopAcceptCallback,
  onFirstAcceptOnlyNecessary: noopAcceptCallback,
  onFirstAcceptAll: noopAcceptCallback,
  onAccept: noopAcceptCallback,
  onAcceptOnlyNecessary: noopAcceptCallback,
  onAcceptAll: noopAcceptCallback,
  companyNames: ['LMC'],
  config: {},
};

/**
 * @param {string} serviceName - Identifier of the source service (website/application). Must be provided.
 * @param {CookieConsentManagerOptions} [args] - Options for cookie consent manager
 * @param {string} [args.defaultLang] - Default language. Must be one of predefined languages.
 * @param {boolean} [args.autodetectLang] - Autodetect language from the browser
 * @param {?string} [args.consentCollectorApiUrl] - URL of the API where user consent information should be sent.
 *   Null to disable.
 * @param {OnAcceptCallback} [args.onFirstAccept] - Callback to be executed right after any consent is just accepted
 * @param {OnAcceptCallback} [args.onFirstAcceptOnlyNecessary] - Callback to be executed right after only necessary cookies
 *   are accepted
 * @param {OnAcceptCallback} [args.onFirstAcceptAll] - Callback to be executed right after all cookies are accepted
 * @param {OnAcceptCallback} [args.onAccept] - Callback to be executed when any consent is detected (either given right now
 *   or already saved previously)
 * @param {OnAcceptCallback} [args.onAcceptOnlyNecessary] - Callback to be executed when consent with only necessary cookies.
 *   is detected (either given right now or already saved previously)
 * @param {OnAcceptCallback} [args.onAcceptAll] - Callback to be executed when consent with all cookies is detected
 *   (either given right now or already saved previously)
 * @param {array} [args.companyNames] - Array of strings with company names. Adjust only when the consent needs
 *   to be given to multiple companies.
 * @param {VanillaCookieConsent.Options} [args.config] - Override default config.
 *   See https://github.com/orestbida/cookieconsent/blob/master/Readme.md#all-available-options
 * @returns {VanillaCookieConsent.CookieConsent<CookieConsentCategory>} Instance of the underlying CookieConsent component.
 *   For available API, see https://github.com/orestbida/cookieconsent#apis--configuration-parameters
 */
const LmcCookieConsentManager: CookieConsentManager = (serviceName, args) => {
  if (!serviceName || serviceName === '' || typeof serviceName !== 'string') {
    throw new Error('serviceName is a required parameter and must be a string');
  }

  const options = { ...defaultOptions, ...args };
  const {
    defaultLang,
    autodetectLang,
    consentCollectorApiUrl,
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
    auto_language: autodetectLang ? 'document' : null, // Autodetect language based on `<html lang="...">` value
    autorun: true, // Show the cookie consent banner as soon as possible
    cookie_expiration: 365, // 1 year
    cookie_necessary_only_expiration: 60, // 2 months
    cookie_name: cookieName, // Predefined cookie name. Do not override.
    current_lang: defaultLang, // Default language used when auto_language is false (or when autodetect failed)
    delay: 0, // Show the modal immediately after init
    force_consent: false, // Do not force the consent before page could be used
    hide_from_bots: true, // To be hidden also from Selenium
    page_scripts: true, // Manage third-party scripts loaded using <script>
    use_rfc_cookie: true, // Store cookie content in RFC compatible format.
    gui_options: {
      consent_modal: {
        layout: VanillaCookieConsent.GuiConsentLayout.BAR, // box/cloud/bar
        position: VanillaCookieConsent.GuiConsentPosition.BOTTOM_CENTER, // bottom/middle/top + left/right/center
        transition: VanillaCookieConsent.Transition.SLIDE, // zoom/slide
        swap_buttons: true,
      },
    },
    onAccept: (cookie: VanillaCookieConsent.Cookie<CookieConsentCategory>) => {
      const userPreferences = cookieConsent.getUserPreferences();

      onAccept(cookie, cookieConsent);

      userPreferences.accept_type == VanillaCookieConsent.AcceptType.NECESSARY
        ? onAcceptOnlyNecessary(cookie, cookieConsent)
        : onAcceptAll(cookie, cookieConsent);
    },
    onFirstAction: (
      userPreferences: VanillaCookieConsent.UserPreferences<CookieConsentCategory>,
      cookie: VanillaCookieConsent.Cookie<CookieConsentCategory>,
    ) => {
      const cookieData = cookieConsent.get('data');
      if (cookieData === null || !('uid' in cookieData)) {
        cookieConsent.set('data', {
          value: { serviceName, uid: nanoid() },
          mode: 'update',
        });
      }

      pushToDataLayer(cookie);

      if (consentCollectorApiUrl !== null) {
        submitConsent(consentCollectorApiUrl, cookieConsent);
      }

      onFirstAccept(cookie, cookieConsent);

      userPreferences.accept_type == VanillaCookieConsent.AcceptType.NECESSARY
        ? onFirstAcceptOnlyNecessary(cookie, cookieConsent)
        : onFirstAcceptAll(cookie, cookieConsent);
    },
    languages,
    // override default config if necessary
    ...config,
  };

  cookieConsent.run(cookieConsentConfig);

  return cookieConsent;
};

function pushToDataLayer(cookie: VanillaCookieConsent.Cookie<CookieConsentCategory>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'CookieConsent-update',
    'CookieConsent.necessary': cookie.level.includes(CookieConsentCategory.NECESSARY),
    'CookieConsent.analytics': cookie.level.includes(CookieConsentCategory.ANALYTICS),
    'CookieConsent.ad': cookie.level.includes(CookieConsentCategory.AD),
    'CookieConsent.functionality': cookie.level.includes(CookieConsentCategory.FUNCTIONALITY),
    'CookieConsent.personalization': cookie.level.includes(CookieConsentCategory.PERSONALIZATION),
    'CookieConsent.revision': cookie.revision,
  });
}

export default LmcCookieConsentManager;
