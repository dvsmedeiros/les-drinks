angular.module('lesdrinks').controller('DrinkDetailController', function($scope, $rootScope, $routeParams, $location, $window, recordTypeResource, stockResource, stockRecordResource){
	
	$scope.message = '';
	$scope.drink = {
		igredients: []
	};
	$scope.sum = 0.0;
	$scope.types = [];
	$scope.Date = new Date();
	$scope.record = {
		salePrice: 0.0,
		purchasePrice: 0.0,
		fabricationDate: $scope.Date,
		expiryDate: $scope.Date

	};

	recordTypeResource.query(function(types){
		$scope.types = types;
		$scope.record._recordType = $scope.types[0]._id;
	}, function(error){
		console.log(error);
	});

	if($routeParams.drinkId){
		
		stockResource.get({drinkId: $routeParams.drinkId}, function(stock){

			$scope.stock = stock;			
			$scope.stock.record.forEach(function(current){
				if(current._recordType.code == 'IN'){
					console.log('IN');
					$scope.sum += current.volume;
				} else if (current._recordType.code == 'OUT'){
					console.log('OUT');
					$scope.sum -= current.volume;
				}
			});

		}, function(error){
			console.log(error);
		});
	}

	$scope.$watch('record._recordType', function () {
		
		if($scope.stock){

			var typeIn = $scope.types[0];
			
			if($scope.record._recordType == typeIn._id){
				$scope.record.salePrice = 0.0;
			}
			else {
				$scope.record.salePrice = $scope.stock._drink.salePrice;
			}
		}
    }, true);

	$scope.submit = function () {	

		$scope.record._user = $rootScope.user._id;

		var req = {
			record : $scope.record,
			drink : $scope.stock._drink
		}

		stockRecordResource.update({stockId: $scope.stock._id, userId : $rootScope.user._id}, req, function(data) {

			$scope.record = {
				salePrice: 0.0,
				purchasePrice: 0.0
			};			
			$window.location.reload();				
		}, function(erro) {
			$scope.message = erro.data.message;
			console.log(erro);
		});
	}
});