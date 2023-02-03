const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'node_modules/tachyons/css/tachyons.min.css', to: 'tachyons/css/tachyons.min.css' },
        { from: 'node_modules/@fortawesome/fontawesome-free/css/all.min.css', to: 'fontawesome/css/all.min.css' },
        { from: 'node_modules/@fortawesome/fontawesome-free/webfonts', to: 'fontawesome/webfonts', globOptions: { ignore: ['*.svg'] } }
      ]
    })
  ]
};
