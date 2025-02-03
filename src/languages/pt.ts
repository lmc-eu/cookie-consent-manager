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
  and: 'e',
  company: 'à empresa',
  companies: 'às empresas',
  legalName: 'Alma Career e às empresas pertencentes ao seu grupo comercial',
};
/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {CookieTableCategories} [cookieTable] - Cookie table items defined by category
 * @returns {Translation} Object with translated messages
 */
export const config = (extraMessages: ExtraMessages, cookieTable: CookieTableCategories): Translation => {
  const lang = { ...extra, ...extraMessages };
  const cookieTableHeaders = { name: 'Nome', description: 'Assinatura', expiration: 'Validade' };

  return {
    consentModal: {
      title: lang.consentTitle ?? 'Graças aos cookies as nossas páginas serão ainda melhores',
      description: `
      ${assembleDescriptionIntro(
        'Se soubermos claramente o que lhe interessa, exibir-lhe-emos apenas conteúdos à medida.',
        lang.descriptionIntro,
      )}
      <p>
        Clicando em «Aceitar todos» dá
        ${pluralize(lang.companyNames.length, lang.company, lang.companies)}
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), extra.and)}
        consentimento para usarem cookies com o intuito de personalizarem, analisarem e criarem campanhas de marketing mais direcionadas.
        Há mais informações sobre cookies e como ajustá-los nas <strong><a href="" data-cc="show-preferencesModal">configurações dedicadas a isso</a></strong>.
      </p>`,
      acceptAllBtn: 'Aceitar todos',
      acceptNecessaryBtn: 'Aceitar os necessários',
    },
    preferencesModal: {
      title: 'Editar as configurações de cookies',
      acceptAllBtn: 'Aceitar todos',
      acceptNecessaryBtn: 'Aceitar os necessários',
      savePreferencesBtn: 'Guardar configurações',
      sections: [
        {
          description: `Para aproveitar ao máximo das nossas páginas, aconselhamos ativar todos os tipos de cookies.
            ${
              lang.preferencesModalMoreInfo ??
              `Há mais informações sobre o significado dos cookies e como os processamos nas <a href="https://www.almacareer.com/gdpr" target="_blank">Políticas sobre Cookies</a>.`
            }`,
        },
        ...assembleCookieTableSections(
          cookieTableHeaders,
          {
            necessary: {
              title: 'Cookies tecnicamente necessários',
              description:
                'Tais cookies são essenciais para o funcionamento correto das nossas páginas, por conseguinte não é possível desativá-los. Sem eles não seria possível, por exemplo, exibir nenhum conteúdo nas nossas páginas ou não funcionaria o login.',
            },
            analytics: {
              title: 'Cookies analíticos',
              description:
                'Com a sua ajuda acompanhamos quantas pessoas visitam as nossas páginas e como as utilizam. Graças a isso podemos aperfeiçoar cada vez mais as nossas páginas e os serviços que oferecemos.',
            },
            functionality: {
              title: 'Cookies funcionais',
              description:
                'Graças a tais cookies as nossas páginas são ainda mais eficientes e funcionam melhor. Por exemplo, possibilitam que utilizemos o chat para podermos responder rápida e comodamente às perguntas dos utilizadores.',
            },
            ad: {
              title: 'Cookies de marketing',
              description:
                'Com tais cookies podemos mensurar qual o grau de eficácia das nossas publicidades e da amplitude desejada dos nossos serviços. Cookies de marketing permitem-nos informar os utilizadores de novidades que lhes possam interessar.',
            },
            personalization: {
              title: 'Cookies personalizados',
              description:
                'Os nossos serviços funcionam melhor se os podemos adaptar à medida a um utilizador concreto. Habilitando os cookies personalizados, aumenta as chances de encontrar os conteúdos dos quais está à procura.',
            },
          },
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
