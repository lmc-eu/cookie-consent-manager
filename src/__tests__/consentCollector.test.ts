import { CookieValue, UserPreferences } from 'vanilla-cookieconsent';
import submitConsent from '../consentCollector';
import { enableFetchMocks } from 'jest-fetch-mock';

describe('consentCollector', () => {
  describe('submitConsent', () => {
    const API_URL = 'https://foobar/local-data-acceptance';

    beforeAll(() => {
      enableFetchMocks();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should submit correct consent data to the API', () => {
      const cookie: CookieValue = {
        categories: ['necessary', 'analytics'],
        revision: 333,
        data: {
          serviceName: 'demo.example',
          uid: 'foo-bar-test',
        },
        consentTimestamp: '2024-12-12T12:12:12.333Z',
        consentId: 'f6152595-45a0-4371-aa68-2fe97137111a',
        services: {},
        lastConsentTimestamp: '2024-12-12T12:12:12.333Z',
        expirationTime: Date.now() + 33 * 24 * 60 * 60 * 1000, // 33 days in the future
      };

      const userPreferences: UserPreferences = {
        acceptType: 'custom',
        acceptedCategories: ['necessary', 'analytics'],
        rejectedCategories: ['personalization'],
        acceptedServices: {},
        rejectedServices: {},
      };

      fetchMock.mockResponse(JSON.stringify({}), { status: 200 });

      submitConsent(API_URL, cookie, userPreferences);

      const [url, requestInit] = fetchMock.mock.calls[0];

      expect(url).toBe(API_URL);
      expect(requestInit?.method).toBe('POST');
      expect(JSON.parse(<string>requestInit?.body)).toEqual({
        data: {
          type: 'localDataAcceptationDataEntries',
          attributes: {
            acceptation_id: 'foo-bar-test',
            accept_type: 'accept_custom',
            accepted_categories: ['necessary', 'analytics'],
            rejected_categories: ['personalization'],
            revision: 333,
            source: 'demo.example',
            days_of_acceptation: 33,
            language: 'N/A',
          },
        },
      });
    });
  });
});
