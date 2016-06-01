var _ = require('underscore');
var webpack = require('webpack');

var production = process.env.NODE_ENV === 'production';

var baseConfig = {
  resolve: {
    extensions: ['', '.webpack.js', '.js']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css?sourceMap', 'postcss?sourceMap']
      },
      { test: /\.md$/, loader: 'html!markdown' }
    ]
  },
  plugins: [
  ].concat(
    production ? [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ] : []
  ),
  postcss: function () {
    return [require('autoprefixer'),
            require('postcss-custom-properties')];
  }
};

var configurations = function() {
  return [].slice.call(arguments).map(function(config) {
    return _.extend(config, baseConfig);
  });
};

module.exports = configurations({
  entry: {
    'main': './lib/main.js'
  },
  output: {
    filename: '[name].bundle.js'
  }
});
