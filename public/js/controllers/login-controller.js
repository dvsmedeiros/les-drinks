angular.module('lesdrinks').controller('LoginController', function($rootScope, $scope, $http, $location, $window){

	$rootScope.user = {};
	$scope.message = '';

	$scope.authenticate = function(){	
		
		var user = $rootScope.user;
		$http.post('authenticate', {
			login: user.login, 
			password: user.password
		})
		.then(function(res){
			$window.sessionStorage.setItem('principal', JSON.stringify(res.data));	
			$location.path('/');
		}, function(error){
			console.log(error);
   			$scope.message = 'Login ou password inválidos';
   			$rootScope.user = {};
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