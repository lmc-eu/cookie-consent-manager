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
  company: 'firmę',
  companies: 'firmy',
  legalName: 'Alma Career i firmy z jej grupy biznesowej',
};

/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {CookieTableCategories} [cookieTable] - Cookie table items defined by category
 * @returns {Translation} Object with translated messages
 */
export const config = (extraMessages: ExtraMessages, cookieTable: CookieTableCategories): Translation => {
  const lang = { ...extra, ...extraMessages };
  const cookieTableHeaders = { name: 'Nazwa', description: 'Opis', expiration: 'Ważność (Do)' };

  return {
    consentModal: {
      title: lang.consentTitle ?? 'Dzięki plikom Cookies nasza strona będzie jeszcze lepsza',
      description: `
      ${assembleDescriptionIntro(
        'Gdy lepiej zrozumiemy, co Cię interesuje, pokażemy dokładniejsze treści dopasowane do Twoich preferencji.',
        lang.descriptionIntro,
      )}
      <p>
        Kliknij w przycisk „Akceptuj wszystkie”, aby wyrazić zgodę na wykorzystanie plików cookie przez
        ${pluralize(lang.companyNames.length, lang.company, lang.companies)}
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), extra.and)}
        do personalizacji, analizy i ukierunkowanego marketingu.
        Korzystanie z plików cookies możesz dostosować we <strong><a href="" data-cc="show-preferencesModal">własnych ustawieniach</a></strong>.
      </p>`,
      acceptAllBtn: 'Akceptuj wszystkie',
      acceptNecessaryBtn: 'Akceptuj niezbędne',
    },
    preferencesModal: {
      title: 'Własne ustawienia plików cookies',
      acceptAllBtn: 'Akceptuj wszystkie',
      acceptNecessaryBtn: 'Akceptuj niezbędne',
      savePreferencesBtn: 'Zapisz ustawienia',
      sections: [
        {
          description: `Aby w pełni wykorzystać możliwości naszej strony, najlepiej jest zezwolić na wszystkie rodzaje plików cookies.
            ${
              lang.preferencesModalMoreInfo ??
              `Więcej informacji na temat tego, czym są pliki cookies i jak z nimi pracujemy, znajdziesz w naszej <a href="https://www.almacareer.com/gdpr" target="_blank">Polityce plików cookie</a>.`
            }`,
        },
        ...assembleCookieTableSections(
          cookieTableHeaders,
          {
            necessary: {
              title: 'Technicznie niezbędne pliki cookies',
              description:
                'Te pliki cookies są niezbędne do prawidłowego funkcjonowania naszej strony internetowej, dlatego nie ma możliwości ich wyłączenia. Bez nich na naszej stronie na przykład nie można byłoby wyświetlić żadnej treści lub nie działałoby logowanie.',
            },
            analytics: {
              title: 'Analityczne pliki cookies',
              description:
                'Używamy ich do śledzenia, ile osób odwiedza naszą stronę internetową i jak z niej korzysta. Dzięki temu możemy stale ulepszać stronę i inne usługi.',
            },
            functionality: {
              title: 'Funkcjonalne pliki cookies',
              description:
                'Te pliki cookies sprawiają, że nasza strona internetowa jest jeszcze bardziej wydajna i działa lepiej. Pozwalają nam na przykład korzystać z czatu, dzięki temu możemy szybko i łatwo odpowiadać na Twoje pytania.',
            },
            ad: {
              title: 'Marketingowe pliki cookies',
              description:
                'Za pomocą tych plików cookies możemy mierzyć, jak skuteczne są nasze reklamy i ukierunkowane oferty naszych usług. Marketingowe pliki cookies pozwalają nam powiadamiać Cię w Internecie o nowościach, które mogą Cię zainteresować.',
            },
            personalization: {
              title: 'Personalizacyjne pliki cookies',
              description:
                'Nasze usługi działają lepiej, gdy możemy je dostosować do konkretnego użytkownika. Włączeniem personalizacyjnych plików cookies zwiększasz szansę na znalezienie właśnie tych treści, których poszukujesz.',
            },
          },
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
