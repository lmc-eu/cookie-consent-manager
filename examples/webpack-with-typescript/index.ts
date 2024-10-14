// eslint-disable-next-line import/no-unresolved
import { LmcCookieConsentManager, DisplayMode, SecondaryButtonMode } from '@lmc-eu/cookie-consent-manager';

const ccmArgs = {
  displayMode: DisplayMode.SOFT,
  secondaryButtonMode: SecondaryButtonMode.SHOW_SETTINGS,
  config: {
      cookie_name: 'lmc_ccm_example',
      cookie_domain: 'example.com',
      cookie_necessary_only_expiration: 30,
  }
};

window.addEventListener('DOMContentLoaded', () => {
  LmcCookieConsentManager('example', ccmArgs);
});
