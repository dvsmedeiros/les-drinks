module.exports = function (app) {
	
	var mongoose = require('mongoose');

	var api = {};
	var model = mongoose.model('Drink');

	api.save = function (req, res) {
		
		model
		.create(req.body, function(err, drink){
			if(err){
				console.log(error);
				res.status(500).json(error);
			}
			res.json(drink);	
		});

	};

	api.update = function(req, res){

		model
		.findByIdAndUpdate(req.params.id, req.body)
		.exec(function(err, drink){
			if(err){
				console.log(error);
				res.status(500).json(error);
			}
			res.json(drink);
		});	
	};

	api.removeById = function(req, res){

		model
		.remove({_id: req.params.id})
		.exec(function(err){
			if(err){
				console.log(error);
				res.status(500).json(error);
			}
			res.sendStatus(204);
		});
	
	};

	api.findById = function (req, res) {	
		model
		.findById(req.params.id)
		.populate('_manufacturer')
		.populate('_supplier')
		.populate('_category')
		.exec(function(err, data){
			if(err) throw Error('Bebida não encontrada!');
			res.json(data);	
		});
	};

	api.findAll = function (req, res) {
		
		model
		.find({})
		.populate('_manufacturer')
		.populate('_supplier')
		.populate('_category')
		.exec(function(err, data){
			if(err) throw Error('Bebida não encontrada!');
			console.log(data.length + ' Bedida(s) encontrada(s)');
			res.json(data)
		});

	};

	api.findByFilter = function (req, res) {

		model.
		find({/*FILTRO*/})
		.populate('_manufacturer')
		.populate('_supplier')
		.populate('_category')
		.exec(function(err, data){
			if(err) throw Error('Bebida não encontrada!');
			console.log(data.length + ' Bedida(s) encontrada(s)');
			res.json(data)
		});
		
	};

	return api;	
};
