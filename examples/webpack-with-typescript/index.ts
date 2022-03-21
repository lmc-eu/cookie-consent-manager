// eslint-disable-next-line import/no-unresolved
import LmcCookieConsentManager, { DisplayMode } from '@lmc-eu/cookie-consent-manager';

const ccmArgs = {
  displayMode: DisplayMode.SOFT,
  config: {
      cookie_name: 'lmc_ccm_example',
      cookie_domain: 'example.com',
      cookie_necessary_only_expiration: 30,
  }
};

window.addEventListener('DOMContentLoaded', () => {
  LmcCookieConsentManager('example', ccmArgs);
});
