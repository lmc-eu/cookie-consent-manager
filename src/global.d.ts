import { CookieConsentCategoryValues, VanillaCookieConsent } from './types';
import LmcCookieConsentManager from './LmcCookieConsentManager';

declare global {
  interface Window {
    dataLayer: any[];
    initCookieConsent: () => VanillaCookieConsent.CookieConsent<CookieConsentCategoryValues>;
    initLmcCookieConsentManager: typeof LmcCookieConsentManager;
  }
}
