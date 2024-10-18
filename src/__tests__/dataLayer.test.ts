import { pushToDataLayer } from '../dataLayer';
import { CookieConsentCategoryValues, VanillaCookieConsent } from '../types';
import { CookieConsentCategory } from '../constants';

describe('dataLayer', () => {
  describe('pushToDataLayer', () => {
    it('should pushToDataLayer', () => {
      expect(true).toBe(true);
    });

    beforeEach(() => {
      // Reset the dataLayer before each test
      window.dataLayer = [];
    });

    it('should push the correct event to the dataLayer', () => {
      const cookie: VanillaCookieConsent.Cookie<CookieConsentCategoryValues> = {
        level: [CookieConsentCategory.NECESSARY, CookieConsentCategory.ANALYTICS],
        data: { uid: '123', serviceName: 'foo-service' },
        revision: 1,
        rfc_cookie: true,
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
      const cookie: VanillaCookieConsent.Cookie<CookieConsentCategoryValues> = {
        level: [],
        data: { uid: '123', serviceName: 'foo-service' },
        revision: 333,
        rfc_cookie: true,
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
