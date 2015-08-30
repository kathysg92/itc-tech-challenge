module.exports = function(req, res, next) {
   if (req.isAuthenticated()) {
   		req.session.flash = {
   			err: "User not authenticated!"
   		}
        return next();
    }
    else{
    	res.status(400)
    	return res.json({"error" : "You need to login!"})
        // return res.redirect('/login');
    }
};
