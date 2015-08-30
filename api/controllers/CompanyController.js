/**
 * CompanyController
 *
 * @description :: Server-side logic for managing companies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'create': function(req, res, next){
		var params = req.params.all();
		params.user = req.session.passport.user; // we add the user that is currently adding the company.
		Company.create(params, function(err, company){
			if (err) return next(err);
			res.status(201);
			res.json(company);
		});
	},
	'getFromUser' : function(req, res, next){
		var params = req.params.all();
		Company.find({ user : params.user}, function(err, companies){
			if(err) return next(err);
			res.status(201);
			return res.json(companies);
		});
	}
};

