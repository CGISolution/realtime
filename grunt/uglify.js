
module.exports = {
    framework: {
        files: [
            '*.js',
            'controllers/**/*.js',
            'definitions/**/*.js',
            'models/**/*.js',
            'modules/**/*.js',
            // 'resources/**/*.js',
            '!Gruntfile.js'
        ],
        tasks: [
            'jshint:all',
            'service:restart'
        ],
    },

    ngServices: {
        options: {
            mangle: false,
            compress: {
                drop_console: true
            },
            sourceMap: true,
            sourceMapName: 'public/js/ngServices.map'
        },
        files: {
            'public/js/ngServices.js': ['app/services/*.js']
        }
    },
    ngControllers: {
        options: {
            compress: {
                drop_console: true
            },
            mangle: false,
            sourceMap: true,
            sourceMapName: 'public/js/ngControllers.map'
        },
        files: {
            'public/js/ngControllers.js': ['app/controllers/*.js']
        }
    },
    ngDirectives: {
        options: {
            compress: {
                drop_console: true
            },
            mangle: false,
            sourceMap: true,
            sourceMapName: 'public/js/ngDirectives.map'
        },
        files: {
            'public/js/ngDirectives.js': ['app/directives/*.js']
        }
    },
    ngResources: {
        options: {
            compress: {
                drop_console: true
            },
            mangle: false,
            sourceMap: true,
            sourceMapName: 'public/js/ngResources.map'
        },
        files: {
            'public/js/ngResources.js': ['app/resources/*.js']
        }
    },
    bowerComponents: {
        options: {
            compress: {
                drop_console: true
            },
            mangle: false,
            sourceMap: true,
            sourceMapName: 'public/js/bowerComponents.map'

        },
        files: {
            'public/js/bowerComponents.js': [
                'public/bower_components/velocity/jquery.velocity.min.js',
                'public/bower_components/velocity/velocity.ui.js',
                'public/bower_components/velocity-ui-angular/velocity.ui.angular.min.js',
                'public/bower_components/lodash/dist/lodash.underscore.js',
            ]
        }
    },
    npm: {
        options: {
            compress: {
                drop_console: true
            },
            mangle: false,
            sourceMap: true,
            sourceMapName: 'public/js/npm.map',
        },
        files: {
            'public/js/npm.js': [
                'public/node_modules/velocity-animate/velocity.min.js',
                'public/node_modules/async/lib/async.js',
                'public/node_modules/numeral/numeral.js'
            ]
        }
    }
};
