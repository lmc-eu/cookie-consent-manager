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
  and: 'i',
  company: 'kompaniji',
  companies: 'kompanijama',
  legalName: 'Alma Career i ostale kompanije iz njene poslovne grupe',
};

/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {CookieTableCategories} [cookieTable] - Cookie table items defined by category
 * @returns {Translation} Object with translated messages
 */
export const config = (extraMessages: ExtraMessages, cookieTable: CookieTableCategories): Translation => {
  const lang = { ...extra, ...extraMessages };
  const cookieTableHeaders = { name: 'Ime', description: 'Opis', expiration: 'Vreme isteka' };

  return {
    consentModal: {
      title: lang.consentTitle ?? 'Kolačići dodatno unapređuju naš sajt',
      description: `
      ${assembleDescriptionIntro(
        'Ako budemo bolje razumeli ono što vas zanima, prikazivaćemo relevantniji sadržaj.',
        lang.descriptionIntro,
      )}
      <p>
        Klikom na dugme „Prihvati sve” dajete
        ${pluralize(lang.companyNames.length, lang.company, lang.companies)}
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        svoju saglasnost za korišćenje kolačića za personalizaciju, analitiku i ciljani marketing.
         U prilagođenim podešavanjima možete da <strong><a href="" data-cc="show-preferencesModal">prilagodite korišćenje kolačića</a></strong>.
      </p>`,
      acceptAllBtn: 'Prihvati sve',
      acceptNecessaryBtn: 'Prihvati neophodne',
    },
    preferencesModal: {
      title: 'Prilagođena podešavanja kolačića',
      acceptAllBtn: 'Prihvati sve',
      acceptNecessaryBtn: 'Prihvati neophodne',
      savePreferencesBtn: 'Sačuvaj podešavanja',
      sections: [
        {
          description: `Ako želite da maksimalno iskoristite naš veb-sajt, najbolje bi bilo da dozvolite sve vrste kolačića.
            ${
              lang.preferencesModalMoreInfo ??
              `Više informacija o tome šta su kolačići i kako ih obrađujemo možete da pronađete u našoj <a href="https://www.almacareer.com/gdpr" target="_blank">politici kolačića</a>.`
            }`,
        },
        ...assembleCookieTableSections(
          cookieTableHeaders,
          {
            necessary: {
              title: 'Tehnički neophodni kolačići',
              description:
                'Ovi kolačići su neophodni za pravilno funkcionisanje našeg veb-sajta i zato se ne mogu onemogućiti. Bez njih ne bi bilo moguće npr. prikazati bilo kakav sadržaj ili se prijaviti na naš veb-sajt.',
            },
            analytics: {
              title: 'Analitički kolačići',
              description:
                'Oni nam pomažu da pratimo koliko ljudi posećuje naš veb-sajt i kako ga koriste. Ove informacije nam omogućavaju da kontinuirano poboljšavamo veb-sajt i druge usluge.',
            },
            functionality: {
              title: 'Funkcionalni kolačići',
              description:
                'Naš veb-sajt je još efikasniji i bolje funkcioniše zahvaljujući ovim kolačićima. Na primer, omogućavaju nam da koristimo uslugu četa i brzo i lako odgovorimo na vaša pitanja.',
            },
            ad: {
              title: 'Marketing kolačići',
              description:
                'Ovi kolačići nam pomažu da izmerimo efikasnost oglašavanja i ciljanih ponuda usluga. Marketing kolačići nam omogućavaju da vam pružimo vesti koje bi vas mogle zanimati na internetu.',
            },
            personalization: {
              title: 'Kolačići za personalizaciju',
              description:
                'Naše usluge rade bolje ako ih možemo prilagoditi konkretnim korisnicima. Ako omogućite kolačiće za personalizaciju, povećavate šanse da pronađete sadržaj koji želite.',
            },
          },
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
