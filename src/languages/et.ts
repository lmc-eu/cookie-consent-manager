import {
  addSeparators,
  assembleCookieTableSections,
  assembleDescriptionIntro,
  legalizeAlmaCareer,
  pluralize,
} from '../utils';
import { CookieTableCategories, ExtraMessages } from '../types';
import { Translation } from 'vanilla-cookieconsent';

const extra = {
  and: 'ning',
  company: 'ettevõttele',
  companies: 'ettevõtetele',
  legalName: 'Alma Career ja teistele selle ärigrupi ettevõtetele',
};

/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {CookieTableCategories} [cookieTable] - Cookie table items defined by category
 * @returns {Translation} Object with translated messages
 */
export const config = (extraMessages: ExtraMessages, cookieTable: CookieTableCategories): Translation => {
  const lang = { ...extra, ...extraMessages };
  const cookieTableHeaders = { name: 'Nimetus', description: 'Kirjeldus', expiration: 'Aegumine' };

  return {
    consentModal: {
      title: lang.consentTitle ?? 'Küpsised muudavad meie veebilehe kasutamise veelgi paremaks',
      description: `
      ${assembleDescriptionIntro(
        'Kui mõistame paremini, mis sind huvitab, näitame sulle asjakohasemat sisu.',
        lang.descriptionIntro,
      )}
      <p>
        Klõpsates nuppu „Nõustun kõigiga“, annate
        ${pluralize(lang.companyNames.length, lang.company, lang.companies)}
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        nõusoleku kasutada küpsiseid isikupärastamiseks, analüüsiks ja sihitud turunduseks.
        Küpsiste kasutamist saad kohandada oma <strong><a href="" data-cc="show-preferencesModal">kohandatud seadetes</a></strong>.
      </p>`,
      acceptAllBtn: 'Nõustun kõigiga',
      acceptNecessaryBtn: 'Nõustun tarvilikega',
    },
    preferencesModal: {
      title: 'Kohandatud küpsiste seaded',
      acceptAllBtn: 'Nõustun kõigiga',
      acceptNecessaryBtn: 'Nõustun tarvilikega',
      savePreferencesBtn: 'Salvesta sätted',
      sections: [
        {
          description: `Kui soovid meie veebilehest maksimumi võtta, on kõige parem nõustuda kõigi küpsistega.
            ${
              lang.preferencesModalMoreInfo ??
              `Lisateavet selle kohta, mis on küpsised ja kuidas me nendega töötame, leiate lehelt <a href="https://www.almacareer.com/gdpr" target="_blank">Privaatsuspoliitika</a>.`
            }`,
        },
        ...assembleCookieTableSections(
          cookieTableHeaders,
          {
            necessary: {
              title: 'Tehniliselt vajalikud küpsised',
              description:
                'Need küpsised on meie veebilehe nõuetekohaseks toimimiseks hädavajalikud ja seetõttu ei saa neid keelata. Ilma nendeta poleks võimalik näiteks teatud sisu kuvamine või meie veebilehele sisse logimine.',
            },
            analytics: {
              title: 'Analüütilised küpsised',
              description:
                'Need aitavad meil jälgida kui palju inimesi meie veebilehte külastab ja kuidas nad seda kasutavad. See teave võimaldab meil veebilehte ja muid teenuseid pidevalt täiustada.',
            },
            functionality: {
              title: 'Funktsionaalsed küpsised',
              description: 'Meie veebileht on veelgi tõhusam ja töötab paremini tänu nendele küpsistele.',
            },
            ad: {
              title: 'Turundusküpsised',
              description:
                'Need küpsised aitavad meil mõõta meie reklaamide ja suunatud teenusepakkumiste tõhusust. Turundusküpsised võimaldavad ka meil sulle internetist informatsiooni leida, mis võib sinu jaoks asjakohane ja huvipakkuv olla.',
            },
            personalization: {
              title: 'Isikupärastamise küpsised',
              description:
                'Meie teenused toimivad paremini, kui suudame neid konkreetsetele kasutajatele kohandada. Isikupärastamise küpsiste lubamisega suurendad oma võimalusi soovitud sisu leida.',
            },
          },
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
