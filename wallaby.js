/* eslint object-shorthand: 0 */
const find = require('lodash/find')
const testRunnerConfig = require('test-runner-config')
const wallabyWebpack = require('wallaby-webpack')
const webpackConfig = require('./webpack/webpack.test')
const testFiles = require('./testFiles')

// removing babel-loader, we will use babel compiler instead, it's more performant
webpackConfig.module.loaders =
  webpackConfig.module.loaders.filter(loader => loader.loader !== 'babel-loader')
delete webpackConfig.devtool

const wallabyPostprocessor = wallabyWebpack(webpackConfig)
const files = testRunnerConfig.getWallabyFiles(testFiles, {
  src: file => ({ pattern: file, instrument: true, load: false, ignore: false }),
  specs: file => ({ pattern: file, instrument: true, load: false, ignore: false }),
  mock: file => ({ pattern: file, instrument: true, load: false, ignore: false })
})
const sourceFiles = find(testFiles, { type: 'src' }).files

module.exports = wallaby => Object.assign(files, {
  postprocessor: wallabyPostprocessor,
  testFramework: 'mocha',
  compilers: sourceFiles.reduce((obj, key) =>
      Object.assign(obj, {
        [key]: wallaby.compilers.babel()
      })
    , {}),
  setup: function () {
    // required to trigger test loading
    window.__moduleBundler.loadTests()
  }
})
