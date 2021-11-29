import LmcCookieConsentManager from './LmcCookieConsentManager';

type Init = typeof LmcCookieConsentManager;

declare global {
  interface Window {
    [key: string]: Init;
  }
}

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
