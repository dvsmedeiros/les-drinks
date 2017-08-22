module.exports = function (app) {
	
	var api = app.api.auth;

	app.post('/authenticate', api.authenticate);
	app.use('/*', api.verifyToken);

};