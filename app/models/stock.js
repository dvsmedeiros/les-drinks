var mongoose = require('mongoose');

var schema = mongoose.Schema({

	_drink: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'RecordType',
		required: true
	},
	salePrice: {
		type: Number,
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
	records: [
		{
			purchasePrice : {
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
				required: true
			},
			_recordType: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'RecordType',
				required: true
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