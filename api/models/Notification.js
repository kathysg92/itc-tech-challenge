/**
* Notification.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	"to" : { 
  		type : "string",
  		required: true
  	},
  	"from" : { 
  		type : "string",
  		required: true
  	},
  	"message" : { 
  		type : "string",
  		required: true
  	},
  	"product" : { 
  		type : "string",
  		required: true
  	},
  	"acknowledged" : { 
  		type : "boolean"
  	},
  }
};

