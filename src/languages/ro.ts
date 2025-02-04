import { addSeparators, assembleCookieTableSections, assembleDescriptionIntro, legalizeAlmaCareer } from '../utils';
import { CookieTableCategories, ExtraMessages } from '../types';
import { Translation } from 'vanilla-cookieconsent';

const extra = {
  and: 'și',
  legalName: 'Alma Career și companiile din grupul său',
};
/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {CookieTableCategories} [cookieTable] - Cookie table items defined by category
 * @returns {Translation} Object with translated messages
 */
export const config = (extraMessages: ExtraMessages, cookieTable: CookieTableCategories): Translation => {
  const lang = { ...extra, ...extraMessages };
  const cookieTableHeaders = { name: 'Denumire', description: 'Descriere', expiration: 'Valabilitate' };

  return {
    consentModal: {
      title: lang.consentTitle ?? 'Datorită cookie-urilor, site-ul nostru va deveni și mai bun',
      description: `
      ${assembleDescriptionIntro(
        'În cazul în care vom înțelege mai bine ce vă interesează, vă vom putea afișa conținut adaptat intereselor dumneavoastră.',
        lang.descriptionIntro,
      )}
      <p>
        Făcând clic pe butonul „Permite toate”, sunteți de acord ca
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), extra.and)}
        să utilizeze fișierele cookies în scop de personalizare, analiză și marketing orientat.
        Mai multe informații despre cookies și despre modificarea setărilor acestora puteți găsi în <strong><a href="" data-cc="show-preferencesModal">setările proprii</a></strong>.
      </p>`,
      acceptAllBtn: 'Permite toate',
      acceptNecessaryBtn: 'Permite doar esențiale',
    },
    preferencesModal: {
      title: 'Personalizează setările cookies',
      acceptAllBtn: 'Permite toate',
      acceptNecessaryBtn: 'Permite doar esențiale',
      savePreferencesBtn: 'Salvează setările',
      sections: [
        {
          description: `Pentru a profita la maxim de site-ul nostru, este recomandat să permiteți toate tipurile de cookies.
            ${
              lang.preferencesModalMoreInfo ??
              `Mai multe informații despre ce sunt cookie-urile și despre cum le utilizăm puteți găsi în <a href="https://www.almacareer.com/gdpr" target="_blank">Politica de cookies</a>.`
            }`,
        },
        ...assembleCookieTableSections(
          cookieTableHeaders,
          {
            necessary: {
              title: 'Cookie-uri tehnice',
              description:
                'Aceste cookies sunt esențiale pentru funcționarea site-ului nostru, de aceea nu există posibilitatea de a le opri. Fără acestea, nu ar fi, de exemplu, posibil să afișăm conținut pe site și nu ar fi posibilă autentificarea.',
            },
            analytics: {
              title: 'Cookie-uri analitice',
              description:
                'Cookie-urile analitice ne ajută să urmărim numărul de vizitatori ai site-ului nostru și modul în care aceștia utilizează site-ul. Datorită acestor cookies, putem să îmbunătățim constant site-ul nostru și serviciile oferite.',
            },
            functionality: {
              title: 'Cookie-uri de funcționalitate',
              description:
                'Datorită acestor cookies, site-ul nostru este și mai eficient și funcționează mai bine. Ne permit, de exemplu, să folosim chat-ul, pentru a vă putea răspunde rapid și ușor la toate întrebările.',
            },
            ad: {
              title: 'Cookie-uri publicitare',
              description:
                'Aceste cookies ne permit să analizăm eficiența publicității noastre și a ofertei de servicii personalizate. Cu ajutorul cookie-urilor publicitare, putem să vă anunțăm online cu privire la noutăți care v-ar putea fi de interes pentru dumneavoastră.',
            },
            personalization: {
              title: 'Cookie-uri pentru personalizare',
              description:
                'Serviciile noastre funcționează mai bine atunci când le putem personaliza pentru fiecare utilizator. Prin acceptarea Cookie-urilor pentru personalizare, creșteți șansele de a primi exact conținutul dorit.',
            },
          },
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
