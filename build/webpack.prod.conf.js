const baseWebpackConfig = require('./webpack.base.conf')
const webpackMerge = require('webpack-merge')

const prodWebpackConfig = webpackMerge(baseWebpackConfig, {
  mode: 'production'
})

module.exports = prodWebpackConfig