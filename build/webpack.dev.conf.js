const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const mockDataFn = require('../mock-data')

const PORT = 9000

const devWebpackConfig = webpackMerge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    port: PORT,
    before: mockDataFn
  }
})

module.exports = devWebpackConfig