import { config as configCs } from '../cs';
import { config as configDe } from '../de';
import { config as configEn } from '../en';
import { config as configHr } from '../hr';
import { config as configHu } from '../hu';
import { config as configPl } from '../pl';
import { config as configRu } from '../ru';
import { config as configSk } from '../sk';
import { config as configSl } from '../sl';
import { config as configUk } from '../uk';
import { SecondaryButtonMode } from '../../constants/SecondaryButtonMode';

describe.each([
  ['cs', configCs],
  ['de', configDe],
  ['en', configEn],
  ['hu', configHu],
  ['hr', configHr],
  ['pl', configPl],
  ['ru', configRu],
  ['sk', configSk],
  ['sl', configSl],
  ['uk', configUk],
])('config %s', (name, config) => {
  it('should return localization object for acceptNecessary button mode', () => {
    expect(
      config({ companyNames: ['test1', 'test2', 'test3'] }, SecondaryButtonMode.ACCEPT_NECESSARY),
    ).toMatchSnapshot();
  });

  it('should return localization object for showSettings button mode', () => {
    expect(config({ companyNames: ['test1', 'test2', 'test3'] }, SecondaryButtonMode.SHOW_SETTINGS)).toMatchSnapshot();
  });
});
