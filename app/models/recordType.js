var mongoose = require('mongoose');

var schema = mongoose.Schema({

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

mongoose.model('Type', schema);