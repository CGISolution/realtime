
module.exports = {
    views: [
        'views/**/*.html',
        'app/views/**/*.html'
    ],
    templates: [
        'app/templates/**/*.html'
    ],
    js: [
        'public/js/*.js'
    ],
    map: [
        'public/js/*.map',
        'public/css/*.map'
    ],
    css: [
        'public/css/main.css',
        'public/css/main.min.css'
    ],
    ngControllers: [
        'public/js/ngControllers.js',
        'public/js/ngControllers.map'
    ],
    ngResources: [
        'public/js/ngResources.js',
        'public/js/ngResources.map'
    ],
    ngDirectives: [
        'public/js/ngDirectives.js',
        'public/js/ngDirectives.map'
    ],
    ngServices: [
        'public/js/ngServices.js',
        'public/js/ngServices.map'
    ]
};
