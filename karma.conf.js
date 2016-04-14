// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'browserify'],

    files: [
      'test/*.js'
    ],

    browserify: {
      debug: true
    },

    preprocessors: {
      'test/*.js': 'browserify'
    },

    autoWatch: true,

    port: 9876
  });
};
