module.exports = function (app) {
	
	var mongoose = require('mongoose');

	var api = {};
	var model = mongoose.model('Manufacturer');

	api.findAll = function (req, res) {
		
		model
		.find({})
		.then(function(data){
			console.log(data.length + ' Fabricante(s) encontrado(s)');
			res.json(data)
		}, function(error){
			console.log(error);
			res.status(500).json(error);
		});

	};

	return api;	
};
