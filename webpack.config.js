const Path = require('path');

module.exports = {
  entry: Path.resolve(__dirname, 'app/index.js'),
  output: {
    path: Path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include: Path.resolve(__dirname, 'app'),
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  }
};
