// eslint-disable-next-line import/no-unresolved
const LmcCookieConsentManager = require('@lmc-eu/cookie-consent-manager');
// eslint-disable-next-line import/no-unresolved
const { DisplayMode } = require('@lmc-eu/cookie-consent-manager');

const ccmArgs = {
  displayMode: DisplayMode.SOFT,
  config: {
      cookie_name: 'lmc_ccm_example',
      force_consent: true,
      cookie_domain: 'example.com',
      cookie_necessary_only_expiration: 30,
  }
};

window.addEventListener('DOMContentLoaded', () => {
  LmcCookieConsentManager('example', ccmArgs);
});
