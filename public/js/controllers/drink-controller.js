angular.module('lesdrinks').controller('DrinkController', function($scope, $rootScope, $routeParams, $location, categoryResource, manufacturerResource, supplierResource, recordTypeResource, drinkResource){
	
	$scope.product = {
		igredients: []
	};
	$scope.Date = new Date();
	$scope.categories = [];
	$scope.manufacturers = [];
	$scope.suppliers = [];
	$scope.types = [];
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

	recordTypeResource.query(function(types){
		$scope.types = types;
	}, function(error){
		console.log(error);
	});
	
	if($routeParams.drinkId){
		
		drinkResource.get({drinkId: $routeParams.drinkId}, function(product){
			$scope.product = product;
		}, function(error){
			console.log(error)
		});
	}

	$scope.submit = function(){

		console.log(JSON.stringify($scope.product));
		console.log(JSON.stringify($scope.stock));
		if ($scope.editForm.$valid) {

			if($scope.product._id){
				drinkResource.update({drinkId: $scope.product._id}, $scope.product, function(status) {
					$scope.product = {};
					$scope.message = status.message;
					$location.path('drinks');
				}, function(erro) {
					console.log(erro);
				});
			} else {

				$scope.stock.record[0]._user = $rootScope.user._id;
				$scope.stock.record[0]._recordType = $scope.types[0]._id;
				$scope.product._category = $scope.categories.find(o => o._id === $scope.product._category._id);

				var req = {
					product: $scope.product,
					stock: $scope.stock
				};

				drinkResource.save(req, function(status) {
					$scope.product = {};
					$scope.message = status.message;
					$location.path('drinks');
				}, function(erro) {
					console.log(erro.data.message);
					$scope.message = erro.data.message;
					console.log(erro);
				});
			}
		}
		
	};

});