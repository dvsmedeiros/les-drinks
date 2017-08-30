module.exports = function (app) {

	var api = app.api.audit;

	app.route('/audit')
	.get(api.findAll)
	;
	
};