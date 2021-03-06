	module.exports = function (app) {
	
	var mongoose = require('mongoose');

	var api = {};
	var drink = mongoose.model('Drink');
	var stock = mongoose.model('Stock');
	
	var drinkRules = app.controllers.drink;
	var audit = app.api.audit;

	api.save = function (req, res) {
		
		var _user = req.body.stock.record[0]._user;
		
		var model = {
			drink : req.body.product,
			record : req.body.stock.record[0]
		}

		var result = drinkRules.validateExpiryDateByCategory(model);

		if(result.hasError){
			res.status(500).json(result);
			return;
		}

		req.body.product._category = {_id : req.body.product._category._id };

		drink
		.create(req.body.product, function(err, product){
			if(err){
				console.log(error);
				res.status(500).json(error);
			}
			
			//audit.trail(_user, 'INSERT', 'Drink', null, req.body.product);
			audit.trail(_user, 'INSERT', 'Drink', null);


			req.body.stock._drink = product._id;
			req.body.stock.record[0].salePrice = 0.0;
			
			stock
			.create(req.body.stock, function(err, stock){
				if(err){
					console.log(error);					
					res.status(500).json(error);
				}
			});

			//audit.trail(_user, 'INSERT', 'Stock', null, req.body.stock);
			audit.trail(_user, 'INSERT', 'Stock', null);

		});
		
		res.json(req.body);	
		
	};

	api.update = function(req, res){

		var _user = req.query.userId;

		drink
		.findByIdAndUpdate(req.params.id, req.body)
		.exec(function(err, drink){
			if(err){
				console.log(error);
				res.status(500).json(error);
			}
			
			/*
			req.body._manufacturer = req.body._manufacturer._id;
			req.body._supplier = req.body._supplier._id;
			req.body._category = req.body._category._id;
			*/

			audit.trail(_user, 'UPDATE', 'Drink', drink);
			res.json(drink);
		});	
	};

	api.removeById = function(req, res){

		var _user = req.query.userId;
		
		var filter =  {
			_id: req.params.id
		};

		drink
		.remove(filter)
		.exec(function(err){
			if(err){
				console.log(error);
				res.status(500).json(error);
			}
			audit.trail(_user, 'DELETE', 'Drink', null);
			res.sendStatus(204);
		});
	
	};

	api.findById = function (req, res) {	
		
		drink
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
		
		var filter = {};

		if(req.query._category){
			filter._category =  req.query._category;
		}

		if(req.query._supplier){
			filter._supplier = req.query._supplier;
		}

		if(req.query.initial && req.query.final){
			filter.salePrice = {			
				"$gte" : req.query.initial,
				"$lt" : req.query.final 	
			} 
		} else if(req.query.initial && !req.query.final) {
			filter.salePrice = {			
				"$gte" : req.query.initial,
				"$lt" : Number.MAX_VALUE 	
			} 
		} else if(!req.query.initial && req.query.final) {
			filter.salePrice = {			
				"$gte" : Number.MIN_VALUE,
				"$lt" : req.query.final 	
			} 
		} 

		console.log('FILTER: ' + JSON.stringify(filter));

		drink
		.find(filter)
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
