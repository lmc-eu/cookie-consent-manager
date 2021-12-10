import { addSeparators } from '../utils';
import { ExtraMessages, CookieConsentLevel } from '../types';
import { VanillaCookieConsent } from '../types/vanilla-cookieconsent';

const extra = {
  and: 'i',
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
      title: 'Ta strona używa cookies',
      description: `Klikając „Akceptuję wszystkie”, wyrażasz zgodę dla ${addSeparators(
        lang.companyNames,
        extra.and,
      )} do wykorzystywania plików i innych identyfikatorów na Twoim urządzeniu. Korzystanie z tych plików cookie i innych identyfikatorów ułatwi nawigację w serwisie, wyświetlanie spersonalizowanych treści, marketing ukierunkowany, analizę korzystania z naszych produktów i usług.
      Więcej informacji znajdziesz na stronie <a href="https://www.lmc.eu/pl/cookies" target="_blank">Korzystanie z plików Cookies</a>.`,
      primary_btn: {
        text: 'Akceptuj wszystkie',
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: {
        text: 'Akceptuj niezbędne',
        role: VanillaCookieConsent.SecondaryButtonRole.ACCEPT_NECESSARY,
      },
    },
    settings_modal: {
      blocks: [
        {
          toggle: {
            value: CookieConsentLevel.NECESSARY,
            enabled: true,
            readonly: true,
          },
        },
        {
          toggle: {
            value: CookieConsentLevel.AD,
            enabled: false,
            readonly: false,
          },
        },
        {
          toggle: {
            value: CookieConsentLevel.ANALYTICS,
            enabled: false,
            readonly: false,
          },
        },
        {
          toggle: {
            value: CookieConsentLevel.FUNCTIONALITY,
            enabled: false,
            readonly: false,
          },
        },
        {
          toggle: {
            value: CookieConsentLevel.PERSONALIZATION,
            enabled: false,
            readonly: false,
          },
        },
      ],
    },
  };
};

export default config;
