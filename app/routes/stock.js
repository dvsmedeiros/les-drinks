module.exports = function (app) {

	var api = app.api.stock;

	app.route('/stock/:id')
	.get(api.findByProcuctId)
	;

	app.route('/stock/record/:id')
	.put(api.saveRecord)
	;
};	