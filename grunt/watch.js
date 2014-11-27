

module.exports = {
    framework: {
        files: [
            'test.js',
            'debug.js',
            'release.js',
            'controllers/**/*.js',
            'definitions/**/*.js',
            'models/**/*.js',
            'modules/**/*.js',
            'resources/**/*.js',
            'Gruntfile.js'
        ],
        tasks: [
            'jshint:all',
            'service:restart'
        ]
    },
    ngControllers: {
        files: [
            'app/controllers/**/*.js'
        ],
        tasks: [
            'clean:ngControllers',
            'uglify:ngControllers'
        ],
    },
    ngResources: {
        files: [
            'app/resources/**/*.js'
        ],
        tasks: [
            'clean:ngResources',
            'uglify:ngResources'
        ],
    },
    ngDirectives: {
        files: [
            'app/directives/**/*.js'
        ],
        tasks: [
            'clean:ngDirectives',
            'uglify:ngDirectives'
        ],
    },
    ngServices: {
        files: [
            'app/services/**/*.js'
        ],
        tasks: [
            'clean:ngServices',
            'uglify:ngServices'
        ],
    },
    jade: {
        files: [
            'app/jade/**/*.jade'
        ],
        tasks: [
            'clean:views',
            'jade:appviews'
        ]
    },
    jadeTemp: {
        files: [
            'app/jade-templates/**/*.jade'
        ],
        tasks: [
            'clean:templates',
            'jade:templates'
        ]
    },
    less: {
        files: [
            'public/less/**/*.less'
        ],
        tasks: ['less:dev']
    },
    views: {
        files: ['jade/**/*.jade'],
        tasks: ['service:restart']
    },
};
