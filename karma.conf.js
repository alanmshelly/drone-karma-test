module.exports = function(config) {
  config.set({
    singleRun: true,
    frameworks: ['browserify', 'mocha'],
    files: ['test.js'],
    browsers: ['Chrome'],
    preprocessors: {
         'test.js': [ 'browserify' ]
    },
    plugins: [
      'karma-browserify',
      'karma-chrome-launcher',
      'karma-mocha'
    ],
  });
};
