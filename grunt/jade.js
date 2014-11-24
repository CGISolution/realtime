
module.exports = {
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
    },
    templates: {
        options: {
            data: {
                debug: true,
                pretty: true
            }
        },
        files: [{
            expand: true,
            cwd: 'app/jade-templates',
            src: '**/*.jade',
            dest: 'app/templates/',
            ext: '.html'
        }]
    },
    appviews: {
        options: {
            data: {
                debug: true
            }
        },
        files: [{
            expand: true,
            cwd: 'app/jade',
            src: '**/*.jade',
            dest: 'app/views/',
            ext: '.html'
        }]
    }
};
