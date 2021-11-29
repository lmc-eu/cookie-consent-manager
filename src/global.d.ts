import { CookieConsent } from './types';
import LmcCookieConsentManager from './LmcCookieConsentManager';

declare global {
  interface Window {
    dataLayer: any[];
    initCookieConsent: () => CookieConsent;
    initLmcCookieConsentManager: typeof LmcCookieConsentManager;
  }
}
