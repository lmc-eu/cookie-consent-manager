import {
  addSeparators,
  assembleDescriptionIntro,
  assembleSecondaryButton,
  isSettingsButtonNotShown,
  legalizeAlmaCareer,
  pluralize,
  assembleCategoryNecessary,
  assembleCategoryAnalytics,
  assembleCategoryFunctionality,
  assembleCategoryAd,
  assembleCategoryPersonalization,
} from '../utils';
import { CookieTableCategories, ExtraMessages, Values, VanillaCookieConsent } from '../types';
import { CookieConsentCategory, SecondaryButtonMode } from '../constants';

const extra = {
  and: 'i',
  company: 'firmę',
  companies: 'firmy',
  legalName: 'Alma Career i firmy z jej grupy biznesowej',
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
        ${
          isSettingsButtonNotShown(secondaryButtonMode)
            ? `Korzystanie z plików cookies możesz dostosować we <strong><a href="" data-cc="c-settings">własnych ustawieniach</a></strong>.`
            : ''
        }
      </p>`,
      primary_btn: {
        text: 'Akceptuj wszystkie',
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, 'Akceptuj niezbędne', 'Własne ustawienia'),
    },
    settings_modal: {
      title: 'Własne ustawienia plików cookies',
      accept_all_btn: 'Akceptuj wszystkie',
      reject_all_btn: 'Akceptuj niezbędne',
      save_settings_btn: 'Zapisz ustawienia',
      cookie_table_headers: [{ name: 'Nazwa' }, { description: 'Opis' }, { expiration: 'Ważność (Do)' }],
      blocks: [
        {
          description:
            `Aby w pełni wykorzystać możliwości naszej strony, najlepiej jest zezwolić na wszystkie rodzaje plików cookies.\n` +
            (lang.settingsModalMoreInfo ??
              `Więcej informacji na temat tego, czym są pliki cookies i jak z nimi pracujemy, znajdziesz w naszej
              <a href="https://www.almacareer.com/gdpr" target="_blank">Polityce plików cookie</a>.`),
        },
        assembleCategoryNecessary(
          'Technicznie niezbędne pliki cookies',
          'Te pliki cookies są niezbędne do prawidłowego funkcjonowania naszej strony internetowej, dlatego nie ma możliwości ich wyłączenia. Bez nich na naszej stronie na przykład nie można byłoby wyświetlić żadnej treści lub nie działałoby logowanie.',
          cookieTable,
        ),
        assembleCategoryAnalytics(
          'Analityczne pliki cookies',
          'Używamy ich do śledzenia, ile osób odwiedza naszą stronę internetową i jak z niej korzysta. Dzięki temu możemy stale ulepszać stronę i inne usługi.',
          cookieTable,
        ),
        assembleCategoryFunctionality(
          'Funkcjonalne pliki cookies',
          'Te pliki cookies sprawiają, że nasza strona internetowa jest jeszcze bardziej wydajna i działa lepiej. Pozwalają nam na przykład korzystać z czatu, dzięki temu możemy szybko i łatwo odpowiadać na Twoje pytania.',
          cookieTable,
        ),
        assembleCategoryAd(
          'Marketingowe pliki cookies',
          'Za pomocą tych plików cookies możemy mierzyć, jak skuteczne są nasze reklamy i ukierunkowane oferty naszych usług. Marketingowe pliki cookies pozwalają nam powiadamiać Cię w Internecie o nowościach, które mogą Cię zainteresować.',
          cookieTable,
        ),
        assembleCategoryPersonalization(
          'Personalizacyjne pliki cookies',
          'Nasze usługi działają lepiej, gdy możemy je dostosować do konkretnego użytkownika. Włączeniem personalizacyjnych plików cookies zwiększasz szansę na znalezienie właśnie tych treści, których poszukujesz.',
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
