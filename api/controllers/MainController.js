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
	}
};

