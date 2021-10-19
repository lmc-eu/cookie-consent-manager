import 'vanilla-cookieconsent';

import { config as configEn } from './languages/en';
import { config as configCs } from './languages/cs';

const defaultOptions = { currentLang: 'cs', themeCss: '', config: {} };

const LmcCookieConsentManager = (options = defaultOptions) => {
  const { currentLang, themeCss, config } = options;

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
    },
    languages: {
      en: configEn,
      cs: configCs,
    },
    // override default config if necessary
    ...config,
  });
};

export default LmcCookieConsentManager;
