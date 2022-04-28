import { ExtraMessages, Values } from '../types';
import { VanillaCookieConsent } from '../types/vanilla-cookieconsent';
import { SecondaryButtonMode } from '../constants/SecondaryButtonMode';
/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {SecondaryButtonMode} [secondaryButtonMode] - Which secondary button should be shown
 * @returns {VanillaCookieConsent.Languages} Object with translated messages
 */
export declare const config: (extraMessages: ExtraMessages, secondaryButtonMode: Values<typeof SecondaryButtonMode>) => VanillaCookieConsent.Languages;
export default config;
