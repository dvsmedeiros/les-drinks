module.exports = function (app) {
	
	var mongoose = require('mongoose');

	var api = {};
	var model = mongoose.model('Type');

	api.findAll = function (req, res) {
		
		model
		.find({})
		.exec(function(err, data){
			if(err){
				console.log(error);
				res.status(500).json(error);	
			}
			console.log(data.length + ' Tipo(s) de Registro(s) encontrado(s)');
			res.json(data)
		});

	};

	return api;	
};
