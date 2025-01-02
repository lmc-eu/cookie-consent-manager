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
  legalName: 'Alma Career i drugim kompanijama iz njene poslovne grupe',
};

/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {CookieTableCategories} [cookieTable] - Cookie table items defined by category
 * @returns {Translation} Object with translated messages
 */
export const config = (extraMessages: ExtraMessages, cookieTable: CookieTableCategories): Translation => {
  const lang = { ...extra, ...extraMessages };
  const cookieTableHeaders = { name: 'Naziv', description: 'Opis', expiration: 'Isticanje' };

  return {
    consentModal: {
      title: lang.consentTitle ?? 'Kolačići čine našu stranicu još boljom',
      description: `
      ${assembleDescriptionIntro(
        'Bolje razumijevanje onoga što vas zanima, pokazat ćemo vam relevantniji sadržaj.',
        lang.descriptionIntro,
      )}
      <p>
        Klikom na dugme „Prihvati sve“, dajete
        ${pluralize(lang.companyNames.length, lang.company, lang.companies)}
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        svoju saglasnost za korištenje kolačića za personalizaciju, analitiku i ciljani marketing.
        Možete prilagoditi upotrebu kolačića u svojim <strong><a href="" data-cc="show-preferencesModal">prilagođenim postavkama</a></strong>.
      </p>`,
      acceptAllBtn: 'Prihvati sve',
      acceptNecessaryBtn: 'Prihvatiti neophodno',
    },
    preferencesModal: {
      title: 'Prilagođenim postavkama kolačića',
      acceptAllBtn: 'Prihvati sve',
      acceptNecessaryBtn: 'Prihvatiti neophodno',
      savePreferencesBtn: 'Sačuvaj postavke',
      sections: [
        {
          description: `Ako želite da izvučete maksimum iz naše web stranice, najbolje je dozvoliti sve vrste kolačića.
            ${
              lang.preferencesModalMoreInfo ??
              `Više informacija o tome šta su kolačići i kako radimo s njima možete pronaći na stranici <a href="https://www.almacareer.com/gdpr" target="_blank">Politika privatnosti</a>.`
            }`,
        },
        ...assembleCookieTableSections(
          cookieTableHeaders,
          {
            necessary: {
              title: 'Tehnički potrebni kolačići',
              description:
                'Ovi kolačići su neophodni za pravilno funkcioniranje naše web stranice i stoga se ne mogu onemogućiti. Bez njih ne bi bilo moguće npr. za prikaz bilo kojeg sadržaja ili za prijavu na našu web stranicu.',
            },
            analytics: {
              title: 'Analitički kolačići',
              description:
                'To nam pomaže da pratimo koliko ljudi posjeti našu web stranicu i kako je koriste. Ove informacije nam zatim omogućavaju da kontinuirano poboljšavamo web stranicu i druge usluge.',
            },
            functionality: {
              title: 'Funkcionalni kolačići',
              description:
                'Naša web stranica je još efikasnija i radi bolje zahvaljujući ovim kolačićima. Na primjer, omogućavaju nam korištenje usluge chata i brzo i jednostavno odgovaranje na vaša pitanja.',
            },
            ad: {
              title: 'Marketinški kolačići',
              description:
                'Ovi kolačići nam pomažu da izmjerimo učinkovitost našeg oglašavanja i ciljanih ponuda usluga. Marketinški kolačići nam omogućavaju da vam donesemo vijesti koje bi vas mogle zanimati na Internetu.',
            },
            personalization: {
              title: 'Kolačići za personalizaciju',
              description:
                'Naše usluge bolje funkcioniraju ako ih možemo prilagoditi određenim korisnicima. Dopuštanjem kolačića za personalizaciju povećavate svoje šanse da pronađete sadržaj koji želite.',
            },
          },
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
