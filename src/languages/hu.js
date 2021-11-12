import { addSeparators } from '../utils';

const extra = {
  and: 'és',
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
      title: 'Az oldalak süti fájlokat használnak',
      description: `A „Mindent elfogadok” gombra kattintva a hozzájárulását adja ahhoz, hogy az ${addSeparators(
        lang.companyNames,
        extra.and,
      )} süti fájlokat és egyéb azonosítókat használjon az Ön eszközén. E süti fájlok és egyéb azonosítók használata megkönnyíti a weboldalon belüli navigációt, a személyre szabott tartalom megjelenítését, a célzott marketinget, valamint termékeink és szolgáltatásaink használatának elemzését.
      Bővebb információkat a <a href="https://www.lmc.eu/en/cookies/" target="_blank">Sütihasználat</a> oldalon talál.`,
      primary_btn: {
        text: 'Minden elfogadása',
        role: 'accept_all',
      },
      secondary_btn: {
        text: 'A legszükségesebbek elfogadása',
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
