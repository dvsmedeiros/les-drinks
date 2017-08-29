module.exports = function (app) {
	
	var mongoose = require('mongoose');

	var api = {};
	var stock = mongoose.model('Stock');
  var drinkRules = app.controllers.drink;

  api.saveRecord = function (req, res) {
    
    var model = {
      drink : req.body.drink,
      record : req.body.record
    }

    var result = drinkRules.validateExpiryDateByCategory(model);

    if(result.hasError){
      res.status(500).json(result);
      return;
    }

    stock
    .findByIdAndUpdate(req.params.id, 
      {
        "$push" : {
          "record" : req.body.record
        }
      }
    )
    .exec(function(err, record){
      if(err){
        console.log(error);
        res.status(500).json(error);
      }
      res.json(record);
    });

  };

	api.findByProcuctId = function (req, res) {	
		
		stock
		.findOne({_drink: req.params.id})
		.populate(
		{
  			path: '_drink', 
  			model: 'Drink',
  			populate: {
    			path: '_manufacturer',
    			model: 'Manufacturer'
    		}
  		})
  		.populate(
		{
  			path: '_drink', 
  			model: 'Drink',
  			populate: {
    			path: '_supplier',
    			model: 'Supplier'
    		}
  		})
  		.populate(
		{
  			path: '_drink', 
  			model: 'Drink',
  			populate: {
    			path: '_category',
    			model: 'Category'
    		}
  		})
  		.populate('record._user')
  		.populate('record._recordType')
		.exec(function(err, data){
			if(err) throw Error('Estoque não encontrado!');
			res.json(data);	
		});
	};

	return api;	
};
