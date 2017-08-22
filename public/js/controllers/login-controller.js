angular.module('lesdrinks').controller('LoginController', function($rootScope, $scope, $http, $location, $window){

	$scope.user = {};
	$scope.message = '';

	$scope.authenticate = function(){	
		
		var user = $scope.user;
		$http.post('authenticate', {
			login: user.login, 
			password: user.password
		})
		.then(function(){
			$location.path('/');
		}, function(error){
			console.log(error);
   			$scope.message = 'Login ou password inválidos';
   			$scope.user = {};
		});

	};

	$scope.logout = function(){	
	
		delete $window.sessionStorage.token;
		$location.path('login');

	};

	$scope.isAuthenticated = function(){
		if($window.sessionStorage.token){
			return true;
		} else {
			return false;
		}
	}

});