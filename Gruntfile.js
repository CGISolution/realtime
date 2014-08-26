module.exports = function (grunt)
{
    grunt.initConfig({
        clean: {
            views: [
                'views/*.html'
            ],
            css: [
                'public/css/main.css',
                'public/css/main.min.css'
            ]
        },
        jade: {
            views: {
                options: {
                    data: {
                        debug: true
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'jade',
                    src: '**/*.jade',
                    dest: 'views/',
                    ext: '.html'
                }]
            }
        },

        jshint: {
            all: ['Gruntfile.js', 'controllers/*.js']
        },
        // CSS/LESS lint
        recess: {
            dist: {
                src: ['public/less/site.less']
            }
        },
        /**
         *  Usage: (Sarting with v0.0.1)
         *      grunt bump - v.0.02
         *      grunt bump:patch - v0.0.3
         *      grunt bump:minor - v0.1.0
         *      grunt bump:major - v1.0.0
         *      grunt bump:prerelease - v1.0.0-1
         *      grunt bump:git
         */
        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: [],
                commit: true,
                commitMessage: "Release v%VERSION%",
                commitFiles: ['-a'],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: true,
                pushTo: 'origin',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
            }
        },
        less: {
            dev: {
                options: {
                    paths: ['public/less', 'node_modules/bootstrap/less'],
                    compress: false
                },
                files: {
                    'public/css/main.css': 'public/less/main.less',
                }
            },
            min: {
                options: {
                    paths: ['public/less', 'node_modules/bootstrap/less', 'vendor/components/font-awesome/less'],
                    compress: true
                },
                files: {
                    'public/css/main.min.css': 'public/less/main.less',
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-recess');

    grunt.registerTask('default', ['clean:views', 'clean:css', 'jshint', 'recess:dist', 'less:dev', 'less:min', 'jade:views']);
};
