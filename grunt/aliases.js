/**
 * Loaded Tasks:
 *
 * grunt-contrib-clean
 * grunt-contrib-jshint
 * grunt-contrib-jade
 * grunt-contrib-less
 * grunt-contrib-concat
 * grunt-contrib-recess
 * grunt-contrib-uglify
 * grunt-service
 * grunt-prompt
 * grunt-bump
 * grunt-recess
 *
 */
module.exports = {
    'default': [
        'clean:views',
        'clean:js',
        'clean:css',
        'jshint',
        'recess:dist',
        'less:dev',
        'less:min',
        'concat:uibootstrap',
        'jade:views',
        'jade:appviews'
    ]
};
