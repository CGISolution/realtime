var properties = require('properties');
var Q = require('q');

function Grunt () {
}

Grunt.prototype.encrypt = function (txt) {
    var cipher = crypto.createCipher(algorithm, key);
};

Grunt.prototype.parseConfig = function (type) {

    if (type === undefined)
        type = false;

    var file = 'config';

    if (type)
        file = 'config-' + type;
};

G = new Grunt();

module.exports = G;
