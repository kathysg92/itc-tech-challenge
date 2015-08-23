/**
* Company.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	"logo" : { 
  		type : "string",
  		required : true
  	},
    "company name" : { 
  		type : "string",
  		required : true
  	},
    "website" : { 
  		type : "string"
  	},
    "profile" : { 
  		type : "string",
  	},
    "url" : { 
  		type : "string"
  	},
    "qrURL" : { 
  		type : "string"
  	},
    "role" : { 
  		type : "string"
  	},
    "name" : { 
  		type : "string",
  		required : true
  	},
    "country" : { 
  		type : "string",
  		required : true
  	},
    "YearofEstablishment" : { 
  		type : "datetime"
  	},
    "#ofPermanentEmployees" : { 
  		type : "integer"
  	},
    "#ofFemaleEmployees" : { 
  		type : "integer"
  	},
    "%ofthebusinessownedbyWomen" : { 
  		type : "integer"
  	},
    "ManagedandControlledbyWomen" : {
    	type: 'string',
        enum: ['yes', 'no', 'm', 'mm'],
        defaultsTo: 'yes'
    },
    "Certifications:" : { 
  		type : "string"
  	},
    "Memberof(Intitution/Association) :" : { 
  		type : "string"
  	},
    "description" : { 
  		type : "string"
  	},
  }
};

