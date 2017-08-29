angular.module('lesdrinks').controller('ResourceController', function ($scope) {
	
	$scope.status = [
		{
			key: 'Ativo',
			value: true
		},
		{
			key: 'Inativo',
			value: false	
		}
	];

});