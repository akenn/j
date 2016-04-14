// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'browserify'],

    browsers: ['PhantomJS'],

    files: [
      'test/*.js'
    ],

    preprocessors: {
      'test/*.js': 'browserify'
    },

    browserify: {
      debug: true
    },

    singleRun: process.env.CI ? true : false,

    phantomjsLauncher: {
      exitOnResourceError: true
    },

    autoWatch: true,

    port: 9876
  });
};
