module.exports = function (app) {
	
	var audit = {};

	var mongoose = require('mongoose');
	var model = mongoose.model('Audit');
	
	audit.trail = function(user, type, entity, stateBefore) {

		var trail = {
			_user : user,
			type: type,
			model : entity,
			stateBefore : stateBefore
		};

		console.log(JSON.stringify(trail));

		model
		.create(trail, function(err, trail){
			if(err){
				console.log(error);									
			}
		});

	};

	audit.findAll = function (req, res) {
		
		/*
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
		*/

		model
		.find({})
		.populate('_user')
		.exec(function(err, data){
			if(err) throw Error('Erro ao consultar trilhas de auditoria');
			console.log(data.length + ' Trilha(s) encontrada(s)');
			res.json(data)
		});

	};

	return audit;
};