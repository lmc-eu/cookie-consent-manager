import { pushToDataLayer } from '../dataLayer';
import { CookieValue } from 'vanilla-cookieconsent';

describe('dataLayer', () => {
  describe('pushToDataLayer', () => {
    beforeEach(() => {
      // Reset the dataLayer before each test
      window.dataLayer = [];
    });

    it('should push the correct event to the dataLayer', () => {
      const cookie: CookieValue = {
        categories: ['necessary', 'analytics'],
        revision: 1,
        data: {
          serviceName: 'demo.example',
          uid: 'foo-bar-baz',
        },
        consentTimestamp: '2024-12-12T12:12:12.333Z',
        consentId: 'f6152595-45a0-4371-aa68-2fe97137111a',
        services: {
          necessary: [],
          ad: [],
          analytics: [],
          functionality: [],
          personalization: [],
        },
        lastConsentTimestamp: '2024-12-12T12:12:12.333Z',
        languageCode: 'en',
        expirationTime: 1764690333666,
      };

      pushToDataLayer(cookie);

      expect(window.dataLayer).toEqual([
        {
          event: 'CookieConsent-update',
          'CookieConsent.necessary': true,
          'CookieConsent.analytics': true,
          'CookieConsent.ad': false,
          'CookieConsent.functionality': false,
          'CookieConsent.personalization': false,
          'CookieConsent.revision': 1,
        },
      ]);
    });

    it('should handle empty levels correctly', () => {
      const cookie: CookieValue = {
        categories: [],
        revision: 333,
        data: {
          serviceName: 'demo.example',
          uid: 'foo-bar-baz',
        },
        consentTimestamp: '2024-12-12T12:12:12.333Z',
        consentId: 'f6152595-45a0-4371-aa68-2fe97137111a',
        services: {
          necessary: [],
          ad: [],
          analytics: [],
          functionality: [],
          personalization: [],
        },
        lastConsentTimestamp: '2024-12-12T12:12:12.333Z',
        languageCode: 'en',
        expirationTime: 1764690333666,
      };

      pushToDataLayer(cookie);

      expect(window.dataLayer).toEqual([
        {
          event: 'CookieConsent-update',
          'CookieConsent.necessary': false,
          'CookieConsent.analytics': false,
          'CookieConsent.ad': false,
          'CookieConsent.functionality': false,
          'CookieConsent.personalization': false,
          'CookieConsent.revision': 333,
        },
      ]);
    });
  });
});
