import { addSeparators, pluralize } from '../utils';
import { ExtraMessages, CookieConsentCategory } from '../types';
import { VanillaCookieConsent } from '../types/vanilla-cookieconsent';

const extra = {
  and: 'a',
  company: 'spoločnosti',
  companies: 'spoločnostiam',
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
      title: 'Vďaka Cookies budú naše stránky ešte lepšie',
      description: `Presnejší obsah na mieru vám budeme zobrazovať, keď lepšie pochopíme, čo vás zaujíma.
      Kliknutím na tlačidlo „Prijať všetky“, čím dáte ${pluralize(
        lang.companyNames.length,
        lang.company,
        lang.companies,
      )} ${addSeparators(
        lang.companyNames,
        lang.and,
      )} súhlas s využívaním súborov Cookies za účelom personalizácie, analýzy a cieleného marketingu.
      <a href="https://www.lmc.eu/sk/cookies" target="_blank">Čo sú to Cookies a ako ich používame?</a>`,
      primary_btn: {
        text: 'Prijať všetky',
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: {
        text: 'Prijať nevyhnutné',
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
