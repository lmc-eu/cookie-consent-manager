import { addSeparators, pluralize } from '../utils';

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
});
