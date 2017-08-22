module.exports = function (app) {

	var api = app.api.drink;

	app.route('/drink')
	.post(api.save)
	.get(api.findAll)
	;

	app.route('/drink/:id')
	.get(api.findById)
	;

};