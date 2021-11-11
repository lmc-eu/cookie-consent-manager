export const config = {
  consent_modal: {
    title: 'Diese Website verwendet Cookies',
    description: `Indem Sie auf „Alles akzeptieren“ klicken, stimmen Sie der Verwendung von Cookies und anderen Identifikatoren auf Ihrem Gerät durch LMC s.r.o. zu. Die Verwendung dieser Cookies und anderer Identifikatoren erleichtert die Navigation auf der Website, die Anzeige personalisierter Inhalte, gezieltes Marketing und die Analyse der Nutzung unserer Produkte und Dienstleistungen.
      Weitere Informationen finden Sie unter <a href="https://www.lmc.eu/en/cookies/" target="_blank">Verwendung von Cookies</a>.`,
    primary_btn: {
      text: 'Alles akzeptieren',
      role: 'accept_all',
    },
    secondary_btn: {
      text: 'Das Notwendigste akzeptieren',
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
