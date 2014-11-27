var app = angular.module('realtime', [
    'ngRoute',
    'ngResource',
    'velocity.ui',
    'ngAnimate',
    'ngCookies',
    'ui.bootstrap'
]);


app.config(function ($routeProvider, $locationProvider, $provide, $logProvider){

    $logProvider.debugEnabled(true);

    $locationProvider
        .html5Mode(true)
        .hashPrevix = '!';

    $provide.decorator('$sniffer', function($delegate){
        $delegate.history = false;
        return $delegate;
    });


    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'home',
    }).when('/login', {
        templateUrl: 'views/login.html',
        controller: 'login'
    }).when('/setup', {
        templateUrl: 'views/setup/_layout.html',
        controller: 'start_setup'
    }).otherwise({ redirectTo: '/' });

});

app.config(function ($controllerProvider) {
    $controllerProvider.allowGlobals();
});
