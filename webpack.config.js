const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    'css': './tests/css/index.js',
    'styled-components': './tests/styled-components/index.js',
    'emotion-styled': './tests/emotion-styled/index.js',
    'emotion-css': './tests/emotion-css/index.js',
    'emotion-obj': './tests/emotion-obj/index.js',
    'cxs': './tests/cxs/index.js',
    'cxs-styled': './tests/cxs-styled/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist', 'bundle'),
  },
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
    ],
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dist/dll/vendor-manifest.json'),
    }),
  ],
};


