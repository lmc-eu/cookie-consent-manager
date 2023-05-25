import {
  addSeparators,
  assembleDescriptionIntro,
  assembleSecondaryButton,
  isSettingsButtonNotShown,
  legalizeLmc,
} from '../utils';
import { ExtraMessages, Values } from '../types';
import { CookieConsentCategory, SecondaryButtonMode } from '../constants';
import { VanillaCookieConsent } from '../types/vanilla-cookieconsent';

const extra = {
  and: 'and',
  legalName: 'LMC and other companies from its business group',
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
      title: lang.consentTitle ?? 'Cookies make our site even better',
      description: `
      ${assembleDescriptionIntro(
        "By better understanding what you're interested in, we'll show you more relevant content.",
        lang.descriptionIntro,
      )}
      <p>
        By clicking the "Accept all" button, you give
        ${addSeparators(legalizeLmc(lang.companyNames, lang.legalName), extra.and)}
        your consent to use cookies for personalisation, analytics and targeted marketing.
        ${
          isSettingsButtonNotShown(secondaryButtonMode)
            ? `You can customize use of cookies in your <strong><a href="" data-cc="c-settings">custom settings</a></strong>.`
            : ''
        }
      </p>`,
      primary_btn: {
        text: 'Accept all',
        role: VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL,
      },
      secondary_btn: assembleSecondaryButton(secondaryButtonMode, 'Accept necessary', 'Custom settings'),
    },
    settings_modal: {
      title: 'Custom Cookie settings',
      accept_all_btn: 'Accept all',
      reject_all_btn: 'Accept necessary',
      save_settings_btn: 'Save settings',
      blocks: [
        {
          description:
            `If you want to get the most out of our website it is best to allow all types of cookies.\n` +
            (lang.settingsModalMoreInfo ??
              `You can find more information about what cookies are and how we work with them via the links
              to <a href="https://www.lmc.eu/en/cookies/" target="_blank">The use of cookies</a>
              and <a href="https://www.lmc.eu/en/privacy-policy/" target="_blank">Privacy policy</a>.`),
        },
        {
          title: 'Technically necessary cookies',
          description: `These cookies are essential for the proper functioning of our website and so they cannot be disabled. Without them, it would not be possible e.g. to display any content or to log in on our website.`,
          toggle: {
            value: CookieConsentCategory.NECESSARY,
            enabled: true,
            readonly: true,
          },
        },
        {
          title: 'Analytical cookies',
          description: `These help us monitor how many people visit our website and how they use it. This information then enables us to continuously improve the website and other services.`,
          toggle: {
            value: CookieConsentCategory.ANALYTICS,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'Functional cookies',
          description: `Our website is even more efficient and works better thanks to these cookies. For example, they enable us to use the chat service and answer your questions quickly and easily.`,
          toggle: {
            value: CookieConsentCategory.FUNCTIONALITY,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'Marketing cookies',
          description: `These cookies help us to measure the effectiveness of our advertising and targeted service offers. Marketing cookies enable us to bring you news that may be of interest to you on the Internet.`,
          toggle: {
            value: CookieConsentCategory.AD,
            enabled: false,
            readonly: false,
          },
        },
        {
          title: 'Personalisation cookies',
          description: `Our services work better if we can tailor them to specific users. By allowing personalisation cookies you increase your chances of finding the content you want.`,
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
