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
    "name" : { 
  		type : "string",
  		required : true
  	},
    "website" : { 
  		type : "string"
  	},
    "owner" : { 
  		type : "string",
  	},
    "address" : { 
      type : "string"
    },
    "profile" : { 
  		type : "string",
  	},
    "phone" : { 
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

    "YearOfEstablishment" : { 
  		type : "datetime"
  	},
    "numOfPermanentEmployees" : { 
  		type : "integer"
  	},
    "numOfFemaleEmployees" : { 
  		type : "integer"
  	},
    "businessOwnedbyWomen" : { 
  		type : "integer"
  	},
    "managedandControlledbyWomen" : {
    	type: 'string',
        enum: ['yes', 'no', 'm', 'mm'],
        defaultsTo: 'yes'
    },
    "certifications:" : { 
  		type : "string"
  	},
    "memberof(Intitution/Association) :" : { 
  		type : "string"
  	},
    "description" : { 
  		type : "string"
  	},
  }
};

