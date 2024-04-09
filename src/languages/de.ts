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
  and: 'und',
  legalName: 'Alma Career und seine Gruppenunternehmen',
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
      title: lang.consentTitle ?? 'Diese Website verwendet Cookies',
      description: `
      ${assembleDescriptionIntro(
        'Wenn wir genau wissen, wofür Sie sich interessieren, können wir Ihnen maßgeschneiderte Inhalte anbieten.',
        lang.descriptionIntro,
      )}
      <p>
        Indem Sie auf „Alles akzeptieren“ klicken, stimmen Sie der Verwendung von Cookies und anderen Identifikatoren auf Ihrem Gerät durch
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), extra.and)}
        zu. Die Verwendung dieser Cookies und anderer Identifikatoren erleichtert die Navigation auf der Website, die Anzeige personalisierter Inhalte, gezieltes Marketing und die Analyse der Nutzung unserer Produkte und Dienstleistungen.
        ${
          isSettingsButtonNotShown(secondaryButtonMode)
            ? `Sie können die Verwendung von Cookies in Ihren <strong><a href="" data-cc="c-settings">eigenen Einstellungen</a></strong> anpassen.`
            : ''
        }
      </p>`,
      primary_btn: {
        text: 'Alles akzeptieren',
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: assembleSecondaryButton(
        secondaryButtonMode,
        'Das Notwendigste akzeptieren',
        'Eigene Einstellungen',
      ),
    },
    settings_modal: {
      title: 'Benutzerdefinierte Cookie-Einstellungen',
      accept_all_btn: 'Alles akzeptieren',
      reject_all_btn: 'Das Notwendigste akzeptieren',
      save_settings_btn: 'Einstellungen speichern',
      cookie_table_headers: [
        { name: 'Unternehmensbezeichnung' },
        { description: 'Beschreibung' },
        { expiration: 'Verfallsdatum' },
      ],
      blocks: [
        {
          description:
            `Um unsere Website optimal nutzen zu können, sollten Sie alle Arten von Cookies aktivieren.\n` +
            (lang.settingsModalMoreInfo ??
              `Weitere Informationen darüber, was Cookies sind und wie wir mit ihnen arbeiten,
              finden Sie in unsere
              <a href="https://www.almacareer.com/gdpr" target="_blank">Datenschutzrichtlinien</a>.`),
        },
        assembleCategoryNecessary(
          'Technisch notwendige Cookies',
          'Diese Cookies sind für das reibungslose Funktionieren unserer Website unerlässlich und können daher nicht deaktiviert werden. Ohne sie könnten z. B. keine Inhalte auf unserer Seite angezeigt werden oder das Login würde nicht funktionieren.',
          cookieTable,
        ),
        assembleCategoryAnalytics(
          'Analytische Cookies',
          'Wir verwenden diese Cookies, um zu verfolgen, wie viele Personen unsere Website besuchen und wie sie sie nutzen. Auf diese Weise können wir die Website und andere Dienste kontinuierlich verbessern.',
          cookieTable,
        ),
        assembleCategoryFunctionality(
          'Funktionale Cookies',
          'Diese Cookies machen unsere Website leistungsfähiger und funktionieren besser. Sie ermöglichen uns zum Beispiel die Nutzung des Chats, damit wir Ihre Fragen schnell und einfach beantworten können.',
          cookieTable,
        ),
        assembleCategoryAd(
          'Marketing Cookies',
          'Mit diesen Cookies können wir messen, wie effektiv unsere Werbung und gezielte Angebote unserer Dienste sind. Marketing Cookies ermöglichen es uns, Sie online auf Nachrichten hinzuweisen, die für Sie von Interesse sein könnten.',
          cookieTable,
        ),
        assembleCategoryPersonalization(
          'Personalisierung Cookies',
          'Unsere Dienste funktionieren besser, wenn wir sie auf den einzelnen Nutzer zuschneiden können. Durch die Aktivierung von Personalisierungs-Cookies erhöhen Sie die Wahrscheinlichkeit, dass Sie genau die Inhalte finden, nach denen Sie suchen.',
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
