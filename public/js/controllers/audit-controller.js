angular.module('lesdrinks').controller('AuditController', function($scope, $rootScope, $window, $routeParams, auditResource){

	$scope.message = '';
	$scope.trails = [];
	$scope.trailFilter = {};

	auditResource.query(function(trails){
		$scope.trails = trails;
	}, function(error){
		console.log(error);
	});

	$scope.findByFilter = function(){
		auditResource.query($scope.trailFilter, function(trails){
			$scope.trails = trails;
		}, function(error){
			console.log(error);
		});
	};

	$scope.filterClean = function(){
		$scope.trailFilter = {};
	}

});