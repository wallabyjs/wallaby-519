module.exports = [
  {
    type: 'lib',
    files: [
      'node_modules/polyfill-function-prototype-bind/bind.js',
      'node_modules/babel-polyfill/dist/polyfill.js',
      'node_modules/sinon/pkg/sinon.js',
      'fixtures/*.*'
    ]
  },
  {
    type: 'mock',
    files: ['fixtures/*.*']
  },
  {
    type: 'src',
    files: [
      'app/**/*.js',
      'server/**/*.js'
    ]
  },
  {
    type: 'specs',
    files: [
      'app/**/*.spec.js',
      'server/**/*.spec.js'
    ]
  }
]
