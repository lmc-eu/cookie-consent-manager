import { CookieConsentCategory } from './types';
import { VanillaCookieConsent } from './types/vanilla-cookieconsent';
/**
 * Submit information about consent level given by the user.
 */
declare function submitConsent(consentCollectorApiUrl: string, cookieConsent: VanillaCookieConsent.CookieConsent<CookieConsentCategory>): void;
export default submitConsent;
