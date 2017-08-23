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

	$scope.prices = [
		{
			id: 1,
			value: 'R$0.00 à R$100.00'
		},
		{
			id: 2,
			value: 'R$100.00 à R$200.00'
		},
		{
			id: 3,
			value: 'R$200.00 ou Mais'
		}
	];

});