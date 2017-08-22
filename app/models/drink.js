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
	igredients: [
		{
			description: {
				type: String,
				required: true
			}
		}
	],
	manufacturer: {
		_id: {
			type: mongoose.Schema.Types.ObjectId,
			required: true
		}
	},
	fabricationDate: {
		type: Date,
		require: true
	},
	expiryDate: {
		type: Date,
		required: true
	},
	supplier: {
		_id: {
			type: mongoose.Schema.Types.ObjectId,
			required: true
		}
	},
	category: {
		_id: {
			type: mongoose.Schema.Types.ObjectId,
			required: true
		}
	},
	active: {
		type: Boolean,
		required: true
	}
	 
});

mongoose.model('Drink', schema);