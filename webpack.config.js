const path = require('path');

const srcPath = path.resolve(__dirname, 'src');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

const config = {
  devtool: production ? 'source-map' : 'cheap-module-eval-source-map',

  entry: [
    production ? 'babel-polyfill' : 'webpack-hot-middleware/client',
    path.join(srcPath, 'index'),
  ],

  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'application.js',
    publicPath: '/assets/',
  },

  resolve: {
    extensions: ['.js', '.es6'],
    modules: [
      srcPath,
      nodeModulesPath,
    ],
    symlinks: false,
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'application.css',
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(production ? 'production' : 'development'),
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|es6)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['es2015', { loose: true, modules: false }],
                'stage-3',
                'react',
              ],
            },
          },
        ],
        exclude: nodeModulesPath,
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader?name=[name].[ext]',
      },
    ],
  },
};

if (production) {
//
  config.module.rules.push({
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({
      use: [
        {
          loader: 'css-loader',
          query: {
            importLoaders: 1,
            modules: true,
            localIdentName: '[name]-[local]--[hash:base64:5]',
            minimize: false,
            sourceMap: false,
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
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        query: {
          importLoaders: 1,
          modules: true,
          localIdentName: '[name]-[local]--[hash:base64:5]',
          minimize: false,
          sourceMap: true,
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

module.exports = config;
