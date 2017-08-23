module.exports = function (app) {
	
	var mongoose = require('mongoose');

	var api = {};
	var model = mongoose.model('Supplier');

	api.findAll = function (req, res) {
		
		model
		.find({})
		.exec(function(err, data){
			if(err){
				console.log(error);
				res.status(500).json(error);	
			}
			console.log(data.length + ' Fornecedor(es) encontrado(s)');
			res.json(data)
		});

	};

	return api;	
};
