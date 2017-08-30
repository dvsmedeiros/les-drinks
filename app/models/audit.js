var mongoose = require('mongoose');

var schema = mongoose.Schema({

	type : {
		type : String,
		required: true 
	},
	model : {
		type : String,
		required : true
	},
	ocurrencyDate : {
		type : Date,
		default: Date.now
	},
	_user: {
		type: mongoose.Schema.Types.ObjectId,
		ref : 'User',
		required: true
	},
	stateBefore : {
		type : Object
	}
		
});

mongoose.model('Audit', schema);