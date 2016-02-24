const path              = require('path');
const frontPath         = path.join(__dirname, 'front');

const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const postcss           = require(path.join(frontPath, 'postcss', 'plugins'));

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'webpack-hot-middleware/client',
    path.join(frontPath, 'src', 'index')
  ],

  output: {
    path:       path.join(__dirname, 'dist'),
    filename:   'application.js',
    publicPath: '/assets/'
  },

  resolve: {
    root:               frontPath,
    extensions:         ['', '.js', '.jsx'],
    modulesDirectories: [
      path.join(frontPath, 'src'),
      path.join(__dirname, 'node_modules')
    ]
  },

  plugins: [
    new ExtractTextPlugin('application.css', {
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test:    /\.jsx?/,
        loader:  'babel',
        include: path.join(frontPath, 'src')
      },
      {
        test:   /\.css/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]-[local]--[hash:base64:5]!postcss'
        )
      }
    ]
  },

  postcss
};
