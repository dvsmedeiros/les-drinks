angular.module('appService', ['ngResource'])
	.factory('categoryResource', function($resource) {
		return $resource('/category/:categoryId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	})
	.factory('manufacturerResource', function($resource) {
		return $resource('/manufacturer/:manufacturerId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	})
	.factory('supplierResource', function($resource) {
		return $resource('/supplier/:supplierId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	})
	.factory('recordTypeResource', function($resource) {
		return $resource('/recordType/:recordTypeId', null, {
			'update' : { 
				method: 'PUT'	
			}
		});
	})
	.factory('drinkResource', function($resource) {
		return $resource('/drink/:drinkId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	})
	.factory('stockResource', function($resource) {
		return $resource('/stock/:drinkId', null, {
			'update' : { 
				method: 'PUT'	
			}
		});
	})
	.factory('stockRecordResource', function($resource) {
		return $resource('/stock/record/:stockId', null, {			
			'update' : { 
				method: 'PUT'	
			}
		});
	})
	.factory('auditResource', function($resource) {
		return $resource('/audit', null, {			
			'update' : { 
				method: 'PUT'	
			}
		});
	})
    ;