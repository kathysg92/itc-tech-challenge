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

    }
};

