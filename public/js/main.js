angular.module('lesdrinks', ['ngRoute', 'ngResource', 'ui.utils.masks', 'appService'])
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

		$routeProvider.when('/drink/detail/:drinkId', {
			templateUrl: 'partials/drink-detail.html',
			controller: 'DrinkDetailController'
		});

		$routeProvider.when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'LoginController'
		});

		$routeProvider.when('/404', {
			templateUrl: 'partials/404.html'
		});

		$routeProvider.when('/audit', {
			templateUrl: 'partials/audit.html',
			controller: 'AuditController'
		});

		$routeProvider.otherwise({redirectTo: '/drinks'});

	});