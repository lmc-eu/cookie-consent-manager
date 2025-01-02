import { AlmaCareerCookieConsentManager } from './AlmaCareerCookieConsentManager';

(function initialize() {
  const init = 'initAlmaCareerCookieConsentManager';
  /**
   * Make AlmaCareerCookieConsentManager object accessible globally
   */
  if (typeof window[init] !== 'function') {
    /** @inheritdoc */
    window[init] = AlmaCareerCookieConsentManager;
  }
})();
