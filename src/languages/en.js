export const config = {
  consent_modal: {
    title: 'This website uses cookies',
    description: `By clicking on "Accept all", you give your consent to LMC to use cookies and other identifiers on your device. The use of these cookies and other identifiers will simplify navigation on the site, enable personalized content, targeted marketing, analysis of the usage of our products and services.
      For more information read page <a href="https://www.lmc.eu/en/cookies/" target="_blank">Use of cookies</a>.`,
    primary_btn: {
      text: 'Accept all',
      role: 'accept_all',
    },
    secondary_btn: {
      text: 'Accept necessary',
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
