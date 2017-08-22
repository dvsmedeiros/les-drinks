module.exports = function (app) {

	var api = app.api.supplier;

	app.get('/supplier', api.findAll);
};