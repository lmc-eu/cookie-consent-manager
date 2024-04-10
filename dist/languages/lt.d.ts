import { CookieTableCategories, ExtraMessages, Values, VanillaCookieConsent } from '../types';
import { SecondaryButtonMode } from '../constants';
/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {SecondaryButtonMode} [secondaryButtonMode] - Which secondary button should be shown
 * @param {CookieTableCategories} [cookieTable] - Cookie table items defined by category
 * @returns {VanillaCookieConsent.Languages} Object with translated messages
 */
export declare const config: (extraMessages: ExtraMessages, secondaryButtonMode: Values<typeof SecondaryButtonMode>, cookieTable: CookieTableCategories) => VanillaCookieConsent.Languages;
export default config;
