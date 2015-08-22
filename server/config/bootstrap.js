/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

	// It's very important to trigger this callback method when you are finished
	// with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
	cb();
	module.exports.http = {
		customMiddleware: function(app){
	        var path = require('path'),
	            express = require('../node_modules/sails/node_modules/express');
	        app.use('/assets/partials', express.static( path.normalize(__dirname + '/../partials') ) );
	        // app.use('/user', express.static( path.normalize(__dirname + '/../user') ) );
    	}
	}
};
