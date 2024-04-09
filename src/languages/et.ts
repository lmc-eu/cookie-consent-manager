import {
  addSeparators,
  assembleCategoryAd,
  assembleCategoryAnalytics,
  assembleCategoryFunctionality,
  assembleCategoryNecessary,
  assembleCategoryPersonalization,
  assembleDescriptionIntro,
  assembleSecondaryButton,
  isSettingsButtonNotShown,
  legalizeAlmaCareer,
  pluralize,
} from '../utils';
import { CookieTableCategories, ExtraMessages, Values, VanillaCookieConsent } from '../types';
import { SecondaryButtonMode } from '../constants';

const extra = {
  and: 'ning',
  company: 'ettevõttele',
  companies: 'ettevõtetele',
  legalName: 'Alma Career ja teistele selle ärigrupi ettevõtetele',
};

/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {SecondaryButtonMode} [secondaryButtonMode] - Which secondary button should be shown
 * @param {CookieTableCategories} [cookieTable] - Cookie table items defined by category
 * @returns {VanillaCookieConsent.Languages} Object with translated messages
 */
export const config = (
  extraMessages: ExtraMessages,
  secondaryButtonMode: Values<typeof SecondaryButtonMode>,
  cookieTable: CookieTableCategories,
): VanillaCookieConsent.Languages => {
  const lang = { ...extra, ...extraMessages };

  return {
    consent_modal: {
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
        ${
          isSettingsButtonNotShown(secondaryButtonMode)
            ? `Küpsiste kasutamist saad kohandada oma <strong><a href="" data-cc="c-settings">kohandatud seadetes</a></strong>.`
            : ''
        }
      </p>`,
      primary_btn: {
        text: 'Nõustun kõigiga',
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, 'Nõustun tarvilikega', 'Kohandatud seaded'),
    },
    settings_modal: {
      title: 'Kohandatud küpsiste seaded',
      accept_all_btn: 'Nõustun kõigiga',
      reject_all_btn: 'Nõustun tarvilikega',
      save_settings_btn: 'Salvesta sätted',
      cookie_table_headers: [{ name: 'Nimetus' }, { description: 'Kirjeldus' }, { expiration: 'Aegumine' }],
      blocks: [
        {
          description:
            `Kui soovid meie veebilehest maksimumi võtta, on kõige parem nõustuda kõigi küpsistega.\n` +
            (lang.settingsModalMoreInfo ??
              `Lisateavet selle kohta, mis on küpsised ja kuidas me nendega töötame, leiate lehelt
              <a href="https://www.almacareer.com/gdpr" target="_blank">Privaatsuspoliitika</a>.`),
        },
        assembleCategoryNecessary(
          'Tehniliselt vajalikud küpsised',
          'Need küpsised on meie veebilehe nõuetekohaseks toimimiseks hädavajalikud ja seetõttu ei saa neid keelata. Ilma nendeta poleks võimalik näiteks teatud sisu kuvamine või meie veebilehele sisse logimine.',
          cookieTable,
        ),
        assembleCategoryAnalytics(
          'Analüütilised küpsised',
          'Need aitavad meil jälgida kui palju inimesi meie veebilehte külastab ja kuidas nad seda kasutavad. See teave võimaldab meil veebilehte ja muid teenuseid pidevalt täiustada.',
          cookieTable,
        ),
        assembleCategoryFunctionality(
          'Funktsionaalsed küpsised',
          'Meie veebileht on veelgi tõhusam ja töötab paremini tänu nendele küpsistele.',
          cookieTable,
        ),
        assembleCategoryAd(
          'Turundusküpsised',
          'Need küpsised aitavad meil mõõta meie reklaamide ja suunatud teenusepakkumiste tõhusust. Turundusküpsised võimaldavad ka meil sulle internetist informatsiooni leida, mis võib sinu jaoks asjakohane ja huvipakkuv olla.',
          cookieTable,
        ),
        assembleCategoryPersonalization(
          'Isikupärastamise küpsised',
          'Meie teenused toimivad paremini, kui suudame neid konkreetsetele kasutajatele kohandada. Isikupärastamise küpsiste lubamisega suurendad oma võimalusi soovitud sisu leida.',
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
