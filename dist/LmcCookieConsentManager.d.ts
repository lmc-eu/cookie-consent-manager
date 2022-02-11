import 'vanilla-cookieconsent';
import { CookieConsentManager } from './types';
/**
 * @param {string} serviceName - Identifier of the source service (website/application). Must be provided.
 * @param {CookieConsentManagerOptions} [args] - Options for cookie consent manager
 * @param {string} [args.defaultLang] - Default language. Must be one of predefined languages.
 * @param {boolean} [args.autodetectLang] - Autodetect language from the browser
 * @param {?string} [args.consentCollectorApiUrl] - URL of the API where user consent information should be sent.
 *   Null to disable.
 * @param {OnFirstAcceptCallback} [args.onFirstAccept] - Callback to be executed right after any consent is just accepted
 * @param {OnAcceptCallback} [args.onAccept] - Callback to be executed when any consent is detected (either given right now
 *   or already saved previously)
 * @param {OnChangeCallback} [args.onChange] - Callback to be executed right after user change his/her preferences
 * @param {Array} [args.companyNames] - Array of strings with company names. Adjust only when the consent needs
 *   to be given to multiple companies.
 * @param {DisplayMode} [args.displayMode] - `force` to show consent in a centered modal box and to block page until
 *   user action. `soft` to show consent in a banner on the bottom of the page.
 * @param {VanillaCookieConsent.Options} [args.config] - Override default config.
 *   See https://github.com/orestbida/cookieconsent/blob/master/Readme.md#all-available-options
 * @returns {VanillaCookieConsent.CookieConsent<CookieConsentCategory>} Instance of the underlying CookieConsent component.
 *   For available API, see https://github.com/orestbida/cookieconsent#apis--configuration-parameters
 */
declare const LmcCookieConsentManager: CookieConsentManager;
export default LmcCookieConsentManager;
