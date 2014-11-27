var path = require('path');
// var Grunt = require('./grunt/Grunt');

module.exports = function (grunt) {

    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt'),
        init: true,
        data: {
            test: false
        },
        loadGruntTasks: {
            pattern: 'grunt-*',
            config: require('./package.json'),
            scope: 'devDependencies'
        }
    });
};
