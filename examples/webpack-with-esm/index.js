// eslint-disable-next-line import/no-unresolved
import { DisplayMode, AlmaCareerCookieConsentManager } from '@lmc-eu/cookie-consent-manager';

const ccmArgs = {
  displayMode: DisplayMode.SOFT,
  config: {
    cookie: {
      name:  'almacareer_ccm_example',
      domain: 'example.com',
      expiresAfterDays: 365,
    }
  }
};

window.addEventListener('DOMContentLoaded', () => {
  AlmaCareerCookieConsentManager('example', ccmArgs);
});
