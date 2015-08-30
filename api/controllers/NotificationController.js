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
		User.find({ id: params.user}, function(err, user){
			console.log(user.id)
			Notification.find({ "to.id": user.id}).populateAll().exec(function(e,r ){
				if(e) next(e);
				res.status(201)
				return res.json(r)
			});;
		})
	},
	awknowledge : function(req, res, next){
		var params = req.params.all();
		Notification.findOne({id: params.notification}).exec(function(err, notification){
			console.log(notification)

			notification.awknowledge = true;
			notification.save(function(err){
				if(err){
					res.status(400);
					return res.json({"err" : "Problem saving the notification!"});
				}else{
					res.status(200);
					return res.json(notification)
				}
			});
		});


	}
};

