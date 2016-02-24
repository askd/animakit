const path              = require('path');
const frontPath         = path.join(__dirname, 'front');
const srcPath           = path.join(frontPath, 'src');
const nodeModulesPath   = path.join(__dirname, 'node_modules');

const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const postcss           = require(path.join(frontPath, 'postcss', 'plugins'));

const production = process.env.NODE_ENV === 'production';

const config = {
  devtool: production ? 'source-map' : 'cheap-module-eval-source-map',

  entry: [
    'webpack-hot-middleware/client',
    path.join(srcPath, 'index')
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
        test:    /\.jsx?/,
        loader:  'babel',
        include: path.join(frontPath, 'src')
      },
      {
        test:   /\.css/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]-[local]--[hash:base64:5]!postcss'
        ),
        include: srcPath
      },
      {
        test:   /\.css/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css!postcss'
        ),
        include: nodeModulesPath
      }
    ]
  },

  postcss
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
