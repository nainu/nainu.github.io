const path = require('path');

module.exports = {
  mode: 'production',
  entry: './webpack/entry.js',
  // entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'assets/javascripts/'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
};

