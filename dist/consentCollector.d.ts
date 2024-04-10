import { CookieConsentCategoryValues, VanillaCookieConsent } from './types';
/**
 * Submit information about consent level given by the user.
 */
declare function submitConsent(consentCollectorApiUrl: string, cookieConsent: VanillaCookieConsent.CookieConsent<CookieConsentCategoryValues>): void;
export default submitConsent;
