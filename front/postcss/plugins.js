const autoreset       = require('postcss-autoreset');
const nested          = require('postcss-nested');
const autoprefixer    = require('autoprefixer');

module.exports = [
  autoreset(),
  nested(),
  autoprefixer()
];
