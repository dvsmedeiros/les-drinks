module.exports = function (app) {

	var api = app.api.manufacturer;

	app.get('/manufacturer', api.findAll);
};