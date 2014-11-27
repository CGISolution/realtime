
function home ($scope) {
    $scope.checkLoginForm = function () {
        if ($scope.login.email.$dirty) {
           // $log.warn($scope.email);
        }
    };

    $scope.submitLogin = function (loginValid) {
        if (loginValid) {

        }
    };
}

function login ($scope) {
}
