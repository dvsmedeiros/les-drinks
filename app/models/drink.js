var mongoose = require('mongoose');

var schema = mongoose.Schema({

	alcoholContent: {
		type: Number
	},
	name: {
		type: String,
		required: true
	},
	code:{
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	salePrice: {
		type: Number,
		required: true
	},
	igredients: [
		{
			description: {
				type: String,
				required: true
			}
		}
	],
	_manufacturer: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Manufacturer',
		required: true
	},
	_supplier: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Supplier',
		required: true
	},
	_category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category',
		required: true
	},
	active: {
		type: Boolean,
		required: true
	}
	 
});

mongoose.model('Drink', schema);