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
  and: 'et',
  legalName: `Alma Career et les sociétés de son groupe d'entreprises`,
};

/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {CookieTableCategories} [cookieTable] - Cookie table items defined by category
 * @returns {Translation} Object with translated messages
 */
export const config = (extraMessages: ExtraMessages, cookieTable: CookieTableCategories): Translation => {
  const lang = { ...extra, ...extraMessages };
  const cookieTableHeaders = { name: 'Titre', description: 'Description', expiration: 'Validité' };

  return {
    consentModal: {
      title: lang.consentTitle ?? `Les cookies permettent d'améliorer notre site encore davantage`,
      description: `
      ${assembleDescriptionIntro(
        'Si nous comprenons mieux ce qui vous intéresse, nous vous proposerons un contenu plus personnalisé.',
        lang.descriptionIntro,
      )}
      <p>
        En cliquant sur le bouton « Tout accepter », vous consentez à ce
        qu'${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), lang.and)}
        utilisent des cookies à des fins de personnalisation, d'analyse et de marketing ciblé.
        Pour plus d'informations sur les cookies et pour modifier leur utilisation, veuillez vous référer <strong><a href="" data-cc="show-preferencesModal">aux paramètres</a></strong>.
      </p>`,
      acceptAllBtn: 'Tout accepter',
      acceptNecessaryBtn: 'Accepter le nécessaire',
    },
    preferencesModal: {
      title: 'Personnaliser les paramètres des cookies',
      acceptAllBtn: 'Tout accepter',
      acceptNecessaryBtn: 'Accepter le nécessaire',
      savePreferencesBtn: 'Sauvegarder les paramètres',
      sections: [
        {
          description: `Pour tirer le meilleur parti de notre site, il est préférable d'autoriser tous les types de cookies.
            ${
              lang.preferencesModalMoreInfo ??
              `Pour plus d'informations sur ce que sont les cookies et comment nous les utilisons, veuillez consulter notre <a href="https://www.almacareer.com/gdpr" target="_blank">Politique d'utilisation de cookies</a>.`
            }`,
        },
        ...assembleCookieTableSections(
          cookieTableHeaders,
          {
            necessary: {
              title: 'Cookies techniquement nécessaires',
              description: `Ces cookies sont essentiels au bon fonctionnement de notre site, il n'est donc pas possible de les désactiver. Sans ces cookies, par exemple, aucun contenu ne serait affiché sur notre site web et l'ouverture de session ne fonctionnerait pas.`,
            },
            analytics: {
              title: 'Cookies analytiques',
              description: `Nous les utilisons pour savoir combien de personnes visitent notre site web et comment elles l'utilisent. Ainsi, nous pouvons continuellement améliorer le site et les autres services.`,
            },
            functionality: {
              title: 'Cookies fonctionnels',
              description: `Ces cookies permettent à notre site d'être plus efficace et de mieux fonctionner. Par exemple, ils nous permettent d'utiliser le chat pour répondre rapidement et facilement à vos questions.`,
            },
            ad: {
              title: 'Cookies marketing',
              description: `Ces cookies nous permettent de mesurer l'efficacité de notre publicité et des offres ciblées de nos services. Les cookies marketing nous permettent de vous avertir en ligne des nouveautés qui pourraient vous intéresser.`,
            },
            personalization: {
              title: 'Cookies de personnalisation',
              description: `Nos services fonctionnent mieux lorsque nous pouvons les adapter aux besoins spécifiques de chaque utilisateur. En autorisant les cookies de personnalisation, vous augmentez vos chances de trouver le contenu que vous recherchez.`,
            },
          },
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
