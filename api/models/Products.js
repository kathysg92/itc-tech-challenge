/**
* Products.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
		"category":{ 
	  		model: "Category"
	  	},
		"name": { 
	  		type : "string",
	  		required : true
	  	},
		"description": { 
	  		type : "string"
	  	},
		"country" : { 
	  		type : "string"
	  	},
		"phone": { 
	  		type : "string"
	  	},
		"website": { 
	  		type : "string"
	  	},
		"ownerManager" : { 
	  		type : "string"
	  	},
	  	"email" : { 
	  		type : "string"
	  	},
	  	"company" : {
	  		model: "Company",
	  		required: true
	  	}
	}
};

