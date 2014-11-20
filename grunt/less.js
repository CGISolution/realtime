

module.exports = {
    dev: {
        options: {
            paths: ['public/less', 'node_modules/bootstrap/less', 'node_modules/font-awesome/less'],
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
};
