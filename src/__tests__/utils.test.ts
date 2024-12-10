import {
  addSeparators,
  assembleCookieTableSections,
  assembleDescriptionIntro,
  legalizeAlmaCareer,
  pluralize,
} from '../utils';
import { CookieConsentCategory } from '../constants';

describe('utils', () => {
  describe('addSeparators', () => {
    it('should return one word without separators', () => {
      expect(addSeparators(['test'])).toBe('test');
    });

    it('should return two words separated with `and`', () => {
      expect(addSeparators(['test1', 'test2'], 'and')).toBe('test1 and test2');
    });

    it('should return three words separated with comma and `and`', () => {
      expect(addSeparators(['test1', 'test2', 'test3'], 'and')).toBe('test1, test2 and test3');
    });

    it('should return multiple words separated with comma and `and` as last separator', () => {
      expect(addSeparators(['test1', 'test2', 'test3', 'test4', 'test5'], 'and')).toBe(
        'test1, test2, test3, test4 and test5',
      );
    });
  });

  describe('pluralize', () => {
    it('should return singular', () => {
      expect(pluralize(1, 'test', 'tests')).toBe('test');
    });

    it('should return plural', () => {
      expect(pluralize(2, 'test', 'tests')).toBe('tests');
    });
  });

  describe('legalize', () => {
    it('should replace short name "Alma Career" with the full legal name', () => {
      expect(legalizeAlmaCareer(['Foo', 'Alma Career', 'Bar'], 'Alma Career et. al.')).toEqual([
        'Foo',
        'Alma Career et. al.',
        'Bar',
      ]);
    });

    it('should not change values if short name is not present', () => {
      expect(legalizeAlmaCareer(['Foobar'], 'Alma Career et. al.')).toEqual(['Foobar']);
    });
  });

  describe('assembleDescriptionIntro', () => {
    it('should use default value as description when no override was provided', () => {
      expect(assembleDescriptionIntro('Default value')).toBe('<p>Default value</p>');
    });

    it('should use override value as description when provided', () => {
      expect(assembleDescriptionIntro('Default value', 'Override value')).toBe('<p>Override value</p>');
    });

    it('should return empty string when empty override value given', () => {
      expect(assembleDescriptionIntro('Default value', '')).toBe('');
    });
  });

  describe('assembleCookieTableSections', () => {
    it('should assemble cookie table sections with empty cookieTable', () => {
      expect(
        assembleCookieTableSections(
          { name: 'Foo Name', description: 'Bar Description', expiration: 'Baz Expiration' },
          {
            necessary: { title: 'necessary title', description: 'necessary description' },
            ad: { title: 'ad title', description: 'ad description' },
            analytics: { title: 'analytics title', description: 'analytics description' },
            functionality: { title: 'functionality title', description: 'functionality description' },
            personalization: { title: 'personalization title', description: 'personalization description' },
          },
          {},
        ),
      ).toEqual([
        {
          linkedCategory: CookieConsentCategory.NECESSARY,
          title: 'necessary title',
          description: 'necessary description',
        },
        {
          linkedCategory: CookieConsentCategory.AD,
          title: 'ad title',
          description: 'ad description',
        },
        {
          linkedCategory: CookieConsentCategory.ANALYTICS,
          title: 'analytics title',
          description: 'analytics description',
        },
        {
          linkedCategory: CookieConsentCategory.FUNCTIONALITY,
          title: 'functionality title',
          description: 'functionality description',
        },
        {
          linkedCategory: CookieConsentCategory.PERSONALIZATION,
          title: 'personalization title',
          description: 'personalization description',
        },
      ]);
    });

    it('should assemble cookie table sections with cookieTable', () => {
      expect(
        assembleCookieTableSections(
          { name: 'Foo Name', description: 'Bar Description', expiration: 'Baz Expiration' },
          {
            necessary: { title: 'necessary title', description: 'necessary description' },
            ad: { title: 'ad title', description: 'ad description' },
            analytics: { title: 'analytics title', description: 'analytics description' },
            functionality: { title: 'functionality title', description: 'functionality description' },
            personalization: { title: 'personalization title', description: 'personalization description' },
          },
          {
            necessary: [{ name: 'cookie_necessary', description: `Necessary cookie.`, expiration: '1 year' }],
            ad: [{ name: 'cookie_ad', description: `Ad cookie.`, expiration: '2 years' }],
            analytics: [{ name: 'cookie_analytics', description: `Analytics cookie.`, expiration: '3 years' }],
            functionality: [{ name: 'cookie_func', description: `Functionality cookie.`, expiration: '4 years' }],
            personalization: [{ name: 'cookie_pers', description: `Personalization cookie.`, expiration: '5 years' }],
          },
        ),
      ).toEqual([
        {
          linkedCategory: CookieConsentCategory.NECESSARY,
          title: 'necessary title',
          description: 'necessary description',
          cookieTable: {
            headers: { name: 'Foo Name', description: 'Bar Description', expiration: 'Baz Expiration' },
            body: [{ name: 'cookie_necessary', description: 'Necessary cookie.', expiration: '1 year' }],
          },
        },
        {
          linkedCategory: CookieConsentCategory.AD,
          title: 'ad title',
          description: 'ad description',
          cookieTable: {
            headers: { name: 'Foo Name', description: 'Bar Description', expiration: 'Baz Expiration' },
            body: [{ name: 'cookie_ad', description: 'Ad cookie.', expiration: '2 years' }],
          },
        },
        {
          linkedCategory: CookieConsentCategory.ANALYTICS,
          title: 'analytics title',
          description: 'analytics description',
          cookieTable: {
            headers: { name: 'Foo Name', description: 'Bar Description', expiration: 'Baz Expiration' },
            body: [{ name: 'cookie_analytics', description: 'Analytics cookie.', expiration: '3 years' }],
          },
        },
        {
          linkedCategory: CookieConsentCategory.FUNCTIONALITY,
          title: 'functionality title',
          description: 'functionality description',
          cookieTable: {
            headers: { name: 'Foo Name', description: 'Bar Description', expiration: 'Baz Expiration' },
            body: [{ name: 'cookie_func', description: 'Functionality cookie.', expiration: '4 years' }],
          },
        },
        {
          linkedCategory: CookieConsentCategory.PERSONALIZATION,
          title: 'personalization title',
          description: 'personalization description',
          cookieTable: {
            headers: { name: 'Foo Name', description: 'Bar Description', expiration: 'Baz Expiration' },
            body: [{ name: 'cookie_pers', description: 'Personalization cookie.', expiration: '5 years' }],
          },
        },
      ]);
    });
  });
});
