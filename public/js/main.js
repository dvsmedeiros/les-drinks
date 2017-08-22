angular.module('lesdrinks', ['ngRoute', 'ngResource', 'appService'])
	.config(function($routeProvider, $locationProvider, $httpProvider) {

		$httpProvider.interceptors.push('tokenInterceptor');

		$routeProvider.when('/drinks', {
			templateUrl: 'partials/drinks.html',
			controller: 'DrinksController'
		});

		$routeProvider.when('/drink/new', {
			templateUrl: 'partials/drink.html',
			controller: 'DrinkController'
		});

		$routeProvider.when('/drink/edit/:drinkId', {
			templateUrl: 'partials/drink.html',
			controller: 'DrinkController'
		});

		$routeProvider.when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'LoginController'
		});

		$routeProvider.otherwise({redirectTo: '/drinks'});

	});