var mongoose = require('mongoose');

var schema = mongoose.Schema({

	name: {
		type: String,
		required: true
	},
	code: {
		type: String, 
		required: true
	},
	description: {
		type: String,
		required: true
	},
	active: {
		type: Boolean,
		default: true
	},
	expiryDate: {
		type: Date,
		required: true
	}
	 
});

mongoose.model('Category', schema);
