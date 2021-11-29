import { config as configCs } from '../cs';
import { config as configDe } from '../de';
import { config as configEn } from '../en';
import { config as configHu } from '../hu';
import { config as configPl } from '../pl';
import { config as configRu } from '../ru';
import { config as configSk } from '../sk';
import { config as configUk } from '../uk';

describe.each([
  ['cs', configCs],
  ['de', configDe],
  ['en', configEn],
  ['hu', configHu],
  ['pl', configPl],
  ['ru', configRu],
  ['sk', configSk],
  ['uk', configUk],
])('config %s', (name, config) => {
  it('should return localization object', () => {
    expect(config({ companyNames: ['test1', 'test2', 'test3'] })).toMatchSnapshot();
  });
});
