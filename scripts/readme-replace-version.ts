/* eslint-disable no-console */
import { replaceInFile } from 'replace-in-file';
import packageJson from '../package.json' with { type: 'json' };

const newVersion = packageJson.version.match(/([0-9])\.[0-9]\.[0-9]/)?.[1];

const options = {
  files: 'README.md',
  from: /cookie-consent-manager@([0-9])/gm,
  to: `cookie-consent-manager@${newVersion}`,
};

replaceInFile(options)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });

export {};
