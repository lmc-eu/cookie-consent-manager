import { addSeparators, assembleCookieTableSections, assembleDescriptionIntro, legalizeAlmaCareer } from '../utils';
import { CookieTableCategories, ExtraMessages } from '../types';
import { Translation } from 'vanilla-cookieconsent';

const extra = {
  and: 'and',
  legalName: 'Alma Career and other companies from its business group',
};
/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {CookieTableCategories} [cookieTable] - Cookie table items defined by category
 * @returns {Translation} Object with translated messages
 */
export const config = (extraMessages: ExtraMessages, cookieTable: CookieTableCategories): Translation => {
  const lang = { ...extra, ...extraMessages };
  const cookieTableHeaders = { name: 'Name', description: 'Description', expiration: 'Expiration' };

  return {
    consentModal: {
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
        You can customize use of cookies in your <strong><a href="" data-cc="show-preferencesModal">custom settings</a></strong>.
      </p>`,
      acceptAllBtn: 'Accept all',
      acceptNecessaryBtn: 'Accept necessary',
    },
    preferencesModal: {
      title: 'Custom Cookie settings',
      acceptAllBtn: 'Accept all',
      acceptNecessaryBtn: 'Accept necessary',
      savePreferencesBtn: 'Save settings',
      sections: [
        {
          description: `If you want to get the most out of our website it is best to allow all types of cookies.
            ${
              lang.settingsModalMoreInfo ??
              `For more information about what cookies are and how we work with them, see our <a href="https://www.almacareer.com/gdpr" target="_blank">Cookie Policy</a>.`
            }`,
        },
        ...assembleCookieTableSections(
          cookieTableHeaders,
          {
            necessary: {
              title: 'Technically necessary cookies',
              description:
                'These cookies are essential for the proper functioning of our website, and so they cannot be disabled. Without them, it would not be possible e.g. to display any content or to log in on our website.',
            },
            analytics: {
              title: 'Analytical cookies',
              description:
                'These help us monitor how many people visit our website and how they use it. This information then enables us to continuously improve the website and other services.',
            },
            functionality: {
              title: 'Functional cookies',
              description:
                'Our website is even more efficient and works better thanks to these cookies. For example, they enable us to use the chat service and answer your questions quickly and easily.',
            },
            ad: {
              title: 'Marketing cookies',
              description:
                'These cookies help us to measure the effectiveness of our advertising and targeted service offers. Marketing cookies enable us to bring you news that may be of interest to you on the Internet.',
            },
            personalization: {
              title: 'Personalisation cookies',
              description:
                'Our services work better if we can tailor them to specific users. By allowing personalisation cookies you increase your chances of finding the content you want.',
            },
          },
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
