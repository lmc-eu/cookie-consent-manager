import { CookieConsentLevel } from './types';
import { VanillaCookieConsent } from './types/vanilla-cookieconsent';

/**
 * Submit information about consent level given by the user.
 */
function submitConsent(
  consentCollectorApiUrl: string,
  cookieConsent: VanillaCookieConsent.CookieConsent<CookieConsentLevel>,
  acceptedOnlyNecessary: boolean,
): void {
  const payload = buildPayload(cookieConsent, acceptedOnlyNecessary);

  postDataToApi(consentCollectorApiUrl, payload);
}

function buildPayload(
  cookieConsent: VanillaCookieConsent.CookieConsent<CookieConsentLevel>,
  acceptedOnlyNecessary: boolean,
): Object {
  const cookieData = cookieConsent.get('data');
  const acceptedCategories = cookieConsent.get('level');
  // TODO: read actual categories once following is implemented in vanilla-cookieconsent:
  // https://github.com/orestbida/cookieconsent/discussions/90#discussioncomment-1466886
  const rejectedCategories = acceptedOnlyNecessary
    ? [
        CookieConsentLevel.AD,
        CookieConsentLevel.ANALYTICS,
        CookieConsentLevel.FUNCTIONALITY,
        CookieConsentLevel.PERSONALIZATION,
      ]
    : [];

  return {
    data: {
      type: 'localDataAcceptationDataEntries',
      attributes: {
        acceptation_id: cookieData.uid,
        accept_type: acceptedOnlyNecessary
          ? VanillaCookieConsent.SecondaryButtonRole.ACCEPT_NECESSARY
          : VanillaCookieConsent.PrimaryButtonRole.ACCEPT_ALL,
        accepted_categories: acceptedCategories,
        rejected_categories: rejectedCategories,
        revision: cookieConsent.get('revision'),
        source: cookieData.serviceName,
        language: cookieConsent.getConfig('current_lang'),
        days_of_acceptation: cookieConsent.getConfig('cookie_expiration'),
      },
    },
  };
}

async function postDataToApi(apiUrl: string, payload: any): Promise<any> {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/vnd.api+json',
      Accept: 'application/vnd.api+json',
    },
    body: JSON.stringify(payload),
  });

  return response.json();
}

export default submitConsent;
