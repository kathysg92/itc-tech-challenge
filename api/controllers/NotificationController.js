/**
 * NotificationController
 *
 * @description :: Server-side logic for managing notifications
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getUserNotifications : function(req, res, next){
		var params = req.params.all();
		if(!params["user"]){
			res.status(400);
			return res.json({"error": "No user specified"})
		}
		Notification.find({ to: params.user}, function(err, notifications){
			if (err) return next(err);
			res.status(201);
			return res.json(notifications);
		})
	}
};

