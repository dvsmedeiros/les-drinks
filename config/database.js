module.exports = function(uri){

	var mongoose = require('mongoose');

	mongoose.connect('mongodb://' + uri , {
	  useMongoClient: true
	});

	mongoose.connection.on('connected', function () {
		console.log('Connected at mongodb');
	});

	mongoose.connection.on('error', function(error){
		console.log('Connction error' + error);
	});

	mongoose.connection.on('disconnected', function(error){
		console.log('Disconnected from mongodb' + error);
	});


	process.on('SIGINT', function(){
		mongoose.connection.close(function(){
			console.log('Connection closed by application');
			process.exit(0);
		});
	});
};

