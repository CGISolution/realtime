
module.exports = {
    all: {
        options: {
            'noempty': false,
            'evil': true,
            'sub': true,
            'proto': true
        },
        src: [
            'app/app.js',
            'Gruntfile.js',
            'controllers/*.js',
            'models/*.js',
            'modules/*.js',
            'grunt/*.js',
            'app/controller/*.js',
            'app/directives/*.js',
            'mongoose.js'
        ]
    }
};
