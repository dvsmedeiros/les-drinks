module.exports = function (app) {
	
	var mongoose = require('mongoose');

	var api = {};
	var model = mongoose.model('Drink');

	api.save = function (req, res) {
		
		model
		.create(req.body)
		.then(function(foto){
			res.json(foto);	
		}, function(error){
			console.log(error);
			res.status(500).json(error);
		});

	};

	api.findAll = function (req, res) {
		
		model
		.find({})
		.then(function(data){
			console.log(data.length + ' Bedida(s) encontrada(s)');
			res.json(data)
		}, function(error){
			console.log(error);
			res.status(500).json(error);
		});

	};

	return api;	
};
