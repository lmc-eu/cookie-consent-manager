import 'vanilla-cookieconsent';

import { config as configCs } from './languages/cs';
import { config as configEn } from './languages/en';
import { config as configPl } from './languages/pl';
import { config as configSk } from './languages/sk';

const defaultOptions = {
  currentLang: 'cs',
  themeCss: '',
  onFirstAccept: (cookie) => {},
  onFirstAcceptOnlyNecessary: (cookie) => {},
  onFirstAcceptAll: (cookie) => {},
  onAccept: (cookie) => {},
  onAcceptOnlyNecessary: (cookie) => {},
  onAcceptAll: (cookie) => {},
  config: {},
};

/**
 * @param {Object} args - Options for cookie consent manager
 * @param {string} args.currentLang - Specify one of the languages you have defined
 * @param {string} args.themeCss - Specify file to the .css file
 * @param {function} args.onFirstAccept - Callback to be executed right after any consent is just accepted
 * @param {function} args.onFirstAcceptOnlyNecessary - Callback to be executed right after only necessary cookies are accepted
 * @param {function} args.onFirstAcceptAll - Callback to be executed right after all cookies are accepted
 * @param {function} args.onAccept - Callback to be executed when any consent is detected (either given right now or already saved previously)
 * @param {function} args.onAcceptOnlyNecessary - Callback to be executed when consent with only necessary cookies is detected (either given right now or already saved previously)
 * @param {function} args.onAcceptAll - Callback to be executed when consent with all cookies is detected (either given right now or already saved previously)
 * @param {Object} args.config - Override default config. See https://github.com/orestbida/cookieconsent/blob/master/Readme.md#all-available-options
 */
const LmcCookieConsentManager = (args) => {
  const options = { ...defaultOptions, ...args };
  const {
    currentLang,
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

  const cookieconsent = window.initCookieConsent();
  const isFirstTimeAccept = !cookieconsent.validCookie(cookieName);

  cookieconsent.run({
    current_lang: currentLang,
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
      const givenLevels = cookieconsent.get('level');
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

      onAccept(cookie);

      if (isFirstTimeAccept) {
        onFirstAccept(cookie);
        acceptedOnlyNecessary
          ? onFirstAcceptOnlyNecessary(cookie)
          : onFirstAcceptAll(cookie);
      }

      acceptedOnlyNecessary ? onAcceptOnlyNecessary(cookie) : onAcceptAll(cookie);
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
};

export default LmcCookieConsentManager;
