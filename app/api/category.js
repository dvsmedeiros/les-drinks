module.exports = function(app){
	
	var mongoose = require('mongoose');

	var api = {};
	var model = mongoose.model('Category');

	api.findAll = function (req, res) {
		
		model
		.find({})
		.then(function(data){
			console.log(data.length + ' Categoria(s) encontrada(s)');
			res.json(data)
		}, function(error){
			console.log(error);
			res.status(500).json(error);
		});

	};

	return api;
};



