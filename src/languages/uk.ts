import { addSeparators, pluralize } from '../utils';
import { ExtraMessages, CookieConsentLevel } from '../types';
import { VanillaCookieConsent } from '../types/vanilla-cookieconsent';

const extra = {
  and: 'i',
  company: 'компаніям',
  companies: 'компаніям',
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
      title: 'Цей сайт використовує файли cookie',
      description: `Натиснувши «Прийняти все», Ви даєте свою згоду ${pluralize(
        lang.companyNames.length,
        lang.company,
        lang.companies,
      )} ${addSeparators(
        lang.companyNames,
        lang.and,
      )} на використання файлів cookie та інших ідентифікаторів на Вашому пристрої. Використання цих файлів cookie та інших ідентифікаторів полегшить навігацію по сайту, відображення персоналізованого контенту, цільовий маркетинг, аналіз використання наших продуктів і послуг.
      Для отримання додаткової інформації див. розділ <a href="https://www.lmc.eu/en/cookies/" target="_blank">Використання файлів cookie</a>.`,
      primary_btn: {
        text: 'Прийняти все',
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: {
        text: 'Прийняття необхідно',
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
