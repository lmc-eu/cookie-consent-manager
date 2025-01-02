import { addSeparators, assembleCookieTableSections, assembleDescriptionIntro, legalizeAlmaCareer } from '../utils';
import { CookieTableCategories, ExtraMessages } from '../types';
import { Translation } from 'vanilla-cookieconsent';

const extra = {
  and: 'un',
  legalName: 'Alma Career un citiem tā biznesa grupas uzņēmumiem',
};

/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {CookieTableCategories} [cookieTable] - Cookie table items defined by category
 * @returns {Translation} Object with translated messages
 */
export const config = (extraMessages: ExtraMessages, cookieTable: CookieTableCategories): Translation => {
  const lang = { ...extra, ...extraMessages };
  const cookieTableHeaders = { name: 'Nosaukums', description: 'Apraksts', expiration: 'Galiojimo laikas' };

  return {
    consentModal: {
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
        Jūs varat pielāgot sīkdatņu izmantošanu <strong><a href="" data-cc="show-preferencesModal">savos iestatījumos</a></strong>.
      </p>`,
      acceptAllBtn: 'Pieņemt visas',
      acceptNecessaryBtn: 'Pieņemt nepieciešamās',
    },
    preferencesModal: {
      title: 'Pielāgoti sīkdatņu iestatījumi',
      acceptAllBtn: 'Pieņemt visas',
      acceptNecessaryBtn: 'Pieņemt nepieciešamās',
      savePreferencesBtn: 'Saglabāt iestatījumus',
      sections: [
        {
          description: `Ja vēlaties izmantot mūsu vietni maksimāli efektīvi, ieteicams atļaut visu veidu sīkdatnes.
            ${
              lang.preferencesModalMoreInfo ??
              `Vairāk informācijas par to, kas ir sīkdatnes un kā mēs ar tām strādājam, Jūs varat atrast sadaļā <a href="https://www.almacareer.com/gdpr" target="_blank">Privātuma politika</a>.`
            }`,
        },
        ...assembleCookieTableSections(
          cookieTableHeaders,
          {
            necessary: {
              title: 'Nepieciešamās tehniskās sīkdatnes',
              description:
                'Šīs sīkdatnes ir būtiskas pilnvērtīgai mūsu vietnes darbībai, tāpēc tās nevar atspējot. Bez tām nebūtu iespējams, piemēram, rādīt jebkuru saturu vai pierakstīties mūsu vietnē.',
            },
            analytics: {
              title: 'Analītiskās sīkdatnes',
              description:
                'Šīs sīkdatnes palīdz mums uzraudzīt, cik daudz cilvēku apmeklē mūsu vietni un kā viņi to izmanto. Šī informācija ļauj mums nepārtraukti uzlabot vietni un pakalpojumus.',
            },
            functionality: {
              title: 'Funkcionālās sīkdatnes',
              description: 'Mūsu vietne ir vēl efektīvāka un labāk darbojas, pateicoties šīm sīkdatnēm.',
            },
            ad: {
              title: 'Mārketinga sīkdatnes',
              description:
                'Šīs sīkdatnes palīdz mums mērīt mūsu reklāmas un mērķēto pakalpojumu piedāvājumu efektivitāti. Mārketinga sīkdatnes ļauj mums internetā jums piedāvāt jaunumus, kas varētu jūs interesēt.',
            },
            personalization: {
              title: 'Personalizācijas sīkdatnes',
              description:
                'Mūsu pakalpojumi darbojas labāk, ja mēs varam tos pielāgot konkrētiem lietotājiem. Atļaujot personalizācijas sīkdatnes, jūs palielināt iespējas atrast jums interesējošu saturu.',
            },
          },
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
