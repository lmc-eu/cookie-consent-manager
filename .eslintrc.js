module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  ignorePatterns: ['node_modules', '!.*.js'],

  extends: ['@lmc-eu/eslint-config-base', 'prettier'],

  plugins: ['prettier', 'jest'],

  rules: {
    'no-use-before-define': ['error', 'nofunc'],
  }
};
