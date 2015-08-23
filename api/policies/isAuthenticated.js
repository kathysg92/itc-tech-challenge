module.exports = function(req, res, next) {
   if (req.isAuthenticated()) {
   		req.session.flash = {
   			err: "User not authenticated!"
   		}
        return next();
    }
    else{
        return res.redirect('/login');
    }
};
