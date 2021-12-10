import { addSeparators } from '../utils';
import { ExtraMessages, CookieConsentLevel } from '../types';
import { VanillaCookieConsent } from '../types/vanilla-cookieconsent';

const extra = {
  and: 'und',
};

/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {array} [extraMessages.companyNames] - Array of strings with company names used to parametrized translations
 * @returns {VanillaCookieConsent.Languages} Object with translated messages
 */
export const config = (extraMessages: ExtraMessages): VanillaCookieConsent.Languages => {
  const lang = { ...extra, ...extraMessages };

  return {
    consent_modal: {
      title: 'Diese Website verwendet Cookies',
      description: `Indem Sie auf „Alles akzeptieren“ klicken, stimmen Sie der Verwendung von Cookies und anderen Identifikatoren auf Ihrem Gerät durch ${addSeparators(
        lang.companyNames,
        extra.and,
      )} zu. Die Verwendung dieser Cookies und anderer Identifikatoren erleichtert die Navigation auf der Website, die Anzeige personalisierter Inhalte, gezieltes Marketing und die Analyse der Nutzung unserer Produkte und Dienstleistungen.
      Weitere Informationen finden Sie unter <a href="https://www.lmc.eu/en/cookies/" target="_blank">Verwendung von Cookies</a>.`,
      primary_btn: {
        text: 'Alles akzeptieren',
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: {
        text: 'Das Notwendigste akzeptieren',
        role: VanillaCookieConsent.SecondaryButtonRole.ACCEPT_NECESSARY,
      },
    },
    settings_modal: {
      blocks: [
        {
          toggle: {
            value: CookieConsentLevel.NECESSARY,
            enabled: true,
            readonly: true,
          },
        },
        {
          toggle: {
            value: CookieConsentLevel.AD,
            enabled: false,
            readonly: false,
          },
        },
        {
          toggle: {
            value: CookieConsentLevel.ANALYTICS,
            enabled: false,
            readonly: false,
          },
        },
        {
          toggle: {
            value: CookieConsentLevel.FUNCTIONALITY,
            enabled: false,
            readonly: false,
          },
        },
        {
          toggle: {
            value: CookieConsentLevel.PERSONALIZATION,
            enabled: false,
            readonly: false,
          },
        },
      ],
    },
  };
};

export default config;
