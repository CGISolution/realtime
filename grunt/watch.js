

module.exports = {
    framework: {
        files: [
            '*.js',
            'controllers/**/*.js',
            'definitions/**/*.js',
            'models/**/*.js',
            'modules/**/*.js',
            'resources/**/*.js',
            'Gruntfile.js'
        ],
        tasks: [
            'jshint:all'
        ]
    }
};
