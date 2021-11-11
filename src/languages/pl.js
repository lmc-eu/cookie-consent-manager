export const config = {
  consent_modal: {
    title: 'Ta strona używa cookies',
    description: `Klikając „Akceptuję wszystkie”, wyrażasz zgodę aby LMC wykorzystywało pliki cookie i inne identyfikatory na Twoim urządzeniu. Korzystanie z tych plików cookie i innych identyfikatorów ułatwi nawigację w serwisie, wyświetlanie spersonalizowanych treści, marketing ukierunkowany, analizę korzystania z naszych produktów i usług.
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

export default config;
