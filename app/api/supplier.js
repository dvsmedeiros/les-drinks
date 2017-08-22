module.exports = function (app) {
	
	var mongoose = require('mongoose');

	var api = {};
	var model = mongoose.model('Supplier');

	api.findAll = function (req, res) {
		
		model
		.find({})
		.then(function(data){
			console.log(data.length + ' Fornecedor(es) encontrado(s)');
			res.json(data)
		}, function(error){
			console.log(error);
			res.status(500).json(error);
		});

	};

	return api;	
};
