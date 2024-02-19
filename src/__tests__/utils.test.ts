import {
  addSeparators,
  assembleDescriptionIntro,
  assembleSecondaryButton,
  isSettingsButtonNotShown,
  legalizeAlmaCareer,
  pluralize,
  assembleCategoryNecessary,
  assembleCategoryPersonalization,
  assembleCategoryFunctionality,
  assembleCategoryAnalytics,
  assembleCategoryAd,
} from '../utils';
import { CookieConsentCategory, SecondaryButtonMode } from '../constants';
import { CookieTableCategories } from '../types';

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

  describe('assembleSecondaryButton', () => {
    it('should assemble button values for acceptNecessary mode', () => {
      expect(
        assembleSecondaryButton(SecondaryButtonMode.ACCEPT_NECESSARY, 'accept necessary', 'show settings'),
      ).toEqual({
        role: 'accept_necessary',
        text: 'accept necessary',
      });
    });

    it('should assemble button values for showSettings mode', () => {
      expect(assembleSecondaryButton(SecondaryButtonMode.SHOW_SETTINGS, 'accept necessary', 'show settings')).toEqual({
        role: 'settings',
        text: 'show settings',
      });
    });
  });

  describe('isSettingsButtonNotShown', () => {
    it('should be true for ACCEPT_NECESSARY mode', () => {
      expect(isSettingsButtonNotShown(SecondaryButtonMode.ACCEPT_NECESSARY)).toBe(true);
    });

    it('should be false for SHOW_SETTINGS mode', () => {
      expect(isSettingsButtonNotShown(SecondaryButtonMode.SHOW_SETTINGS)).toBe(false);
    });
  });

  describe.each([
    ['assembleCategoryNecessary', assembleCategoryNecessary, CookieConsentCategory.NECESSARY, true],
    ['assembleCategoryAd', assembleCategoryAd, CookieConsentCategory.AD, false],
    ['assembleCategoryAnalytics', assembleCategoryAnalytics, CookieConsentCategory.ANALYTICS, false],
    ['assembleCategoryFunctionality', assembleCategoryFunctionality, CookieConsentCategory.FUNCTIONALITY, false],
    ['assembleCategoryPersonalization', assembleCategoryPersonalization, CookieConsentCategory.PERSONALIZATION, false],
  ])('%s', (category, assembleCategoryFunction, categoryValue, readonly) => {
    it('should assemble modal category block without cookieTable', () => {
      expect(assembleCategoryFunction('title', 'description', {})).toEqual({
        title: 'title',
        description: 'description',
        toggle: { value: categoryValue, enabled: readonly, readonly: readonly },
      });
    });

    it('should assemble modal category block with cookieTable', () => {
      const cookieTable: CookieTableCategories = {
        [categoryValue]: [
          {
            name: 'cookie1',
            description: 'Description',
            expiration: 'duration',
          },
        ],
      };

      expect(assembleCategoryFunction('title', 'description', cookieTable)).toEqual({
        title: 'title',
        description: 'description',
        toggle: { value: categoryValue, enabled: readonly, readonly: readonly },
        cookie_table: [
          {
            name: 'cookie1',
            description: 'Description',
            expiration: 'duration',
          },
        ],
      });
    });
  });
});
