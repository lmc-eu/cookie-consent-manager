// eslint-disable-next-line import/no-unresolved
import { LmcCookieConsentManager, DisplayMode, SecondaryButtonMode } from '@lmc-eu/cookie-consent-manager';

const ccmArgs = {
  displayMode: DisplayMode.SOFT,
  secondaryButtonMode: SecondaryButtonMode.SHOW_SETTINGS,
  config: {
      cookie: {
        name:  'almacareer_ccm_example',
        domain: 'example.com',
        expiresAfterDays: 365,
      }
  }
};

window.addEventListener('DOMContentLoaded', () => {
  LmcCookieConsentManager('example', ccmArgs);
});
