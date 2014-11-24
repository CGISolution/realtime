exports.install = function(framework) {
    framework.route('/', view_app);
};

function view_app() {
    var _this = this;

    _this.cors('*', ['GET']);
    _this.layout('_layout');
    _this.view('app');
}
