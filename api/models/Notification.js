/**
* Notification.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	"to" : { 
  		model : "user",
  		required: true
  	},
  	"from" : { 
  		model : "user",
  		required: true
  	},
  	"message" : { 
  		type : "string",
  		required: true
  	},
  	"product" : { 
  		model : "products",
  		required: true
  	},
  	"acknowledged" : { 
  		type : "boolean"
  	},
  }
};

