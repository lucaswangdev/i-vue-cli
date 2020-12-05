const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common.js');

/** @type { import('webpack').Configuration }*/
const config = {
  mode: 'production',
}
module.exports = merge(webpackCommon, config)