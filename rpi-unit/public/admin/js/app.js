'use strict';

angular.module('ngRUAApp', [
    'ngRoute',
    'ngRUAApp.filters',
    'ngRUAApp.services',
    'ngRUAApp.directives',
    'ngRUAApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'})
        .when('/login', {templateUrl: 'partials/login.html', controller: 'LoginController'})
        .when('/deviceTypeList', {templateUrl: 'partials/deviceTypeList.html', controller: 'DeviceTypeListController'})
        .when('/deviceTypeDetail/:action', {templateUrl: 'partials/deviceTypeDetail.html', controller: 'DeviceTypeDetailController'})
        .when('/deviceTypeDetail/:action/:id', {templateUrl: 'partials/deviceTypeDetail.html', controller: 'DeviceTypeDetailController'})
        .otherwise({redirectTo: '/home'});
}]).
run(function($rootScope, $location) {
	$rootScope.$on("$routeChangeStart", function(event, next, current) {
		if (!$rootScope.loggedIn) {
			$location.path('/login');
		}		
	});
});
