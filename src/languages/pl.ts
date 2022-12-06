import {
  addSeparators,
  assembleDescriptionIntro,
  assembleSecondaryButton,
  isSettingsButtonNotShown,
  legalizeLmc,
  pluralize,
} from '../utils';
import { ExtraMessages, Values } from '../types';
import { CookieConsentCategory } from '../constants';
import { VanillaCookieConsent } from '../types/vanilla-cookieconsent';
import { SecondaryButtonMode } from '../constants/SecondaryButtonMode';

const extra = {
  and: 'i',
  company: 'firmę',
  companies: 'firmy',
  legalName: 'LMC i firmy z jej grupy biznesowej',
};

/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {SecondaryButtonMode} [secondaryButtonMode] - Which secondary button should be shown
 * @returns {VanillaCookieConsent.Languages} Object with translated messages
 */
export const config = (
  extraMessages: ExtraMessages,
  secondaryButtonMode: Values<typeof SecondaryButtonMode>,
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
        ${addSeparators(legalizeLmc(lang.companyNames, lang.legalName), extra.and)}
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
      blocks: [
        {
          description: `Aby w pełni wykorzystać możliwości naszej strony, najlepiej jest zezwolić na wszystkie
          rodzaje plików cookies. Aby uzyskać więcej informacji na temat tego, czym są pliki cookies
          i jak z nimi pracujemy, odwiedź na naszej stronie
          <a href="https://www.lmc.eu/pl/cookies" target="_blank">Korzystanie z plików cookies</a>
          i <a href="https://www.lmc.eu/pl/polityka-prywatnosci" target="_blank">Politykę prywatności</a>.`,
        },
        {
          title: 'Technicznie niezbędne pliki cookies',
          description: `Te pliki cookies są niezbędne do prawidłowego funkcjonowania naszej strony internetowej, dlatego nie ma możliwości ich wyłączenia. Bez nich na naszej stronie na przykład nie można byłoby wyświetlić żadnej treści lub nie działałoby logowanie.`,
          toggle: {
            value: CookieConsentCategory.NECESSARY,
            enabled: true,
            readonly: true,
          },
        },
        {
          title: 'Analityczne pliki cookies',
          description: `Używamy ich do śledzenia, ile osób odwiedza naszą stronę internetową i jak z niej korzysta. Dzięki temu możemy stale ulepszać stronę i inne usługi.`,
          toggle: {
            value: CookieConsentCategory.ANALYTICS,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'Funkcjonalne pliki cookies',
          description: `Te pliki cookies sprawiają, że nasza strona internetowa jest jeszcze bardziej wydajna i działa lepiej. Pozwalają nam na przykład korzystać z czatu, dzięki temu możemy szybko i łatwo odpowiadać na Twoje pytania.`,
          toggle: {
            value: CookieConsentCategory.FUNCTIONALITY,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'Marketingowe pliki cookies',
          description: `Za pomocą tych plików cookies możemy mierzyć, jak skuteczne są nasze reklamy i ukierunkowane oferty naszych usług. Marketingowe pliki cookies pozwalają nam powiadamiać Cię w Internecie o nowościach, które mogą Cię zainteresować.`,
          toggle: {
            value: CookieConsentCategory.AD,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'Personalizacyjne pliki cookies',
          description: `Nasze usługi działają lepiej, gdy możemy je dostosować do konkretnego użytkownika. Włączeniem personalizacyjnych plików cookies zwiększasz szansę na znalezienie właśnie tych treści, których poszukujesz.`,
          toggle: {
            value: CookieConsentCategory.PERSONALIZATION,
            enabled: false,
            readonly: false,
          },
        },
      ],
    },
  };
};

export default config;
