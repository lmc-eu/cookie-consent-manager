import { addSeparators, assembleCookieTableSections, assembleDescriptionIntro, legalizeAlmaCareer } from '../utils';
import { CookieTableCategories, ExtraMessages } from '../types';
import { Translation } from 'vanilla-cookieconsent';

const extra = {
  and: 'y',
  legalName: 'Alma Career y las empresas del grupo empresarial',
};
/**
 * @param {ExtraMessages} [extraMessages] - Object with extra messages
 * @param {CookieTableCategories} [cookieTable] - Cookie table items defined by category
 * @returns {Translation} Object with translated messages
 */
export const config = (extraMessages: ExtraMessages, cookieTable: CookieTableCategories): Translation => {
  const lang = { ...extra, ...extraMessages };
  const cookieTableHeaders = { name: 'Título', description: 'Descripción', expiration: 'Validez' };

  return {
    consentModal: {
      title: lang.consentTitle ?? 'Las cookies mejorarán nuestras páginas web aún más',
      description: `
      ${assembleDescriptionIntro(
        'Si entendemos mejor lo que le interesa, le ofreceremos contenidos más personalizados.',
        lang.descriptionIntro,
      )}
      <p>
        Al pulsar el botón «Aceptar todo», usted presta su consentimiento a
        ${addSeparators(legalizeAlmaCareer(lang.companyNames, lang.legalName), extra.and)}
        para el uso de las cookies con fines de personalización, análisis y publicidad comportamental.
        Más información sobre las cookies y cómo configurarlas se puede encontrar en la <strong><a href="" data-cc="show-preferencesModal">configuración de cookies</a></strong>.
      </p>`,
      acceptAllBtn: 'Aceptar todo',
      acceptNecessaryBtn: 'Aceptar las necesarias',
    },
    preferencesModal: {
      title: 'Personalizar la configuración de cookies',
      acceptAllBtn: 'Aceptar todo',
      acceptNecessaryBtn: 'Aceptar las necesarias',
      savePreferencesBtn: 'Guardar configuración',
      sections: [
        {
          description: `Para aprovechar nuestras páginas al máximo, es recomendable permitir todos los tipos de cookies.
            ${
              lang.preferencesModalMoreInfo ??
              `Más información sobre qué son las cookies y cómo trabajamos con ellas se puede encontrar en la <a href="https://www.almacareer.com/gdpr" target="_blank">Política de cookies</a>.`
            }`,
        },
        ...assembleCookieTableSections(
          cookieTableHeaders,
          {
            necessary: {
              title: 'Cookies técnicas',
              description:
                'Son aquellas que son necesarias para el funcionamiento correcto de nuestras páginas web, por lo que no es posible desactivarlas. Sin ellas no se podrá mostrar ningún contenido en nuestras páginas o no funcionará el inicio de sesión, entre otras cosas.',
            },
            analytics: {
              title: 'Cookies de análisis',
              description:
                'Son aquellas que usamos para seguir cuántas personas visitan nuestras páginas web y cómo las utilizan. Lo que nos permite ir mejorando las páginas así como otros servicios.',
            },
            functionality: {
              title: 'Cookies de funcionalidad',
              description:
                'Son aquellas que hacen nuestras páginas aún más eficientes y mejoran su funcionalidad. Por ejemplo, nos permiten usar el chat para que podamos responder a sus preguntas de manera rápida y sencilla.',
            },
            ad: {
              title: 'Cookies de publicidad comportamental',
              description:
                'Son aquellas que nos permiten medir lo efectivo que es nuestra publicidad y las ofertas comportamentales de nuestros servicios. Las cookies de publicidad comportamental nos permiten informarle en la Red sobre las novedades que puedan ser de su interés.',
            },
            personalization: {
              title: 'Cookies de personalización',
              description:
                'Nuestros servicios funcionan mejor cuando podemos adaptarlos a las necesidades de cada usuario. Al permitir las cookies de personalización, aumentará la posibilidad de encontrar exactamente el contenido que está buscando.',
            },
          },
          cookieTable,
        ),
      ],
    },
  };
};

export default config;
