
function home ($scope)
{
    $scope.checkLoginForm = function ()
    {
        if (this.login.email.$dirty)
        {
           // $log.warn($scope.email);
        }
    };

    $scope.submitLogin = function (loginValid)
    {
        if (loginValid)
        {

        }
    };
}

function login ($scope)
{
}

