import { assembleTranslationsConfig } from '../loader';

describe('loader', () => {
  describe('assembleTranslationsConfig', () => {
    it('should assemble configs for all translations', () => {
      const config = assembleTranslationsConfig(['Alma Career'], {}, {});
      expect(Object.keys(config)).toHaveLength(15);
    });
  });
});
