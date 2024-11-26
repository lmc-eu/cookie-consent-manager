import {
  addSeparators,
  assembleCookieTableSections,
  assembleDescriptionIntro,
  assembleSecondaryButton,
  isSettingsButtonNotShown,
  legalizeAlmaCareer,
} from '../utils';
import { CookieTableCategories, ExtraMessages, Values } from '../types';
import { SecondaryButtonMode } from '../constants';
import { Translation } from 'vanilla-cookieconsent';

const extra = {
  and: 'und',
  legalName: 'Alma Career und seine Gruppenunternehmen',
};

/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {SecondaryButtonMode} [secondaryButtonMode] - Which secondary button should be shown
 * @param {CookieTableCategories} [cookieTable] - Cookie table items defined by category
 * @returns {Translation} Object with translated messages
 */
export const config = (
  extraMessages: ExtraMessages,
  secondaryButtonMode: Values<typeof SecondaryButtonMode>,
  cookieTable: CookieTableCategories,
): Translation => {
  const lang = { ...extra, ...extraMessages };
  const cookieTableHeaders = {
    name: 'Unternehmensbezeichnung',
    description: 'Beschreibung',
    expiration: 'Verfallsdatum',
  };

  return {
    consentModal: {
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
            ? `Sie können die Verwendung von Cookies in Ihren <strong><a href="" data-cc="show-preferencesModal">eigenen Einstellungen</a></strong> anpassen.`
            : ''
        }
      </p>`,
      acceptAllBtn: 'Alles akzeptieren',
      ...assembleSecondaryButton(secondaryButtonMode, 'Das Notwendigste akzeptieren', 'Eigene Einstellungen'),
    },
    preferencesModal: {
      title: 'Benutzerdefinierte Cookie-Einstellungen',
      acceptAllBtn: 'Alles akzeptieren',
      acceptNecessaryBtn: 'Das Notwendigste akzeptieren',
      savePreferencesBtn: 'Einstellungen speichern',
      sections: [
        {
          description: `Um unsere Website optimal nutzen zu können, sollten Sie alle Arten von Cookies aktivieren.
            ${
              lang.settingsModalMoreInfo ??
              `Weitere Informationen darüber, was Cookies sind und wie wir mit ihnen arbeiten, finden Sie in unsere <a href="https://www.almacareer.com/gdpr" target="_blank">Datenschutzrichtlinien</a>.`
            }`,
        },
        ...assembleCookieTableSections(
          cookieTableHeaders,
          {
            necessary: {
              title: 'Technisch notwendige Cookies',
              description:
                'Diese Cookies sind für das reibungslose Funktionieren unserer Website unerlässlich und können daher nicht deaktiviert werden. Ohne sie könnten z. B. keine Inhalte auf unserer Seite angezeigt werden oder das Login würde nicht funktionieren.',
            },
            analytics: {
              title: 'Analytische Cookies',
              description:
                'Wir verwenden diese Cookies, um zu verfolgen, wie viele Personen unsere Website besuchen und wie sie sie nutzen. Auf diese Weise können wir die Website und andere Dienste kontinuierlich verbessern.',
            },
            functionality: {
              title: 'Funktionale Cookies',
              description:
                'Diese Cookies machen unsere Website leistungsfähiger und funktionieren besser. Sie ermöglichen uns zum Beispiel die Nutzung des Chats, damit wir Ihre Fragen schnell und einfach beantworten können.',
            },
            ad: {
              title: 'Marketing Cookies',
              description:
                'Mit diesen Cookies können wir messen, wie effektiv unsere Werbung und gezielte Angebote unserer Dienste sind. Marketing Cookies ermöglichen es uns, Sie online auf Nachrichten hinzuweisen, die für Sie von Interesse sein könnten.',
            },
            personalization: {
              title: 'Personalisierung Cookies',
              description:
                'Unsere Dienste funktionieren besser, wenn wir sie auf den einzelnen Nutzer zuschneiden können. Durch die Aktivierung von Personalisierungs-Cookies erhöhen Sie die Wahrscheinlichkeit, dass Sie genau die Inhalte finden, nach denen Sie suchen.',
            },
          },
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
