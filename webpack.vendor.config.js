const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    vendor: [
      'react',
      'react-dom',
    ],
  },
  output: {
    filename: '[name].dll.js',
    path: path.join(__dirname, 'dist', 'dll'),
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, 'dist', 'dll', '[name]-manifest.json'),
    }),
  ],
};

