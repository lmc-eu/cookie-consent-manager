import { CookieValue, UserPreferences } from 'vanilla-cookieconsent';
/**
 * Submit information about consent level given by the user.
 */
declare function submitConsent(consentCollectorApiUrl: string, cookie: CookieValue, userPreferences: UserPreferences): void;
export default submitConsent;
