module.exports = function (app) {
	
	var activities = {};

	activities.validateExpiryDateByCategory = function(model) {

		var limit = model.drink._category.limit;
		var expiryDate = new Date(model.record.expiryDate);
		var now = new Date();
		var dateLimit = addDays(now, limit); 
		
		var res = {
			hasError : false
		}
		
		if(expiryDate > dateLimit){				
			res = {
				hasError : true,
				message: 'A validade para a categoria ' 
				+ model.drink._category.name 
				+ ' não deve ser superior a ' + dateToString(dateLimit)
			};
			return res;
		}
		return res;
	}

	var addDays = function(date, days){
		var result = new Date(date);
  		result.setDate(result.getDate() + days);
  		return result;
	}

	var dateToString = function(date){
		var m = new Date(date);
		return   "" + m.getUTCDate() + "/" + (m.getUTCMonth()+1) + "/" + m.getUTCFullYear();
	}

	return activities;
}