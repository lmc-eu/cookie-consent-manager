import { assembleTranslationsConfig } from '../loader';
import { SecondaryButtonMode } from '../../constants';

describe('loader', () => {
  describe('assembleTranslationsConfig', () => {
    it('should assemble configs for all translations', () => {
      const config = assembleTranslationsConfig(['Alma Career'], {}, SecondaryButtonMode.ACCEPT_NECESSARY, {});
      expect(Object.keys(config)).toHaveLength(15);
    });
  });
});
