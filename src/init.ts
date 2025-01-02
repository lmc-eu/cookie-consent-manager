import { CookieConsentManager } from './CookieConsentManager';

(function initialize() {
  const init = 'initCookieConsentManager';
  /**
   * Make CookieConsentManager object accessible globally
   */
  if (typeof window[init] !== 'function') {
    /** @inheritdoc */
    window[init] = CookieConsentManager;
  }
})();
