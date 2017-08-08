module.exports = function(uri){

	var mongoose = require('mongoose');

	mongoose.connect('mongodb://' + uri , {
	  useMongoClient: true
	});

	mongoose.connection.on('connected', function () {
		console.log('Conectado ao mongodb');
	});

	mongoose.connection.on('error', function(error){
		console.log('Erro na conexão' + error);
	});

	mongoose.connection.on('disconnected', function(error){
		console.log('Desconectado do mongodb' + error);
	});


	process.on('SIGINT', function(){
		mongoose.connection.close(function(){
			console.log('Conexão fechada pelo término da aplicação');
			process.exit(0);
		});
	});
};

