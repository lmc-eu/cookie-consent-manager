import { CookieValue, UserPreferences } from 'vanilla-cookieconsent';

/**
 * Submit information about consent level given by the user.
 */
function submitConsent(consentCollectorApiUrl: string, cookie: CookieValue, userPreferences: UserPreferences): void {
  const payload = buildPayload(userPreferences, cookie);

  postDataToApi(consentCollectorApiUrl, payload);
}

function buildPayload(userPreferences: UserPreferences, cookie: CookieValue): Object {
  const cookieData = cookie.data;

  return {
    data: {
      type: 'localDataAcceptationDataEntries',
      attributes: {
        acceptation_id: cookieData.uid,
        accept_type: `accept_${userPreferences.acceptType}`,
        accepted_categories: userPreferences.acceptedCategories,
        rejected_categories: userPreferences.rejectedCategories,
        revision: cookie.revision,
        source: cookieData.serviceName,
        language: cookie.languageCode,
        days_of_acceptation: calculateDaysOfAcceptation(cookie),
      },
    },
  };
}

function calculateDaysOfAcceptation(cookie: CookieValue): number {
  return Math.ceil((cookie.expirationTime - Date.now()) / 1000 / 60 / 60 / 24);
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
