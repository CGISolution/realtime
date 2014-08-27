angular.module('rt.directives', []).directive('passwordMatch', [function () {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {

            var firstPassword = '#' + attrs.passwordMatch;

            elem.add(firstPassword).on('keyup', function () {

            scope.$apply(function () {
                    var v = elem.val() === $(firstPassword).val();

                    ctrlInstance.$setValidity('passwordMatch', v);
                });
            });
        }
    }
}]);
