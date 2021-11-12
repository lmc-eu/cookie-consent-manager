import { addSeparators, pluralize } from '../utils';

const extra = {
  and: 'и',
  company: 'компаниям',
  companies: 'компаниям',
};

/**
 * @param {Object} [messages] - Object with extra messages
 * @param {array} [args.companyNames] - Array of strings with company names used to parametrized translations
 * @returns {Object} Object with translated messages
 */
export const config = (messages) => {
  const lang = { ...extra, ...messages };

  return {
    consent_modal: {
      title: 'Этот сайт использует файлы cookie',
      description: `Нажав «Принять все», Вы даете свое согласие ${pluralize(
        lang.companyNames.length,
        lang.company,
        lang.companies,
      )} ${addSeparators(
        lang.companyNames,
        extra.and,
      )} на использование файлов cookie и других идентификаторов на Вашем устройстве. Использование файлов cookie и других идентификаторов облегчит навигацию по сайту, отображения персонализированного контента, целевой маркетинг, анализ использования наших продуктов и услуг.
      Для получения дополнительной информации см. раздел <a href="https://www.lmc.eu/en/cookies/" target="_blank">использование файлов cookie</a>.`,
      primary_btn: {
        text: 'Принять все',
        role: 'accept_all',
      },
      secondary_btn: {
        text: 'Принятие необходимо',
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
