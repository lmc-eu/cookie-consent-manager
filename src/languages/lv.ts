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
} from '../utils';
import { CookieTableCategories, ExtraMessages, Values, VanillaCookieConsent } from '../types';
import { SecondaryButtonMode } from '../constants';

const extra = {
  and: 'un',
  legalName: 'Alma Career un citiem tā biznesa grupas uzņēmumiem',
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
      title: lang.consentTitle ?? 'Sīkdatnes padara mūsu vietnes lietošanu vēl labāku',
      description: `
      ${assembleDescriptionIntro(
        'Labāk saprastu, kas jums interesē, mēs parādīsim atbilstošāko saturu.',
        lang.descriptionIntro,
      )}
      <p>
        Noklikšķinot uz pogas „Pieņemt visas“, jūs dodat
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        piekrišanu izmantot sīkdatnes personalizācijai, analītikai un mērķētam mārketingam.
        ${
          isSettingsButtonNotShown(secondaryButtonMode)
            ? `Jūs varat pielāgot sīkdatņu izmantošanu <strong><a href="" data-cc="c-settings">savos iestatījumos</a></strong>.`
            : ''
        }
      </p>`,
      primary_btn: {
        text: 'Pieņemt visas',
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, 'Pieņemt nepieciešamās', 'Pielāgoti iestatījumi'),
    },
    settings_modal: {
      title: 'Pielāgoti sīkdatņu iestatījumi',
      accept_all_btn: 'Pieņemt visas',
      reject_all_btn: 'Pieņemt nepieciešamās',
      save_settings_btn: 'Saglabāt iestatījumus',
      cookie_table_headers: [{ name: 'Nosaukums' }, { description: 'Apraksts' }, { expiration: 'Apraksts' }],
      blocks: [
        {
          description: `Ja vēlaties izmantot mūsu vietni maksimāli efektīvi, ieteicams atļaut visu veidu sīkdatnes.
            ${
              lang.settingsModalMoreInfo ??
              `Vairāk informācijas par to, kas ir sīkdatnes un kā mēs ar tām strādājam, Jūs varat atrast sadaļā <a href="https://www.almacareer.com/gdpr" target="_blank">Privātuma politika</a>.`
            }`,
        },
        assembleCategoryNecessary(
          'Nepieciešamās tehniskās sīkdatnes',
          'Šīs sīkdatnes ir būtiskas pilnvērtīgai mūsu vietnes darbībai, tāpēc tās nevar atspējot. Bez tām nebūtu iespējams, piemēram, rādīt jebkuru saturu vai pierakstīties mūsu vietnē.',
          cookieTable,
        ),
        assembleCategoryAnalytics(
          'Analītiskās sīkdatnes',
          'Šīs sīkdatnes palīdz mums uzraudzīt, cik daudz cilvēku apmeklē mūsu vietni un kā viņi to izmanto. Šī informācija ļauj mums nepārtraukti uzlabot vietni un pakalpojumus.',
          cookieTable,
        ),
        assembleCategoryFunctionality(
          'Funkcionālās sīkdatnes',
          'Mūsu vietne ir vēl efektīvāka un labāk darbojas, pateicoties šīm sīkdatnēm.',
          cookieTable,
        ),
        assembleCategoryAd(
          'Mārketinga sīkdatnes',
          'Šīs sīkdatnes palīdz mums mērīt mūsu reklāmas un mērķēto pakalpojumu piedāvājumu efektivitāti. Mārketinga sīkdatnes ļauj mums internetā jums piedāvāt jaunumus, kas varētu jūs interesēt.',
          cookieTable,
        ),
        assembleCategoryPersonalization(
          'Personalizācijas sīkdatnes',
          'Mūsu pakalpojumi darbojas labāk, ja mēs varam tos pielāgot konkrētiem lietotājiem. Atļaujot personalizācijas sīkdatnes, jūs palielināt iespējas atrast jums interesējošu saturu.',
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
