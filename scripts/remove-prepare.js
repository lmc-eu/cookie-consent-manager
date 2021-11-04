fs = require('fs');
const packageJson = require('../package.json');

delete packageJson.scripts.prepare;

fs.writeFile('package.json', JSON.stringify(packageJson, null, 2), (error) => {
  if (error) {
    return console.log(err);
  }
});
