module.exports = function (app) {
	
	var api = app.api.category;

	app.get('/category', api.findAll);
};