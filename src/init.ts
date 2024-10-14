import { LmcCookieConsentManager } from './LmcCookieConsentManager';

(function initialize() {
  const init = 'initLmcCookieConsentManager';
  /**
   * Make LmcCookieConsent object accessible globally
   */
  if (typeof window[init] !== 'function') {
    /** @inheritdoc */
    window[init] = LmcCookieConsentManager;
  }
})();
