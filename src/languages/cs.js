export const config = {
  consent_modal: {
    title: 'Tyto stránky využívají cookies',
    description: `Kliknutím na „Přijmout vše“ dáváte souhlas společnosti LMC k využívání souborů Cookies a dalších identifikátorů ve vašem zařízení. Použití těchto Cookies a dalších identifikátorů usnadní navigaci na stránkách, zobrazení personalizovaného obsahu, cílený marketing, analýzu využívání našich produktů a služeb.
      Více informací naleznete na stránce <a href="https://www.lmc.eu/cs/cookies" target="_blank">Používání cookies</a>.`,
    primary_btn: {
      text: 'Přijmout vše',
      role: 'accept_all',
    },
    secondary_btn: {
      text: 'Přijmout nezbytné',
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
