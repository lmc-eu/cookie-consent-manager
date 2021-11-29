/* eslint-disable no-console */
const replace = require('replace-in-file');
const packageJson = require('../package.json');

const newVersion = packageJson.version.match(/([0-9])\.[0-9]\.[0-9]/)[1];

const options = {
  files: 'README.md',
  from: /cookie-consent-manager@([0-9])/gm,
  to: `cookie-consent-manager@${newVersion}`,
};

replace(options)
  .then((results: unknown) => {
    console.log('Replacement results:', results);
  })
  .catch((error: unknown) => {
    console.error('Error occurred:', error);
  });

export {};
