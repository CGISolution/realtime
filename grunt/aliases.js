/**
 * Loaded Tasks:
 *
 * grunt-contrib-clean
 * grunt-contrib-jshint
 * grunt-contrib-jade
 * grunt-contrib-less
 * grunt-contrib-uglify
 * grunt-service
 * grunt-prompt
 * grunt-bump
 *
 */
module.exports = {
    'default': [
        'clean',
        'jshint:all',
        'less',
        'jade',
        'uglify'
    ]
};
