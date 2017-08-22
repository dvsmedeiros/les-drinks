angular.module('lesdrinks').controller('DrinksController', function($scope, categoryResource, supplierResource, drinkResource){

	$scope.message = '';
	$scope.categories = [];
	$scope.suppliers = [];
	$scope.drinks = [];


	categoryResource.query({active: true}, function(categories){
		$scope.categories = categories;
	}, function(error){
		console.log(error);
	});

	supplierResource.query({active: true}, function(suppliers){
		$scope.suppliers = suppliers;
	}, function(error){
		console.log(error);
	});

	drinkResource.query({active: false}, function(drinks){
		$scope.drinks = drinks;
	}, function(error){
		console.log(error);
	});

});