import { addSeparators, pluralize } from '../utils';
import { ExtraMessages, CookieConsentCategory } from '../types';
import { VanillaCookieConsent } from '../types/vanilla-cookieconsent';

const extra = {
  and: 'i',
  company: 'firmę',
  companies: 'firmy',
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
      title: 'Dzięki plikom Cookies nasza strona będzie jeszcze lepsza',
      description: `Gdy lepiej zrozumiemy, co Cię interesuje, pokażemy dokładniejsze treści dopasowane do Twoich preferencji.
      Kliknij w przycisk „Akceptuj wszystkie”, aby wyrazić zgodę na wykorzystanie plików cookie przez
      ${pluralize(lang.companyNames.length, lang.company, lang.companies)} ${addSeparators(
        lang.companyNames,
        extra.and,
      )} do personalizacji, analizy i ukierunkowanego marketingu.
      <a href="" data-cc="c-settings">TODO show settings</a>.
      <a href="https://www.lmc.eu/pl/cookies" target="_blank">Co to są pliki cookie i jak je wykorzystujemy?</a>`,
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
      title: 'title TODO',
      accept_all_btn: 'Akceptuj wszystkie',
      reject_all_btn: 'Akceptuj niezbędne',
      save_settings_btn: 'save_settings_btn TODO',
      blocks: [
        {
          description: `Lorem ipsum`,
        },
        {
          title: 'NECESSARY TODO',
          description: `Lorem ipsum`,
          toggle: {
            value: CookieConsentCategory.NECESSARY,
            enabled: true,
            readonly: true,
          },
        },
        {
          title: 'ANALYTICS TODO',
          description: `Lorem ipsum`,
          toggle: {
            value: CookieConsentCategory.ANALYTICS,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'FUNCTIONALITY TODO',
          description: `Lorem ipsum`,
          toggle: {
            value: CookieConsentCategory.FUNCTIONALITY,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'AD TODO',
          description: `Lorem ipsum`,
          toggle: {
            value: CookieConsentCategory.AD,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'PERSONALIZATION TODO',
          description: `Lorem ipsum`,
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
