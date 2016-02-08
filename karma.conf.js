module.exports = function(config) {
  config.set({
    frameworks: ['browserify', 'mocha'],
    files: ['test.js'],
    browsers: ['Chrome'],
    preprocessors: {
         'test.js': [ 'browserify' ]
    },
  });
};
