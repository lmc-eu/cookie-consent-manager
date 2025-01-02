import { CookieConsentCategoryValues, VanillaCookieConsent } from './types';
import CookieConsentManager from './CookieConsentManager';

declare global {
  interface Window {
    dataLayer: any[];
    initCookieConsent: () => VanillaCookieConsent.CookieConsent<CookieConsentCategoryValues>;
    initCookieConsentManager: typeof CookieConsentManager;
  }
}
