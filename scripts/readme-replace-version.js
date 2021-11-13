const replace = require('replace-in-file');
const packageJson = require('../package.json');
// TODO: match just major version after 1.0 release
const newVersion = packageJson.version.match(/([0-9]\.[0-9])\.[0-9]/)[1];

const options = {
  files: 'README.md',
  from: /cookie-consent-manager@([0-9]\.[0-9])/gm, // TODO: replace with ([0-9]) after 1.0 release
  to: `cookie-consent-manager@${newVersion}`,
};

replace(options)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
