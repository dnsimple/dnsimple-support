const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'content/dist')
  },
  plugins: [
    new CopyPlugin([
      { from: 'node_modules/@fortawesome/fontawesome-free', to: 'fontawesome' },
    ]),
  ],
};
