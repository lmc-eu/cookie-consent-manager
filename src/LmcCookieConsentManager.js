import 'vanilla-cookieconsent';

import { config as configCs } from './languages/cs';
import { config as configEn } from './languages/en';
import { config as configPl } from './languages/pl';
import { config as configSk } from './languages/sk';

const defaultOptions = {
  currentLang: 'cs',
  themeCss: '',
  onAccept: (cookie) => {},
  config: {},
};

/**
 * @param {Object} args - Options for cookie consent manager
 * @param {string} args.currentLang - Specify one of the languages you have defined
 * @param {string} args.themeCss - Specify file to the .css file
 * @param {function} args.onAccept - Callback to be executed after any consent is detected (either given now or already saved previously)
 * @param {Object} args.config - Override default config. See https://github.com/orestbida/cookieconsent/blob/master/Readme.md#all-available-options
 */
const LmcCookieConsentManager = (args) => {
  const options = { ...defaultOptions, ...args };
  const { currentLang, themeCss, onAccept, config } = options;

  const cookieconsent = window.initCookieConsent();

  cookieconsent.run({
    current_lang: currentLang,
    auto_language: true,
    theme_css: themeCss,
    cookie_name: 'lmc_ccm',
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
