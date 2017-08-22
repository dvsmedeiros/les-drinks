angular.module('lesdrinks').controller('DrinkController', function($scope, categoryResource, manufacturerResource, supplierResource, drinkResource){
	
	$scope.product = {
		igredients: []
	};
	$scope.categories = [];
	$scope.manufacturers = [];
	$scope.suppliers = [];
	$scope.stock = {
		record: []
	};

	categoryResource.query({active: true}, function(categories){
		$scope.categories = categories;
	}, function(error){
		console.log(error);
	});

	manufacturerResource.query({active: true}, function(manufacturers){
		$scope.manufacturers = manufacturers;
	}, function(error){
		console.log(error);
	});

	supplierResource.query({active: true}, function(suppliers){
		$scope.suppliers = suppliers;
	}, function(error){
		console.log(error);
	});

	$scope.submit = function(){
		console.log(JSON.stringify($scope.product));
		console.log(JSON.stringify($scope.stock));
		
		if ($scope.editForm.$valid) {

			if($scope.product._id){

				drinkResource.update($scope.product, function(status) {
					$scope.product = {};
					$scope.message = status.message;
				}, function(erro) {
					console.log(erro);
				});

			} else {

				drinkResource.save($scope.product, function(status) {
					$scope.product = {};
					$scope.message = status.message;
				}, function(erro) {
					console.log(erro);
				});
			}
		}
		
	};

});