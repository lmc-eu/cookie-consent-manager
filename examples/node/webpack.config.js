const path = require('path');

module.exports = {
  resolve: { mainFields: ["main", "module"] },
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'bundle.js',
  },
};
