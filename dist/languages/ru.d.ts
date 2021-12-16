import { ExtraMessages } from '../types';
import { VanillaCookieConsent } from '../types/vanilla-cookieconsent';
/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {array} [extraMessages.companyNames] - Array of strings with company names used to parametrized translations
 * @returns {VanillaCookieConsent.Languages} Object with translated messages
 */
export declare const config: (extraMessages: ExtraMessages) => VanillaCookieConsent.Languages;
export default config;
