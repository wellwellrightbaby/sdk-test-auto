// Karma configuration
// Generated on Mon Jul 13 2020 19:02:11 GMT+0800 (GMT+08:00)
let path = require('path');

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    // 全局框架
    frameworks: ['mocha', 'chai'],
    plugins: [
      // Karma will require() these plugins
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-webpack',
      'karma-chai',
      'karma-nyan-reporter',
      'karma-coverage-istanbul-reporter'
    ],





    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: process.env.CI
    ? ['nyan', 'coverage-istanbul', 'coveralls']
    : ['nyan', 'coverage-istanbul'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,



    // 是否运行后退出
    singleRun: !!process.env.CI,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // 识别ts
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],//'Firefox', 'Safari'


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // list of files / patterns to load in the browser
    // files: [
    //   'sdk/*.ts',
    // ],
    files: ['test/index.ts'],

    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/index.ts': ['webpack']
    },

    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },

    webpack: {
      mode: 'development',
      entry: './test/index.ts',
      output: {
        filename: '[name].js'
      },
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: {
              loader: 'ts-loader',
              options: {
                configFile: 'test/tsconfig.json'
              }
            },
            exclude: [path.join(__dirname, 'node_modules')]
          },
          {
            test: /\.jsx?$/,
            include: [path.join(__dirname, 'sdk')],
            enforce: 'post',
            use: {
              loader: 'istanbul-instrumenter-loader',
              options: { esModules: true }
            }
          }
        ]
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json']
      }
    },

    coverageIstanbulReporter: process.env.CI
      ? {
        reports: ['lcovonly', 'text-summary'],
        dir: path.join(__dirname, 'coverage'),
        combineBrowserReports: true,
        fixWebpackSourcePaths: true
      }
      : {
        reports: ['html', 'lcovonly', 'text-summary'],
        dir: path.join(__dirname, 'coverage/%browser%/'),
        fixWebpackSourcePaths: true,
        'report-config': {
          html: { outdir: 'html' }
        }
      },

    nyanReporter: {
      renderOnRunCompleteOnly: process.env.CI
    },

    coverageReporter: {
      type: 'lcovonly',
      dir: 'coverage/'
    },

  })
}
