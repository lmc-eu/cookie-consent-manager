import { CookieConsentCategoryValues, VanillaCookieConsent } from './types';
import AlmaCareerCookieConsentManager from './AlmaCareerCookieConsentManager';

declare global {
  interface Window {
    dataLayer: any[];
    initCookieConsent: () => VanillaCookieConsent.CookieConsent<CookieConsentCategoryValues>;
    initAlmaCareerCookieConsentManager: typeof AlmaCareerCookieConsentManager;
  }
}
