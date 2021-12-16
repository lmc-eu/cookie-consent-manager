import { addSeparators } from '../utils';
import { ExtraMessages, CookieConsentCategory } from '../types';
import { VanillaCookieConsent } from '../types/vanilla-cookieconsent';

const extra = {
  and: 'and',
};
/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {array} [extraMessages.companyNames] - Array of strings with company names used to parametrized translations
 * @returns {VanillaCookieConsent.Languages} Object with translated messages
 */
export const config = (extraMessages: ExtraMessages): VanillaCookieConsent.Languages => {
  const lang = { ...extra, ...extraMessages };

  return {
    consent_modal: {
      title: 'Cookies make our site even better',
      description: `By better understanding what you're interested in, we'll show you more relevant content.
      By clicking the "Accept all" button, you give ${addSeparators(
        lang.companyNames,
        extra.and,
      )} your consent to use cookies for personalisation, analytics and targeted marketing.
      <a href="https://www.lmc.eu/en/cookies/" target="_blank">What are cookies and how do we use them?</a>`,
      primary_btn: {
        text: 'Accept all',
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: {
        text: 'Accept necessary',
        role: VanillaCookieConsent.SecondaryButtonRole.ACCEPT_NECESSARY,
      },
    },
    settings_modal: {
      blocks: [
        {
          toggle: {
            value: CookieConsentCategory.NECESSARY,
            enabled: true,
            readonly: true,
          },
        },
        {
          toggle: {
            value: CookieConsentCategory.AD,
            enabled: false,
            readonly: false,
          },
        },
        {
          toggle: {
            value: CookieConsentCategory.ANALYTICS,
            enabled: false,
            readonly: false,
          },
        },
        {
          toggle: {
            value: CookieConsentCategory.FUNCTIONALITY,
            enabled: false,
            readonly: false,
          },
        },
        {
          toggle: {
            value: CookieConsentCategory.PERSONALIZATION,
            enabled: false,
            readonly: false,
          },
        },
      ],
    },
  };
};

export default config;
