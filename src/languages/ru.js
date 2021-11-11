export const config = {
  consent_modal: {
    title: 'Этот сайт использует файлы cookie',
    description: `Нажав «Принять все», Вы даете свое согласие компании ООО «LMC» на использование файлов cookie и других идентификаторов на Вашем устройстве. Использование файлов cookie и других идентификаторов облегчит навигацию по сайту, отображения персонализированного контента, целевой маркетинг, анализ использования наших продуктов и услуг.
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

export default config;
