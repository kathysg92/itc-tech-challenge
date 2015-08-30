/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	isAuth: function(req, res){
        return res.send({
            message: "hi."
        })
    },
    create: function(req, res){
    	var params = req.params.all();

    	User.create(params, function(err, user){
    		if(err) return next(err);

    		res.status(201);
    		res.redirect('/');
    	});
    },
    activeUser : function(req, res){
        if( req.session.passport){
            res.send(req.session.passport.user);
        }
        res.status(400);
    }
};

