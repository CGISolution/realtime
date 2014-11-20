
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
