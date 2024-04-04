import { assembleLanguagesConfig } from '../loader';
import { SecondaryButtonMode } from '../../constants';

describe('loader', () => {
  describe('assembleLanguagesConfig', () => {
    it('should assemble configs for all languages', () => {
      const config = assembleLanguagesConfig(['Alma Career'], {}, SecondaryButtonMode.ACCEPT_NECESSARY, {});
      expect(Object.keys(config)).toHaveLength(13);
    });
  });
});
