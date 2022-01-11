import { addSeparators, pluralize } from '../utils';
import { ExtraMessages, CookieConsentCategory } from '../types';
import { VanillaCookieConsent } from '../types/vanilla-cookieconsent';

const extra = {
  and: 'и',
  company: 'компаниям',
  companies: 'компаниям',
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
      title: 'Этот сайт использует файлы cookie',
      description: `Нажав «Принять все», Вы даете свое согласие ${pluralize(
        lang.companyNames.length,
        lang.company,
        lang.companies,
      )} ${addSeparators(
        lang.companyNames,
        lang.and,
      )} на использование файлов cookie и других идентификаторов на Вашем устройстве. Использование файлов cookie и других идентификаторов облегчит навигацию по сайту, отображения персонализированного контента, целевой маркетинг, анализ использования наших продуктов и услуг.
      <a href="" data-cc="c-settings">TODO show settings</a>.
      Для получения дополнительной информации см. раздел <a href="https://www.lmc.eu/en/cookies/" target="_blank">использование файлов cookie</a>.`,
      primary_btn: {
        text: 'Принять все',
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: {
        text: 'Принятие необходимо',
        role: VanillaCookieConsent.SecondaryButtonRole.ACCEPT_NECESSARY,
      },
    },
    settings_modal: {
      title: 'title TODO',
      accept_all_btn: 'Принять все',
      reject_all_btn: 'Принятие необходимо',
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
