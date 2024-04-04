import 'vanilla-cookieconsent';
import { nanoid } from 'nanoid';
import submitConsent from './consentCollector';
import {
  CookieConsentCategoryValues,
  CookieConsentManager,
  CookieConsentManagerOptions,
  OnAcceptCallback,
  OnChangeCallback,
  VanillaCookieConsent,
} from './types';
import { CookieConsentCategory, DisplayMode, SecondaryButtonMode } from './constants';
import { assembleLanguagesConfig } from './languages/loader';

/* eslint-disable-next-line no-unused-vars */
const noopAcceptCallback: OnAcceptCallback = (cookieConsent) => {};
/* eslint-disable-next-line no-unused-vars */
const noopChangeCallback: OnChangeCallback = (cookieConsent, categories) => {};

const defaultOptions: CookieConsentManagerOptions = {
  defaultLang: 'cs',
  autodetectLang: true,
  consentCollectorApiUrl: 'https://ccm.lmc.cz/local-data-acceptation-data-entries',
  onFirstAccept: noopAcceptCallback,
  onAccept: noopAcceptCallback,
  onChange: noopChangeCallback,
  companyNames: ['Alma Career'],
  displayMode: DisplayMode.FORCE,
  secondaryButtonMode: SecondaryButtonMode.ACCEPT_NECESSARY,
  translationOverrides: {},
  cookieTable: {},
  config: {},
};

/**
 * @param {string} serviceName - Identifier of the source service (website/application). Must be provided.
 * @param {CookieConsentManagerOptions} [args] - Options for cookie consent manager
 * @param {string} [args.defaultLang] - Default language. Must be one of predefined languages.
 * @param {boolean} [args.autodetectLang] - Autodetect language from the browser
 * @param {?string} [args.consentCollectorApiUrl] - URL of the API where user consent information should be sent.
 *   Null to disable.
 * @param {OnFirstAcceptCallback} [args.onFirstAccept] - Callback to be executed right after any consent is just accepted
 * @param {OnAcceptCallback} [args.onAccept] - Callback to be executed when any consent is detected (either given right now
 *   or already saved previously)
 * @param {OnChangeCallback} [args.onChange] - Callback to be executed right after user change his/her preferences
 * @param {Array} [args.companyNames] - Array of strings with company names. Adjust only when the consent needs
 *   to be given to multiple companies.
 * @param {DisplayMode} [args.displayMode] - Which button should be displayed next to "Accept all" button. Either
 *   `acceptNecessary` (default) or `showSettings`.
 * @param {SecondaryButtonMode} [args.secondaryButtonMode] - `force` (default) to show consent in a centered modal box
 *    and to block page until user action. `soft` to show consent in a banner on the bottom of the page.
 * @param {Record<string, TranslationOverride>} [args.translationOverrides] - Translation overrides for specified languages
 * @param {CookieTable} [args.cookieTable] - Cookie table for specified languages
 * @param {VanillaCookieConsent.Options} [args.config] - Override default config.
 *   See https://github.com/orestbida/cookieconsent/blob/master/Readme.md#all-available-options
 * @returns {VanillaCookieConsent.CookieConsent<CookieConsentCategoryValues>} Instance of the underlying CookieConsent component.
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
    onAccept,
    onChange,
    companyNames,
    displayMode,
    secondaryButtonMode,
    translationOverrides,
    cookieTable,
    config,
  } = options;
  const cookieName = 'lmc_ccm';
  const cookieConsent = window.initCookieConsent();

  const onFirstAcceptHandler = (
    userPreferences: VanillaCookieConsent.UserPreferences<CookieConsentCategoryValues>,
    cookie: VanillaCookieConsent.Cookie<CookieConsentCategoryValues>,
  ) => {
    const cookieData = cookieConsent.get('data');
    if (cookieData == null || !('uid' in cookieData)) {
      cookieConsent.set('data', {
        value: { serviceName, uid: nanoid() },
        mode: 'update',
      });
    }

    pushToDataLayer(cookie);

    if (consentCollectorApiUrl !== null) {
      submitConsent(consentCollectorApiUrl, cookieConsent);
    }

    onFirstAccept(cookieConsent);
  };

  const onAcceptHandler = () => {
    onAccept(cookieConsent);
  };

  const onChangeHandler = (
    cookie: VanillaCookieConsent.Cookie<CookieConsentCategoryValues>,
    changedCategories: Array<CookieConsentCategoryValues>,
  ) => {
    const userPreferences = cookieConsent.getUserPreferences();
    const categories = {
      accepted: userPreferences.accepted_categories,
      rejected: userPreferences.rejected_categories,
      changed: changedCategories,
    };

    pushToDataLayer(cookie);

    if (consentCollectorApiUrl !== null) {
      submitConsent(consentCollectorApiUrl, cookieConsent);
    }

    onChange(cookieConsent, categories);
  };

  const cookieConsentConfig: VanillaCookieConsent.Options<CookieConsentCategoryValues> = {
    auto_language: autodetectLang ? 'document' : null, // Autodetect language based on `<html lang="...">` value
    autorun: true, // Show the cookie consent banner as soon as possible
    cookie_expiration: 365, // 1 year
    cookie_necessary_only_expiration: 60, // 2 months
    cookie_name: cookieName, // Predefined cookie name. Do not override.
    current_lang: defaultLang, // Default language used when auto_language is false (or when autodetect failed)
    delay: 0, // Show the modal immediately after init
    force_consent: displayMode == DisplayMode.FORCE,
    hide_from_bots: true, // To be hidden also from Selenium
    page_scripts: true, // Manage third-party scripts loaded using <script>
    use_rfc_cookie: true, // Store cookie content in RFC compatible format.
    gui_options: {
      consent_modal: {
        layout:
          displayMode == DisplayMode.FORCE
            ? VanillaCookieConsent.GuiConsentLayout.BOX
            : VanillaCookieConsent.GuiConsentLayout.BAR,
        position:
          displayMode == DisplayMode.FORCE
            ? VanillaCookieConsent.GuiConsentPosition.MIDDLE_CENTER
            : VanillaCookieConsent.GuiConsentPosition.BOTTOM_CENTER,
        transition: VanillaCookieConsent.Transition.SLIDE, // zoom/slide
        swap_buttons: true,
      },
      settings_modal: {
        layout: VanillaCookieConsent.GuiSettingsLayout.BOX,
        transition: VanillaCookieConsent.Transition.SLIDE,
      },
    },
    onAccept: onAcceptHandler,
    onFirstAction: onFirstAcceptHandler,
    onChange: onChangeHandler,
    languages: assembleLanguagesConfig(companyNames, translationOverrides, secondaryButtonMode, cookieTable),
    // override default config if necessary
    ...config,
  };

  cookieConsent.run(cookieConsentConfig);

  return cookieConsent;
};

function pushToDataLayer(cookie: VanillaCookieConsent.Cookie<CookieConsentCategoryValues>) {
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
export { CookieConsentCategory, DisplayMode, SecondaryButtonMode, VanillaCookieConsent };
