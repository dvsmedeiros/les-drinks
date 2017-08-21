angular.module('lesdrinks', ['ngRoute', 'ngResource', 'appService'])
	.config(function($routeProvider, $locationProvider, $httpProvider) {

		$httpProvider.interceptors.push('tokenInterceptor');

		$routeProvider.when('/drinks', {
			templateUrl: 'partials/principal.html',
			controller: 'DrinksController'
		});

		$routeProvider.when('/drinks/new', {
			templateUrl: 'partials/drink.html',
			controller: 'DrinksController'
		});

		$routeProvider.when('/drinks/edit/:drinkId', {
			templateUrl: 'partials/drink.html',
			controller: 'DrinksController'
		});

		$routeProvider.when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'LoginController'
		});
		
		$routeProvider.otherwise({redirectTo: '/drinks'});

	});