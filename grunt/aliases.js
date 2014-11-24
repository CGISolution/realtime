/**
 * Loaded Tasks:
 *
 * grunt-contrib-clean
 * grunt-contrib-jshint
 * grunt-contrib-jade
 * grunt-contrib-less
 * grunt-contrib-uglify
 * grunt-file-exists
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
    ],
    'server': [
        'clean',
        'jshint:all',
        'less',
        'jade',
        'uglify'
    ],
};
