const path              = require('path');
const srcPath           = path.join(__dirname, 'src');
const nodeModulesPath   = path.join(__dirname, 'node_modules');

const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const precss            = require('precss');
const assets            = require('postcss-assets');
const autoprefixer      = require('autoprefixer');

const production = process.env.NODE_ENV === 'production';

const config = {
  devtool: production ? 'source-map' : 'cheap-module-eval-source-map',

  entry: production ?
  [
    'babel-polyfill',
    path.join(srcPath, 'index')
  ] :
  [
    'webpack-hot-middleware/client',
    path.join(srcPath, 'index')
  ],

  output: {
    path:       path.join(__dirname, 'assets'),
    filename:   'application.js',
    publicPath: production ? '/animakit/assets/' : '/assets/'
  },

  resolve: {
    root:               srcPath,
    extensions:         ['', '.js', '.jsx'],
    modulesDirectories: [
      srcPath,
      nodeModulesPath
    ]
  },

  plugins: [
    new ExtractTextPlugin('application.css', {
      allChunks: true
    })
  ],

  module: {
    loaders: [
      {
        test:    /\.jsx?$/,
        loader:  'babel',
        include: srcPath
      },
      {
        test:    /\.css$/,
        loader: production ?
        ExtractTextPlugin.extract(
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]-[local]--[hash:base64:5]!postcss'
        ) : 'style!css?modules&importLoaders=1&localIdentName=[name]-[local]--[hash:base64:5]!postcss',
        include: srcPath
      },
      {
        test:   /\.jpg$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },

  postcss: [
    precss(),
    assets(),
    autoprefixer()
  ]
};

if (production) {
  config.plugins.push(
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  );
} else {
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );
}

module.exports = config;
