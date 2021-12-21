
<a name="1.2.1"></a>
## [1.2.1](https://github.com/lmc-eu/cookie-consent-manager/compare/1.2.0...1.2.1) (2021-12-21)

### Bug Fixes

* Add missing cookie_name type in vanilla-cookieconsent declaration ([81396b3](https://github.com/lmc-eu/cookie-consent-manager/commit/81396b3))

### Documentation

* Fix links to previous version in changelog ([783a997](https://github.com/lmc-eu/cookie-consent-manager/commit/783a997))

<a name="1.2.0"></a>
# [1.2.0](https://github.com/lmc-eu/cookie-consent-manager/compare/1.1.2...1.2.0) (2021-12-21)

### Code Refactoring
* Enable new swap_buttons feature to proper button order by default [#CCM-51](https://jira.int.lmc.cz/browse/CCM-51) ([cf2d3c4](https://github.com/lmc-eu/cookie-consent-manager/commit/cf2d3c4))
* Use new getUserPreferences to retrieve actual user preferences [#CCM-51](https://jira.int.lmc.cz/browse/CCM-51) ([d873a22](https://github.com/lmc-eu/cookie-consent-manager/commit/d873a22))
* Use new onFirstAction and simplify conditions [#CCM-51](https://jira.int.lmc.cz/browse/CCM-51) ([96958d5](https://github.com/lmc-eu/cookie-consent-manager/commit/96958d5))

### Dependencies

* Update all dev dependencies ([38b46ca](https://github.com/lmc-eu/cookie-consent-manager/commit/38b46ca))
* Update and pin to `vanilla-cookieconsent` 2.7 [#CCM-51](https://jira.int.lmc.cz/browse/CCM-51) ([0469d9b](https://github.com/lmc-eu/cookie-consent-manager/commit/0469d9b))

### Documentation

* Add example to show all supported languages ([d142f3b](https://github.com/lmc-eu/cookie-consent-manager/commit/d142f3b))
* Fix stylelint violation in examples ([b547900](https://github.com/lmc-eu/cookie-consent-manager/commit/b547900))

### Features

* Make texts for cs, en, sk and pl less formal [#CCM-50](https://jira.int.lmc.cz/browse/CCM-50) ([7941d64](https://github.com/lmc-eu/cookie-consent-manager/commit/7941d64))

<a name="1.1.2"></a>
## [1.1.2](https://github.com/lmc-eu/cookie-consent-manager/compare/1.1.1...1.1.2) (2021-12-19)

### Bug Fixes

* **types:** Make options to be optional ([73af5a3](https://github.com/lmc-eu/cookie-consent-manager/commit/73af5a3))
### Chores

* Improve jest tests performance ([a994b3c](https://github.com/lmc-eu/cookie-consent-manager/commit/a994b3c))

<a name="1.1.1"></a>
## [1.1.1](https://github.com/lmc-eu/cookie-consent-manager/compare/1.1.0...1.1.1) (2021-12-16)

### Bug Fixes

* Apply link text decoration also for secondary button ([de5d7f8](https://github.com/lmc-eu/cookie-consent-manager/commit/de5d7f8))

<a name="1.1.0"></a>
# [1.1.0](https://github.com/lmc-eu/cookie-consent-manager/compare/1.0.2...1.1.0) (2021-12-16)

### Code Refactoring

* **typescript:** Introduce support for Typescript language [#CCM-40](https://jira.int.lmc.cz/browse/CCM-40) ([3b34deb](https://github.com/lmc-eu/cookie-consent-manager/commit/3b34deb))
* **typescript:** Migrate all source files to Typescript ([c74e5a8](https://github.com/lmc-eu/cookie-consent-manager/commit/c74e5a8))
* **typescript:** Separate types for cookie consent manager ([cf0e933](https://github.com/lmc-eu/cookie-consent-manager/commit/cf0e933))
* **languages:** Introduce types for language configuration ([4b20feb](https://github.com/lmc-eu/cookie-consent-manager/commit/4b20feb))
* Use category instead of level in type names ([d348f59](https://github.com/lmc-eu/cookie-consent-manager/commit/d348f59))

### Dependencies

* Pin dependencies ([5bd9f67](https://github.com/lmc-eu/cookie-consent-manager/commit/5bd9f67))
* Update dependency @lmc-eu/spirit-design-tokens to ^0.5.0 ([1778c57](https://github.com/lmc-eu/cookie-consent-manager/commit/1778c57))
* Upgrade @lmc-eu/esling-config-base to 1.1.0 ([9e3a217](https://github.com/lmc-eu/cookie-consent-manager/commit/9e3a217))

### Features

* Add more theming options for links and buttons (`--lmcccm-link-text-decoration`, `--lmcccm-link-hover-text-decoration`, `--lmcccm-btn-text-transform`) ([8ee958b](https://github.com/lmc-eu/cookie-consent-manager/commit/8ee958b))
* Attempt to overlap UI of other third-party plugins ([693fe02](https://github.com/lmc-eu/cookie-consent-manager/commit/693fe02))

### Chores

* Add script for code coverage by tests ([86220c8](https://github.com/lmc-eu/cookie-consent-manager/commit/86220c8))
* **typescript:** Remove unused babel because we use typescript [#CCM-40](https://jira.int.lmc.cz/browse/CCM-40) ([45b9e6c](https://github.com/lmc-eu/cookie-consent-manager/commit/45b9e6c))
* **typescript:** Run type check on ci pipeline [#CCM-40](https://jira.int.lmc.cz/browse/CCM-40) ([652d367](https://github.com/lmc-eu/cookie-consent-manager/commit/652d367))

### Styles

* Use additional insights of eslint's base config as recommended ([2bd3398](https://github.com/lmc-eu/cookie-consent-manager/commit/2bd3398))

### Tests

* Fix module naming collision by ignoring `./dist` directory ([a933611](https://github.com/lmc-eu/cookie-consent-manager/commit/a933611))

<a name="1.0.2"></a>
## [1.0.2](https://github.com/lmc-eu/cookie-consent-manager/compare/1.0.1...1.0.2) (2021-12-14)

### Dependencies
* Update all dev dependencies ([ba55e29](https://github.com/lmc-eu/cookie-consent-manager/commit/ba55e29))
* Update all dev dependencies ([4a23611](https://github.com/lmc-eu/cookie-consent-manager/commit/4a23611))
* Update dependency stylelint-order to v5 ([65db9eb](https://github.com/lmc-eu/cookie-consent-manager/commit/65db9eb))

### Documentation
* Fix links and formatting in readme ([41209fa](https://github.com/lmc-eu/cookie-consent-manager/commit/41209fa))
* Change text color of success state to improve its contrast with background ([b444af2](https://github.com/lmc-eu/cookie-consent-manager/commit/b444af2))
* **lighthouse:** Fix errors reported by Google Lighthouse in examples ([90905fb](https://github.com/lmc-eu/cookie-consent-manager/commit/90905fb))
* Make it clear one need to take care of already existing cookies ([82f2f9a](https://github.com/lmc-eu/cookie-consent-manager/commit/82f2f9a))

### Chores
* Annotate the CommonJS export names for ESM import in Node ([09aa8e6](https://github.com/lmc-eu/cookie-consent-manager/commit/09aa8e6))
* Do not lint build.js in examples ([e5e171b](https://github.com/lmc-eu/cookie-consent-manager/commit/e5e171b))
* Label bugfix pull requests with "bug" label ([6f10f31](https://github.com/lmc-eu/cookie-consent-manager/commit/6f10f31))
* **renovate:** Schedule dependency updates on weekly basis ([b08c018](https://github.com/lmc-eu/cookie-consent-manager/commit/b08c018))

<a name="1.0.1"></a>
## [1.0.1](https://github.com/lmc-eu/cookie-consent-manager/compare/1.0.0...1.0.1) (2021-12-06)

### Chores
* Version bump for npm publish. No code change.

<a name="1.0.0"></a>
# [1.0.0](https://github.com/lmc-eu/cookie-consent-manager/compare/0.8.2...1.0.0) (2021-12-06)


### Bug Fixes
* Tell bundlers not to bundle `crypto` dependency ([22ee445](https://github.com/lmc-eu/cookie-consent-manager/commit/22ee445))

### Code Refactoring
* Move browser example into browser directory ([f6893ee](https://github.com/lmc-eu/cookie-consent-manager/commit/f6893ee))

### Dependencies
* Ignore stylelint updates ([2a25de1](https://github.com/lmc-eu/cookie-consent-manager/commit/2a25de1))
* Pin dependencies ([5c9feb7](https://github.com/lmc-eu/cookie-consent-manager/commit/5c9feb7))
* Update all dev dependencies ([b7bb2de](https://github.com/lmc-eu/cookie-consent-manager/commit/b7bb2de))
* Update Spirit Design Tokens ([fc2a281](https://github.com/lmc-eu/cookie-consent-manager/commit/fc2a281))

### Documentation
* Add readmes with basic instructions for examples ([03a8e3c](https://github.com/lmc-eu/cookie-consent-manager/commit/03a8e3c))
* Extend examples for inline `<script>` usage ([287c69d](https://github.com/lmc-eu/cookie-consent-manager/commit/287c69d))
* Introduce example for CommonJS require ([8a30904](https://github.com/lmc-eu/cookie-consent-manager/commit/8a30904))
* Introduce module example using webpack ([9e3876d](https://github.com/lmc-eu/cookie-consent-manager/commit/9e3876d))
* Link CJS and ESM examples to readme ([0c2f377](https://github.com/lmc-eu/cookie-consent-manager/commit/0c2f377))
* Rename example directories for better orientation ([51913bc](https://github.com/lmc-eu/cookie-consent-manager/commit/51913bc))
* Spiritify Bootstrap in examples ([e6aeae2](https://github.com/lmc-eu/cookie-consent-manager/commit/e6aeae2))

### Chores
* Add label for Renovate bot ([f59f11f](https://github.com/lmc-eu/cookie-consent-manager/commit/f59f11f))
* Add renovate.json to configure automated deps updates ([adf893f](https://github.com/lmc-eu/cookie-consent-manager/commit/adf893f))
* Disable dependabot because of doing lot of noise ([71ddd3d](https://github.com/lmc-eu/cookie-consent-manager/commit/71ddd3d))
* Prepare for stable release ([a215c45](https://github.com/lmc-eu/cookie-consent-manager/commit/a215c45))
* **renovate:** Set `separateMajorMinor` to false for devDependencies ([6020fe2](https://github.com/lmc-eu/cookie-consent-manager/commit/6020fe2))

<a name="0.8.2"></a>
## [0.8.2](https://github.com/lmc-eu/cookie-consent-manager/compare/0.8.1...0.8.2) (2021-12-02)


### Bug Fixes
* Actually push to dataLayer only of first accept [#CCM-46](https://jira.int.lmc.cz/browse/CCM-46) ([507ae60](https://github.com/lmc-eu/cookie-consent-manager/commit/507ae60))
* Use proper level name stored to dataLayer ([b133746](https://github.com/lmc-eu/cookie-consent-manager/commit/b133746))

<a name="0.8.1"></a>
## [0.8.1](https://github.com/lmc-eu/cookie-consent-manager/compare/0.8.0...0.8.1) (2021-12-02)


### Bug Fixes
* Add missing 'ads' level to dataLayer ([ec6ed5b](https://github.com/lmc-eu/cookie-consent-manager/commit/ec6ed5b))

### Dependencies
* Bump babel-jest from 27.4.1 to 27.4.2 ([e3c499d](https://github.com/lmc-eu/cookie-consent-manager/commit/e3c499d))
* Bump jest from 27.4.1 to 27.4.2 ([832f4ce](https://github.com/lmc-eu/cookie-consent-manager/commit/832f4ce))
* Bump jest from 27.4.2 to 27.4.3 ([5320995](https://github.com/lmc-eu/cookie-consent-manager/commit/5320995))
* Bump postcss from 8.4.1 to 8.4.4 ([3211c80](https://github.com/lmc-eu/cookie-consent-manager/commit/3211c80))
* Bump sass from 1.43.5 to 1.44.0 ([078daa9](https://github.com/lmc-eu/cookie-consent-manager/commit/078daa9))

<a name="0.8.0"></a>
# [0.8.0](https://github.com/lmc-eu/cookie-consent-manager/compare/0.7.0...0.8.0) (2021-12-01)

### BREAKING CHANGES
* Remove unwanted theming options for secondary buttons ([f36d299](https://github.com/lmc-eu/cookie-consent-manager/commit/f36d299))
  * Remove: `--lmcccm-base-font-size`, `--lmcccm-btn-secondary-bg`, `--lmcccm-btn-secondary-hover-bg`, `--lmcccm-btn-secondary-active-bg`
* Update buttons theming API according to the latest design ([ba39ed9](https://github.com/lmc-eu/cookie-consent-manager/commit/ba39ed9))
  * Remove: `--lmcccm-btn-secondary-text`, `--lmcccm-btn-secondary-hover-text`, `--lmcccm-btn-secondary-active-text`
  * Add: `--lmcccm-btn-font-weight`
  * Change Inter font URL to include width `600`

### Bug Fixes
* Revert font family inheritance as it blocked font customization ([efe992e](https://github.com/lmc-eu/cookie-consent-manager/commit/efe992e))

### Dependencies
* Bump babel-jest from 27.3.1 to 27.4.1 ([ce100ad](https://github.com/lmc-eu/cookie-consent-manager/commit/ce100ad))
* Bump esbuild from 0.13.15 to 0.14.1 ([3d9fa63](https://github.com/lmc-eu/cookie-consent-manager/commit/3d9fa63))
* Bump eslint from 8.2.0 to 8.3.0 ([b2d83ae](https://github.com/lmc-eu/cookie-consent-manager/commit/b2d83ae))
* Bump jest from 27.3.1 to 27.4.1 ([c4791d8](https://github.com/lmc-eu/cookie-consent-manager/commit/c4791d8))
* Update Spirit Design Tokens ([7687df7](https://github.com/lmc-eu/cookie-consent-manager/commit/7687df7))

### Documentation
* Add custom theme demo to examples [#CCM-21](https://jira.int.lmc.cz/browse/CCM-21) ([f0855ed](https://github.com/lmc-eu/cookie-consent-manager/commit/f0855ed))
* Add description of extended configuration example ([fd7e8ba](https://github.com/lmc-eu/cookie-consent-manager/commit/fd7e8ba))
* Add table of contents to readme ([e6cdca6](https://github.com/lmc-eu/cookie-consent-manager/commit/e6cdca6))
* Fix link to vanilla cookieconsent readme ([2df83d3](https://github.com/lmc-eu/cookie-consent-manager/commit/2df83d3))
* Grammar fixes ([b6ecb31](https://github.com/lmc-eu/cookie-consent-manager/commit/b6ecb31))
* Improve docs design ([92abca3](https://github.com/lmc-eu/cookie-consent-manager/commit/92abca3))
* Improve formatting ([4d8962d](https://github.com/lmc-eu/cookie-consent-manager/commit/4d8962d))
* Make clear that Inter font link is mandatory unless font family is customized ([ea7837b](https://github.com/lmc-eu/cookie-consent-manager/commit/ea7837b))
* Use switches instead of buttons to demonstrate theming ([a008edc](https://github.com/lmc-eu/cookie-consent-manager/commit/a008edc))

### Features
* Add theming options to adjust button borders ([d1f38cc](https://github.com/lmc-eu/cookie-consent-manager/commit/d1f38cc))
  * Add `--lmcccm-btn-border-width`,  `--lmcccm-btn-border-style`,  `--lmcccm-btn-border-radius`, `--lmcccm-btn-primary-border`, `--lmcccm-btn-primary-hover-border`,  `--lmcccm-btn-primary-active-border`
* Let base font size be inherited from surrounding text ([c12341d](https://github.com/lmc-eu/cookie-consent-manager/commit/c12341d))
* Push to dataLayer only of first accept [#CCM-46](https://jira.int.lmc.cz/browse/CCM-46) ([0b198a0](https://github.com/lmc-eu/cookie-consent-manager/commit/0b198a0))

### Chores
* Add ignored internal URL to link check config ([32c3755](https://github.com/lmc-eu/cookie-consent-manager/commit/32c3755))
* Merge linting into test workflow ([c99e621](https://github.com/lmc-eu/cookie-consent-manager/commit/c99e621))

<a name="0.7.0"></a>
# [0.7.0](https://github.com/lmc-eu/cookie-consent-manager/compare/0.6.0...0.7.0) (2021-11-26)


### Bug Fixes


* Make `font-family` fallback actually work as documented ([52e2656](https://github.com/lmc-eu/cookie-consent-manager/commit/52e2656))
### Chores


* Cache yarn dependencies to increase GH Actions jobs speed ([57becf7](https://github.com/lmc-eu/cookie-consent-manager/commit/57becf7))
* Fix condition to generate `minor` on both cases ([4e2e180](https://github.com/lmc-eu/cookie-consent-manager/commit/4e2e180))
* Test if package is still buildable ([e7ce285](https://github.com/lmc-eu/cookie-consent-manager/commit/e7ce285))
### Code Refactoring


* Extract assemble config into variable ([66f5e93](https://github.com/lmc-eu/cookie-consent-manager/commit/66f5e93))
### Dependencies


* Bump @babel/preset-env from 7.16.0 to 7.16.4 ([6912d80](https://github.com/lmc-eu/cookie-consent-manager/commit/6912d80))
* Bump @lmc-eu/commitlint-config from 1.0.4 to 1.0.5 ([d8c69f0](https://github.com/lmc-eu/cookie-consent-manager/commit/d8c69f0))
* Bump @lmc-eu/prettier-config from 1.1.1 to 1.2.0 ([d51f2da](https://github.com/lmc-eu/cookie-consent-manager/commit/d51f2da))
* Bump @lmc-eu/stylelint-config from 2.0.0 to 2.0.1 ([a0bdba8](https://github.com/lmc-eu/cookie-consent-manager/commit/a0bdba8))
* Bump esbuild from 0.13.14 to 0.13.15 ([b9c3993](https://github.com/lmc-eu/cookie-consent-manager/commit/b9c3993))
* Bump postcss from 8.3.11 to 8.4.1 ([7ccc52c](https://github.com/lmc-eu/cookie-consent-manager/commit/7ccc52c))
* Bump prettier from 2.4.1 to 2.5.0 ([9de88e9](https://github.com/lmc-eu/cookie-consent-manager/commit/9de88e9))
* Bump sass from 1.43.4 to 1.43.5 ([5679690](https://github.com/lmc-eu/cookie-consent-manager/commit/5679690))
### Documentation


* Add example of localStorage clear ([c19a414](https://github.com/lmc-eu/cookie-consent-manager/commit/c19a414))
### Features


* Autodetect language based on the value of `<html lang=...>` [#CCM-43](https://jira.int.lmc.cz/browse/CCM-43) ([e389636](https://github.com/lmc-eu/cookie-consent-manager/commit/e389636))
* Submit consent to API [#CCM-39](https://jira.int.lmc.cz/browse/CCM-39) ([85c9c02](https://github.com/lmc-eu/cookie-consent-manager/commit/85c9c02))
* Submit to API also current language and cookie expiration [#CCM-41](https://jira.int.lmc.cz/browse/CCM-41) ([be946f3](https://github.com/lmc-eu/cookie-consent-manager/commit/be946f3))
### Styles


* Introduce codestyle linting usingESLint refs [#CCM-6](https://jira.int.lmc.cz/browse/CCM-6) ([5b4756d](https://github.com/lmc-eu/cookie-consent-manager/commit/5b4756d))
* Lint entire codebase not few directories ([158eaa7](https://github.com/lmc-eu/cookie-consent-manager/commit/158eaa7))
* Reformat code by prettier ([b13af7b](https://github.com/lmc-eu/cookie-consent-manager/commit/b13af7b))
* Reformat code using ESLint ruleset refs [#CCM-6](https://jira.int.lmc.cz/browse/CCM-6) ([d9d96b9](https://github.com/lmc-eu/cookie-consent-manager/commit/d9d96b9))

<a name="0.6.0"></a>
# [0.6.0](https://github.com/lmc-eu/cookie-consent-manager/compare/0.5.0...0.6.0) (2021-11-19)


### BREAKING CHANGES


* Require service name to be passed as the first parameter #CCM-35 ([680165](https://github.com/lmc-eu/cookie-consent-manager/commit/680165670deafb93e913cc2a86ed615ba72130c8))

### Chores


* Add jest testing framework and unit testing workflow ([39468d1](https://github.com/lmc-eu/cookie-consent-manager/commit/39468d1))
* Check for broken links in markdown ([58a5a79](https://github.com/lmc-eu/cookie-consent-manager/commit/58a5a79))
* Fix building when using crypto in nanoid ([82f5943](https://github.com/lmc-eu/cookie-consent-manager/commit/82f5943))
### Dependencies


* Bump @commitlint/cli from 14.1.0 to 15.0.0 ([85474f8](https://github.com/lmc-eu/cookie-consent-manager/commit/85474f8))
* Bump @lmc-eu/commitlint-config from 1.0.3 to 1.0.4 ([10cf00e](https://github.com/lmc-eu/cookie-consent-manager/commit/10cf00e))
* Bump @lmc-eu/conventional-changelog-lmc-bitbucket ([d894fb2](https://github.com/lmc-eu/cookie-consent-manager/commit/d894fb2))
* Bump @lmc-eu/prettier-config from 1.1.0 to 1.1.1 ([a3cd839](https://github.com/lmc-eu/cookie-consent-manager/commit/a3cd839))
* Bump @lmc-eu/stylelint-config from 1.0.4 to 2.0.0 ([a7fa50d](https://github.com/lmc-eu/cookie-consent-manager/commit/a7fa50d))
* Bump esbuild from 0.13.13 to 0.13.14 ([a82527b](https://github.com/lmc-eu/cookie-consent-manager/commit/a82527b))
* Bump vanilla-cookieconsent from 2.6.1 to 2.6.2 ([1729ddd](https://github.com/lmc-eu/cookie-consent-manager/commit/1729ddd))
### Documentation


* Add example of specifying custom company names [#CCM-25](https://jira.int.lmc.cz/browse/CCM-25) ([131eb34](https://github.com/lmc-eu/cookie-consent-manager/commit/131eb34))
* Do not use patch part in URL to allow using bugfix versions automatically [#CCM-29](https://jira.int.lmc.cz/browse/CCM-29) ([b484c4e](https://github.com/lmc-eu/cookie-consent-manager/commit/b484c4e))
* Fix broken links in readme ([cadeb72](https://github.com/lmc-eu/cookie-consent-manager/commit/cadeb72))
* Fix wrong `autodetectLang` type in readme ([278a3b1](https://github.com/lmc-eu/cookie-consent-manager/commit/278a3b1))
* Introduce `companyNames` option in readme [#CCM-25](https://jira.int.lmc.cz/browse/CCM-25) ([06637bc](https://github.com/lmc-eu/cookie-consent-manager/commit/06637bc))
* Update list of supported languages ([84e99fd](https://github.com/lmc-eu/cookie-consent-manager/commit/84e99fd))
### Features


* Add translations for de, hu, ru and uk languages [#CCM-18](https://jira.int.lmc.cz/browse/CCM-18) ([6e31d97](https://github.com/lmc-eu/cookie-consent-manager/commit/6e31d97))
* Generate and store consent UUID on accept [#CCM-35](https://jira.int.lmc.cz/browse/CCM-35) ([519182d](https://github.com/lmc-eu/cookie-consent-manager/commit/519182d))
* Introduce `companyNames` option as i18n parameter [#CCM-25](https://jira.int.lmc.cz/browse/CCM-25) ([e271230](https://github.com/lmc-eu/cookie-consent-manager/commit/e271230))
* Unify company name amongst all translations [#CCM-18](https://jira.int.lmc.cz/browse/CCM-18) ([928118d](https://github.com/lmc-eu/cookie-consent-manager/commit/928118d))
* Update polish translation [#CCM-31](https://jira.int.lmc.cz/browse/CCM-31) ([3b6609b](https://github.com/lmc-eu/cookie-consent-manager/commit/3b6609b))
### Styles


* Fix pseudo-element notation according to stylelint-config ([f4a607f](https://github.com/lmc-eu/cookie-consent-manager/commit/f4a607f))
### Tests


* Unit tests for i18n [#CCM-25](https://jira.int.lmc.cz/browse/CCM-25) ([d5bf67b](https://github.com/lmc-eu/cookie-consent-manager/commit/d5bf67b))

<a name="0.5.0"></a>
# [0.5.0](https://github.com/lmc-eu/cookie-consent-manager/compare/0.4.0...0.5.0) (2021-11-11)


### Chores


* Skip breaking changes until package is stable ([7d8174d](https://github.com/lmc-eu/cookie-consent-manager/commit/7d8174d))
### Documentation


* Legacy import using CommonJS and problem with webpack ([e1fa6a7](https://github.com/lmc-eu/cookie-consent-manager/commit/e1fa6a7))
* Minor readme improvements ([3743330](https://github.com/lmc-eu/cookie-consent-manager/commit/3743330))
* Unify codestyle in examples ([c6ebfa0](https://github.com/lmc-eu/cookie-consent-manager/commit/c6ebfa0))
### Features


* Introduce build for CommonJS and use more common extensions ([8c2c553](https://github.com/lmc-eu/cookie-consent-manager/commit/8c2c553))
* Introduce ES module entry point ([fad5730](https://github.com/lmc-eu/cookie-consent-manager/commit/fad5730))

<a name="0.4.1"></a>
## [0.4.1](https://github.com/lmc-eu/cookie-consent-manager/compare/0.4.0...0.4.1) (2021-11-09)


### Dependencies


* Bump @commitlint/cli from 13.2.1 to 14.1.0 ([2e91e31](https://github.com/lmc-eu/cookie-consent-manager/commit/2e91e31))
* Bump @lmc-eu/browserslist-config from 1.0.0 to 1.0.1 ([f9cd8b4](https://github.com/lmc-eu/cookie-consent-manager/commit/f9cd8b4))
* Bump @lmc-eu/commitlint-config from 1.0.2 to 1.0.3 ([67febaa](https://github.com/lmc-eu/cookie-consent-manager/commit/67febaa))
* Bump @lmc-eu/prettier-config from 1.0.3 to 1.1.0 ([eb174bc](https://github.com/lmc-eu/cookie-consent-manager/commit/eb174bc))
* Bump @lmc-eu/spirit-design-tokens from 0.2.0 to 0.4.2 ([18a78ec](https://github.com/lmc-eu/cookie-consent-manager/commit/18a78ec))
* Bump @lmc-eu/stylelint-config from 1.0.3 to 1.0.4 ([bb04c6e](https://github.com/lmc-eu/cookie-consent-manager/commit/bb04c6e))
* Bump esbuild from 0.13.12 to 0.13.13 ([0c23f7c](https://github.com/lmc-eu/cookie-consent-manager/commit/0c23f7c))
* Bump postcss-cli from 8.3.1 to 9.0.2 ([4120c18](https://github.com/lmc-eu/cookie-consent-manager/commit/4120c18))
### Documentation


* Extend examples to showcase more features [#CCM-20](https://jira.int.lmc.cz/browse/CCM-20) ([de1a0f2](https://github.com/lmc-eu/cookie-consent-manager/commit/de1a0f2))
### Chores


* Fix path change in spirit-design-token@0.4.1 ([46f3b47](https://github.com/lmc-eu/cookie-consent-manager/commit/46f3b47))
* Upgrade node.js version to v16 in pipelines ([e51afc9](https://github.com/lmc-eu/cookie-consent-manager/commit/e51afc9))
* Use `npm set script` instead of node script ([7f788f1](https://github.com/lmc-eu/cookie-consent-manager/commit/7f788f1))
### Styles


* Adjust html indenting in .editorconfig ([4dad63c](https://github.com/lmc-eu/cookie-consent-manager/commit/4dad63c))
* Fix formatting according to updated prettier-config ([a70979a](https://github.com/lmc-eu/cookie-consent-manager/commit/a70979a))

<a name="0.4.0"></a>
# [0.4.0](https://github.com/lmc-eu/cookie-consent-manager/compare/0.3.1...0.4.0) (2021-11-05)


### Chores


* Introduce dependabot configuration for automated deps updates ([0cf893d](https://github.com/lmc-eu/cookie-consent-manager/commit/0cf893d))
* Remove prepare script before publishing package ([ac4b6a9](https://github.com/lmc-eu/cookie-consent-manager/commit/ac4b6a9))
* Rename pr-labeler config file to use yaml extension everywhere ([796bf2c](https://github.com/lmc-eu/cookie-consent-manager/commit/796bf2c))
* Use .yarnrc instead of .npmrc because we are using yarn ([66b2d5e](https://github.com/lmc-eu/cookie-consent-manager/commit/66b2d5e))
### Dependencies


* Bump @lmc-eu/conventional-changelog-lmc-bitbucket ([2e17ebd](https://github.com/lmc-eu/cookie-consent-manager/commit/2e17ebd))
### Features


* Introduce new design connected to Spirit design tokens [#CCM-7](https://jira.int.lmc.cz/browse/CCM-7) ([658c99f](https://github.com/lmc-eu/cookie-consent-manager/commit/658c99f))

<a name="0.3.1"></a>
## [0.3.1](https://github.com/lmc-eu/cookie-consent-manager/compare/0.3.0...0.3.1) (2021-11-04)


### Chores


* Automatically replace package version in readme file to current ([97454e1](https://github.com/lmc-eu/cookie-consent-manager/commit/97454e1))
* Disable commit message hook with CI env ([3b0e0b9](https://github.com/lmc-eu/cookie-consent-manager/commit/3b0e0b9))
* Disable prepare script with commitlint on CI publish ([4886281](https://github.com/lmc-eu/cookie-consent-manager/commit/4886281))
* Introduce contributors array to display package authors ([e2c3c4f](https://github.com/lmc-eu/cookie-consent-manager/commit/e2c3c4f))
* Introduce keywords to display on package page ([d8a3568](https://github.com/lmc-eu/cookie-consent-manager/commit/d8a3568))
* Introduce PR labelling ([4f8e67d](https://github.com/lmc-eu/cookie-consent-manager/commit/4f8e67d))
* Introduce release action which is triggered manually ([97c00f0](https://github.com/lmc-eu/cookie-consent-manager/commit/97c00f0))
* Omit version prefix from replacing jsdelivr urls in readme ([704332b](https://github.com/lmc-eu/cookie-consent-manager/commit/704332b))
* Run publish only on tagged refs without any prefix ([534caf3](https://github.com/lmc-eu/cookie-consent-manager/commit/534caf3))
* Set git tag version to plain semver string without prefix ([6f7c069](https://github.com/lmc-eu/cookie-consent-manager/commit/6f7c069))

<a name="0.3.0"></a>
# [0.3.0](https://github.com/lmc-eu/cookie-consent-manager/compare/0.2.0...0.3.0) (2021-11-02)


### Chores


* Create release on local machine and publish by ci pipeline [#CCM-8](https://jira.int.lmc.cz/browse/CCM-8) ([4ed90f9](https://github.com/lmc-eu/cookie-consent-manager/commit/4ed90f9))
* Introduce publish package pipeline [#CCM-8](https://jira.int.lmc.cz/browse/CCM-8) ([ac0a5aa](https://github.com/lmc-eu/cookie-consent-manager/commit/ac0a5aa))
### Code Refactoring


* Rearrange and document internal defaults ([5b6c8e6](https://github.com/lmc-eu/cookie-consent-manager/commit/5b6c8e6))
### Dependencies


* Bump all dependencies ([9b1b90c](https://github.com/lmc-eu/cookie-consent-manager/commit/9b1b90c))
### Documentation


* Extend description of necessary consent ([a0ec0de](https://github.com/lmc-eu/cookie-consent-manager/commit/a0ec0de))
* How to publish this package [#CCM-8](https://jira.int.lmc.cz/browse/CCM-8) ([7672f5e](https://github.com/lmc-eu/cookie-consent-manager/commit/7672f5e))
### Features


* Add 'ad' consent category [#CCM-12](https://jira.int.lmc.cz/browse/CCM-12) ([5777638](https://github.com/lmc-eu/cookie-consent-manager/commit/5777638))
* Enable management of third-party scripts ([0020661](https://github.com/lmc-eu/cookie-consent-manager/commit/0020661))

<a name="0.2.0"></a>
# [0.2.0](https://github.com/lmc-eu/cookie-consent-manager/compare/0.1.0...0.2.0) (2021-11-01)


### Bug Fixes


* Incomplete options passed by user overrides all defaults ([68f8dcb](https://github.com/lmc-eu/cookie-consent-manager/commit/68f8dcb))
### Chores


* Add repository URL to make it shown also on npmjs.com ([66947d6](https://github.com/lmc-eu/cookie-consent-manager/commit/66947d6))
* Block fixup commit message using github action ([1a43014](https://github.com/lmc-eu/cookie-consent-manager/commit/1a43014))
* Generate changelog using conventional changelog ([dddacfc](https://github.com/lmc-eu/cookie-consent-manager/commit/dddacfc))
* Introduce commit linting ([d8238c3](https://github.com/lmc-eu/cookie-consent-manager/commit/d8238c3))
* Introduce simple dev server for local development [#CCM-5](https://jira.int.lmc.cz/browse/CCM-5) ([84c3245](https://github.com/lmc-eu/cookie-consent-manager/commit/84c3245))
* Make package publishlable ([effcd7a](https://github.com/lmc-eu/cookie-consent-manager/commit/effcd7a))
* Rename `dev` script to more common `start` ([bb6bd54](https://github.com/lmc-eu/cookie-consent-manager/commit/bb6bd54))
* Run all check with single npm script ([fee171a](https://github.com/lmc-eu/cookie-consent-manager/commit/fee171a))
* Use usernames instead of names for codeowners ([5cd5eba](https://github.com/lmc-eu/cookie-consent-manager/commit/5cd5eba))
### Code Refactoring


* Unify variable casing to camelCase ([3f1367e](https://github.com/lmc-eu/cookie-consent-manager/commit/3f1367e))
### Documentation


* Add development and contributing section [#CCM-20](https://jira.int.lmc.cz/browse/CCM-20) ([4bc165d](https://github.com/lmc-eu/cookie-consent-manager/commit/4bc165d))
* Extend and rearrange README [#CCM-20](https://jira.int.lmc.cz/browse/CCM-20) ([2260342](https://github.com/lmc-eu/cookie-consent-manager/commit/2260342))
* Fix another typo in cdn path ([185d9f8](https://github.com/lmc-eu/cookie-consent-manager/commit/185d9f8))
* Fix typo in cdn path ([33ea2ec](https://github.com/lmc-eu/cookie-consent-manager/commit/33ea2ec))
* Introduce badges to make readme look more cool ([8e08301](https://github.com/lmc-eu/cookie-consent-manager/commit/8e08301))
* Mark config arguments optional in jsdoc ([10e48b2](https://github.com/lmc-eu/cookie-consent-manager/commit/10e48b2))
* Remove autoload script, extend default example [#CCM-20](https://jira.int.lmc.cz/browse/CCM-20) ([a85c7b3](https://github.com/lmc-eu/cookie-consent-manager/commit/a85c7b3))
* Rename docs to examples [#CCM-20](https://jira.int.lmc.cz/browse/CCM-20) ([32a0c39](https://github.com/lmc-eu/cookie-consent-manager/commit/32a0c39))
### Features


* Add callbacks for all onAccept scenarios [#CCM-24](https://jira.int.lmc.cz/browse/CCM-24) ([23314b5](https://github.com/lmc-eu/cookie-consent-manager/commit/23314b5))
* Add custom onAccept callback to extend the default one [#CCM-19](https://jira.int.lmc.cz/browse/CCM-19) ([8ed95ba](https://github.com/lmc-eu/cookie-consent-manager/commit/8ed95ba))
* Add translations for cs, en, sk and pl language [#CCM-10](https://jira.int.lmc.cz/browse/CCM-10) ([1743866](https://github.com/lmc-eu/cookie-consent-manager/commit/1743866))
* Configure consent levels [#CCM-12](https://jira.int.lmc.cz/browse/CCM-12) ([703cf98](https://github.com/lmc-eu/cookie-consent-manager/commit/703cf98))
* Configure plugin defaults ([bd6309f](https://github.com/lmc-eu/cookie-consent-manager/commit/bd6309f))
* Make language autodetection easily configurable [#CCM-26](https://jira.int.lmc.cz/browse/CCM-26) ([4404a9a](https://github.com/lmc-eu/cookie-consent-manager/commit/4404a9a))
* Provide cookieConsent instance to callbacks [#CCM-24](https://jira.int.lmc.cz/browse/CCM-24) ([9232b09](https://github.com/lmc-eu/cookie-consent-manager/commit/9232b09))
* Push info to dataLayer on accept ([4203092](https://github.com/lmc-eu/cookie-consent-manager/commit/4203092))
* Rename default language settings to defaultLang to make it more understandable [#CCM-26](https://jira.int.lmc.cz/browse/CCM-26) ([6635813](https://github.com/lmc-eu/cookie-consent-manager/commit/6635813))
* Return CookieConsent instance from the init function ([b217059](https://github.com/lmc-eu/cookie-consent-manager/commit/b217059))
* Save distribution files for instant usage and examples ([d9964f3](https://github.com/lmc-eu/cookie-consent-manager/commit/d9964f3))

<a name="0.1.0"></a>
# [0.1.0](https://github.com/lmc-eu/cookie-consent-manager/compare/5c71be3693c8cef3c0929ea85b31b9423667d0a6...0.1.0) (2021-10-19)


### Chores


* Build package using ESbuild ([19ff586](https://github.com/lmc-eu/cookie-consent-manager/commit/19ff586))
* Introduce prettier and reformat files using default lmc config ([8c433a2](https://github.com/lmc-eu/cookie-consent-manager/commit/8c433a2))
* Lint css using github action ([2b7f4dd](https://github.com/lmc-eu/cookie-consent-manager/commit/2b7f4dd))
### Code Refactoring


* Build and rename distribution files ([bdb0f89](https://github.com/lmc-eu/cookie-consent-manager/commit/bdb0f89))
### Dependencies


* Bump sass to 1.43.2 ([63e57e3](https://github.com/lmc-eu/cookie-consent-manager/commit/63e57e3))
### Documentation


* Documentation of usage and configuration ([6db08fa](https://github.com/lmc-eu/cookie-consent-manager/commit/6db08fa))
### Features


* Initial configuration for cookie consent ([38a4221](https://github.com/lmc-eu/cookie-consent-manager/commit/38a4221))
* Introduce support for czech language ([ca547eb](https://github.com/lmc-eu/cookie-consent-manager/commit/ca547eb))
