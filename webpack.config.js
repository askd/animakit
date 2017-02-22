const path              = require('path');

const srcPath           = path.join(__dirname, 'src');
const nodeModulesPath   = path.join(__dirname, 'node_modules');

const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const precss            = require('precss');
const assets            = require('postcss-assets');
const autoprefixer      = require('autoprefixer');

const production = process.env.NODE_ENV === 'production';

const REACT_SYNTAX_HIGHLIGHTER_LIGHT_BUILD = true;
const NODE_ENV = JSON.stringify(production ? 'production' : 'development');


const config = {
  devtool: production ? 'source-map' : 'cheap-module-eval-source-map',

  entry: [
    production ? 'babel-polyfill' : 'webpack-hot-middleware/client',
    path.join(srcPath, 'index'),
  ],

  output: {
    path:       path.join(__dirname, 'assets'),
    filename:   'application.js',
    publicPath: '/assets/',
  },

  resolve: {
    extensions: ['.js', '.es6'],
    modules:    [
      srcPath,
      nodeModulesPath,
    ],
  },

  plugins: [
    new ExtractTextPlugin({
      filename:  'application.css',
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        REACT_SYNTAX_HIGHLIGHTER_LIGHT_BUILD,
        NODE_ENV,
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|es6)$/,
        use:  [
          {
            loader:  'babel-loader',
            options: {
              presets: [
                ['es2015', { loose: true, modules: false }],
                'stage-0',
                'react',
              ],
            },
          },
        ],
        include: srcPath,
      },
      {
        test:   /\.(jpg|png)$/,
        loader: 'file-loader?name=[name].[ext]',
      },
    ],
  },
};

if (production) {
//
  config.module.rules.push({
    test:   /\.css$/,
    loader: ExtractTextPlugin.extract({
      loader: [
        {
          loader: 'css-loader',
          query:  {
            importLoaders:   1,
            modules:         true,
            localIdentName:  '[name]-[local]--[hash:base64:5]',
            minimize:        false,
            sourceMap:       false,
            discardComments: {
              removeAll: true,
            },
          },
        },
        'postcss-loader',
      ],
    }),
  });

  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    })
  );
//
} else {
//
  config.module.rules.push({
    test: /\.css$/,
    use:  [
      'style-loader',
      {
        loader: 'css-loader',
        query:  {
          importLoaders:  1,
          modules:        true,
          localIdentName: '[name]-[local]--[hash:base64:5]',
          minimize:       false,
          sourceMap:      true,
        },
      },
      'postcss-loader',
    ],
  });

  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  );
//
}

config.plugins.push(
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        precss(),
        assets(),
        autoprefixer(),
      ],
      context: '/',
    },
  })
);

module.exports = config;
