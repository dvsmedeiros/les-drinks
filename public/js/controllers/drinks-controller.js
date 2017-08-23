angular.module('lesdrinks').controller('DrinksController', function($scope, $routeParams, categoryResource, supplierResource, drinkResource){

	$scope.message = '';
	$scope.categories = [];
	$scope.suppliers = [];
	$scope.drinks = [];
	$scope.drinkFilter = {};


	categoryResource.query(function(categories){
		$scope.categories = categories;
	}, function(error){
		console.log(error);
	});

	supplierResource.query(function(suppliers){
		$scope.suppliers = suppliers;
	}, function(error){
		console.log(error);
	});

	drinkResource.query(function(drinks){
		$scope.drinks = drinks;
	}, function(error){
		console.log(error);
	});

	$scope.remove = function(drink){

		drinkResource.delete({drinkId: drink._id}, function() {
			var index = $scope.drinks.indexOf(drink);
			$scope.drinks.splice(index, 1);
		}, function(erro) {
			console.log(erro);
		});
	};

	$scope.findByFilter = function(){
	
	};

});