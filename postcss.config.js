const precss = require('precss');
const inlineSVG = require('postcss-inline-svg');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const production = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: production ? [
    precss(),
    inlineSVG(),
    autoprefixer(),
    cssnano({ zindex: false }),
  ] : [
    precss(),
    inlineSVG(),
    autoprefixer(),
  ],
};
