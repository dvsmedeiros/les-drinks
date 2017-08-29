module.exports = function (app) {

	var api = app.api.recordType;

	app.get('/recordType', api.findAll);
};