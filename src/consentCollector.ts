import { CookieConsentCategoryValues } from './types';
import { VanillaCookieConsent } from './types/vanilla-cookieconsent';

/**
 * Submit information about consent level given by the user.
 */
function submitConsent(
  consentCollectorApiUrl: string,
  cookieConsent: VanillaCookieConsent.CookieConsent<CookieConsentCategoryValues>,
): void {
  const payload = buildPayload(cookieConsent);

  postDataToApi(consentCollectorApiUrl, payload);
}

function buildPayload(cookieConsent: VanillaCookieConsent.CookieConsent<CookieConsentCategoryValues>): Object {
  const cookieData = cookieConsent.get('data');
  const userPreferences = cookieConsent.getUserPreferences();
  const daysOfAcceptation =
    userPreferences.accept_type === VanillaCookieConsent.AcceptType.NECESSARY
      ? cookieConsent.getConfig('cookie_necessary_only_expiration')
      : cookieConsent.getConfig('cookie_expiration');

  return {
    data: {
      type: 'localDataAcceptationDataEntries',
      attributes: {
        acceptation_id: cookieData.uid,
        accept_type: `accept_${userPreferences.accept_type}`,
        accepted_categories: userPreferences.accepted_categories,
        rejected_categories: userPreferences.rejected_categories,
        revision: cookieConsent.get('revision'),
        source: cookieData.serviceName,
        language: cookieConsent.getConfig('current_lang'),
        days_of_acceptation: daysOfAcceptation,
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
