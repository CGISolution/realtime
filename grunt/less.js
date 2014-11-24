

module.exports = {
    site: {
        options: {
            sourceMap: true,
            sourceMapFilename: 'public/css/main.map',
            sourceMapURL: '/css/main.map',
            sourceMapBasepath: 'public',
            sourceMapRootpath: '/',
            paths: [
                'public/less',
                'public/node_modules/bootstrap/less',
                'public/node_modules/font-awesome/less',
                'public/bower_components/lesshat/build'
            ],
            compress: false
        },
        files: {
            'public/css/main.css': 'public/less/main.less',
        }
    }
};
