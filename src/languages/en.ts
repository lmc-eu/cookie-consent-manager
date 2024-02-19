import {
  addSeparators,
  assembleDescriptionIntro,
  assembleSecondaryButton,
  isSettingsButtonNotShown,
  legalizeAlmaCareer,
  assembleCategoryNecessary,
  assembleCategoryAnalytics,
  assembleCategoryFunctionality,
  assembleCategoryAd,
  assembleCategoryPersonalization,
} from '../utils';
import { CookieTableCategories, ExtraMessages, Values, VanillaCookieConsent } from '../types';
import { CookieConsentCategory, SecondaryButtonMode } from '../constants';

const extra = {
  and: 'and',
  legalName: 'Alma Career and other companies from its business group',
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
      title: lang.consentTitle ?? 'Cookies make our site even better',
      description: `
      ${assembleDescriptionIntro(
        "By better understanding what you're interested in, we'll show you more relevant content.",
        lang.descriptionIntro,
      )}
      <p>
        By clicking the "Accept all" button, you give
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), extra.and)}
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
      cookie_table_headers: [{ name: 'Name' }, { description: 'Description' }, { expiration: 'Expiration' }],
      blocks: [
        {
          description:
            `If you want to get the most out of our website it is best to allow all types of cookies.\n` +
            (lang.settingsModalMoreInfo ??
              `For more information about what cookies are and how we work with them, see our
              <a href="https://www.almacareer.com/gdpr" target="_blank">Cookie Policy</a>.`),
        },
        assembleCategoryNecessary(
          'Technically necessary cookies',
          'These cookies are essential for the proper functioning of our website, and so they cannot be disabled. Without them, it would not be possible e.g. to display any content or to log in on our website.',
          cookieTable,
        ),
        assembleCategoryAnalytics(
          'Analytical cookies',
          'These help us monitor how many people visit our website and how they use it. This information then enables us to continuously improve the website and other services.',
          cookieTable,
        ),
        assembleCategoryFunctionality(
          'Functional cookies',
          'Our website is even more efficient and works better thanks to these cookies. For example, they enable us to use the chat service and answer your questions quickly and easily.',
          cookieTable,
        ),
        assembleCategoryAd(
          'Marketing cookies',
          'These cookies help us to measure the effectiveness of our advertising and targeted service offers. Marketing cookies enable us to bring you news that may be of interest to you on the Internet.',
          cookieTable,
        ),
        assembleCategoryPersonalization(
          'Personalisation cookies',
          'Our services work better if we can tailor them to specific users. By allowing personalisation cookies you increase your chances of finding the content you want.',
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
