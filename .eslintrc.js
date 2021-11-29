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

  parser: '@typescript-eslint/parser',

  ignorePatterns: ['node_modules', '!.*.js'],

  extends: ['@lmc-eu/eslint-config-base', 'prettier'],

  plugins: ['prettier', 'jest', '@typescript-eslint'],

  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".ts"]
      }
    }
  },

  rules: {
    'no-use-before-define': ['error', 'nofunc'],
  }
};
