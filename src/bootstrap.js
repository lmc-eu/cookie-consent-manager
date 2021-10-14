import LmcCookieConsentManager from './LmcCookieConsentManager';

(function() {
  const init = 'initLmcCookieConsentManager';
  /**
   * Make LmcCookieConsent object accessible globally
   */
  if(typeof window[init] !== 'function'){
      window[init] = LmcCookieConsentManager
  }
})();
