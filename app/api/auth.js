module.exports = function(app){
	
	var mongoose = require('mongoose');
	var jwt = require('jsonwebtoken');

	var api = {};
	var model = mongoose.model('User');

	api.authenticate = function (req, res) {
		
		model
		.findOne({login: req.body.login, password: req.body.password})
		.exec(function(err, user){
			if(err){
				console.log('Login e senha inválidos');
				res.sendStatus(401);
			}
			if(!user){				
				console.log('Login e senha inválidos');
				res.sendStatus(401);
			} else {

				var token = jwt.sign({login: user.login}, app.get('secret'), {expiresIn: 84600}); 
				console.log(token);
				console.log('token criado e sendo enviado no header');
				
				res.set('x-access-token', token);
				res.json({_id: user._id, login: user.login});
			}
		});
	};

	api.verifyToken = function(req, res, next){
		var token = req.headers['x-access-token'];

		if(token){
			console.log('verificando token');

			jwt.verify(token, app.get('secret'), function(error, decoded){
				if(error){
					console.log('token inválido');
					res.sendStatus(401);
				}
				req.user = decoded;
				next();
			});	
		} else {
			console.log('Token nao enviado');
			res.sendStatus(401);
		}		
	};  

	return api;
};



