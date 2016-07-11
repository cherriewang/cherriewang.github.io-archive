var myApp = angular.module('myApp', [
	'ngRoute', 
	'myControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'homeController'
	}).
	otherwise({
		redirectTo: '/home'
	});
}])