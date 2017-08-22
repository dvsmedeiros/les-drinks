var mongoose = require('mongoose');

var schema = mongoose.Schema({

	companyName: {
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
	} 

});

mongoose.model('Manufacturer', schema);