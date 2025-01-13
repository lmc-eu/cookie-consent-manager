import 'vanilla-cookieconsent';
import { type CookieConsentManager } from './types';
import { CookieConsentCategory, DisplayMode } from './constants';
import * as CookieConsent from 'vanilla-cookieconsent';
/**
 * @param {string} serviceName - Identifier of the source service (website/application). Must be provided.
 * @param {CookieConsentManagerOptions} [args] - Options for cookie consent manager
 * @param {string} [args.defaultLang] - Default language. Must be one of predefined languages.
 * @param {boolean} [args.autodetectLang] - Autodetect language from the browser
 * @param {?string} [args.consentCollectorApiUrl] - URL of the API where user consent information should be sent.
 *   Null to disable.
 * @param {OnFirstConsentCallback} [args.onFirstConsent] - Callback to be executed right after any consent is just accepted
 * @param {OnConsentCallback} [args.onConsent] - Callback to be executed when any consent is detected (either given
 *   right now or already saved previously)
 * @param {OnChangeCallback} [args.onChange] - Callback to be executed right after user change his/her preferences
 * @param {Array} [args.companyNames] - Array of strings with company names. Adjust only when the consent needs
 *   to be given to multiple companies.
 * @param {DisplayMode} [args.displayMode] - `force` (default) to show consent in a centered modal box
 *    and to block page until user action. `soft` to show consent in a banner on the bottom of the page.
 * @param {Record<string, TranslationOverride>} [args.translationOverrides] - Translation overrides for specified languages
 * @param {CookieTable} [args.cookieTable] - Cookie table for specified languages
 * @param {CookieConsentConfig} [args.config] - Override default config.
 *   See https://cookieconsent.orestbida.com/reference/configuration-reference.html
 * @returns {CookieConsent} Instance of the underlying CookieConsent component.
 *   See https://cookieconsent.orestbida.com/reference/api-reference.html
 */
declare const CookieConsentManager: CookieConsentManager;
export { CookieConsentCategory, DisplayMode, CookieConsent, CookieConsentManager };
