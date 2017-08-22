angular.module('lesdrinks')
	.factory('tokenInterceptor', function($window, $q, $location){

		var interceptor = {};

		interceptor.response = function(res){
			var token = res.headers('x-access-token');
			if(token){
				$window.sessionStorage.token = token;
				//console.log('token armazenado no navegador');
			}
			return res;
		};

		interceptor.request = function(config){
			//console.log('INTERCEPTOR');
			config.headers = config.headers || {};
			if($window.sessionStorage.token){
				//console.log('add token no header');
				config.headers['x-access-token'] = $window.sessionStorage.token;
			}
			console.log(config.headers['x-access-token']);
			return config;
		};

		interceptor.responseError = function(rejection){

			if(rejection != null && rejection.status == 401){
				delete $window.sessionStorage.token;
				$location.path('login');
			}
			return $q.reject(rejection); 
		}

		return interceptor;
	});