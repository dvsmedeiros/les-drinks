var mongoose = require('mongoose');

var schema = mongoose.Schema({

	_drink: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Drink',
		required: true
	},
	min: {
		type: Number,
		required: true
	},
	max: {
		type: Number,
		required: true
	},
	record: [
		{
			purchasePrice : {
				type: Number,
				required: true
			},
			salePrice : {
				type: Number,
				required: true
			},
			volume : {
				type: Number,
				required: true
			},
			fabricationDate : {
				type: Date,
				required: true
			},
			expiryDate : {
				type: Date,
				required: true
			},
			insertionDate : {
				type: Date,
				default: Date.now
			},
			_recordType: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Type'
			},
			_user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
				required: true
			}
		}
	],
	 
});

mongoose.model('Stock', schema);