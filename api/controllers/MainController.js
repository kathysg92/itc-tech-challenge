/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res){
		if(req.isAuthenticated()){
			req.session.auth = true;
		}else{
			req.session.auth = undefined;
		}		

		return res.view('index.mustache');
	},
	search: function(req, res){
		var searchTerm = req.param('search-text');
		var ps = Products.find( { name : { "like" : searchTerm} }, function(err, resp){
			return res.view('search-result.mustache',{
				"search-items": resp
			});
		});
	}
};

