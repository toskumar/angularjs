angular.module('auth', ['ngRoute']).
    config(['$routeProvider',
        function config($routeProvider) {
        $routeProvider.
            when('/login', {
            template: '<login></login>'
            }).
            when('/register', {
            template: '<register></register>'
            }).
            when('/home', {
                template: '<h1>Home Page </h1>'
                }).            
            when('/forgot', {
                template: '<h1>Forgot Page</h1>'
            }).
            otherwise('/login');
        }]);