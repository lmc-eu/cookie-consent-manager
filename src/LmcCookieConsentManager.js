import 'vanilla-cookieconsent';

import { config as configEn } from './languages/en';
import { config as configCs } from './languages/cs';

const defaultOptions = { currentLang: 'cs', themeCss: '', config: {}}

const LmcCookieConsentManager = (options = defaultOptions) => {
  const {
    currentLang,
    themeCss,
    config,
  } = options;

  const cookieconsent = window.initCookieConsent();

  cookieconsent.run({
    current_lang: currentLang,
    theme_css: themeCss,
    cookie_name: 'lmc_ccm',
    cookie_expiration : 365,
    gui_options: {
      consent_modal : {
          layout : 'bar',                 // box/cloud/bar
          position : 'bottom center',     // bottom/middle/top + left/right/center
          transition: 'slide'             // zoom/slide
      },
    },
    onAccept: () => {
      alert('Cookie Consent Accepted');
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
