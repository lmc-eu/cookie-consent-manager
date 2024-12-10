// eslint-disable-next-line import/no-unresolved
import { LmcCookieConsentManager, DisplayMode } from '@lmc-eu/cookie-consent-manager';

const ccmArgs = {
  displayMode: DisplayMode.SOFT,
  config: {
      cookie: {
        name:  'lmc_ccm_example',
        domain: 'example.com',
        expiresAfterDays: 365,
      }
  }
};

window.addEventListener('DOMContentLoaded', () => {
  LmcCookieConsentManager('example', ccmArgs);
});
