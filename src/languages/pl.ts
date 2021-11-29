import { addSeparators } from '../utils';
import { Messages } from '../types/Messages';

const extra = {
  and: 'i',
};

/**
 * @param {Object} [messages] - Object with extra messages
 * @param {array} [messages.companyNames] - Array of strings with company names used to parametrized translations
 * @returns {Object} Object with translated messages
 */
export const config = (messages: Messages) => {
  const lang = { ...extra, ...messages };

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
        role: 'accept_all',
      },
      secondary_btn: {
        text: 'Akceptuj niezbędne',
        role: 'accept_necessary',
      },
    },
    settings_modal: {
      blocks: [
        {
          toggle: {
            value: 'necessary',
            enabled: true,
            readonly: true,
          },
        },
        {
          toggle: {
            value: 'ad',
            enabled: false,
            readonly: false,
          },
        },
        {
          toggle: {
            value: 'analytics',
            enabled: false,
            readonly: false,
          },
        },
        {
          toggle: {
            value: 'functionality',
            enabled: false,
            readonly: false,
          },
        },
        {
          toggle: {
            value: 'personalization',
            enabled: false,
            readonly: false,
          },
        },
      ],
    },
  };
};

export default config;
