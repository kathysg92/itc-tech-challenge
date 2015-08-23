'use strict';

/* Services */

techChallenge.factory('Company', ['$templateCache', '$log', '$resource',
        function ($templateCache, $log, $resource) {

            return $resource('/company', {}, {
                get : {method: "GET", isArray: true}
            });
            
        }
    ]);

techChallenge.factory('Card', ['$resource',
        function ($resource) {
			var apiHost = 'https://api.smartcanvas.com/card/v1/cards/:cardId';
			var clientId = 'kMRaR35PmKwZRqtEfznNkQUaiitKr0Ij';
            var clientSecret = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ5WVNyOWlncm1Qa1IiLCJpYXQiOjE0MzgyNjY3OTEsImV4cCI6MTQ2OTgwMzA2Miwic3ViIjoicm9vdEBleGFtcGxlLmNvbSIsInJvb3QiOnRydWUsInRva2VuVHlwZSI6IkFDQ0VTUyIsImVtYWlsIjoicm9vdEBleGFtcGxlLmNvbSJ9.308YvI73sQM3IkCu_iIOQ1h55pAW9nZttG2xOVspdwE';
			
            return $resource(apiHost, {
                cardId : '@id'
            }, {
                get : {
                    method : 'GET',
                    headers : {
                        'x-client-id' : clientId,
                        'x-access-token' : clientSecret
                    }
                },
                query : {
                    method : 'GET',
                    headers : {
                        'x-client-id' : clientId,
                        'x-access-token' : clientSecret
                    }
                },
                create : {
                    method : 'POST',
                    headers : {
                        'x-client-id' : clientId,
                        'x-access-token' : clientSecret
                    }
                },
                update : {
                    method : 'PUT',
                    headers : {
                        'x-client-id' : clientId,
                        'x-access-token' : clientSecret
                    },
					transformRequest: function(data) {
						if (data) {
							data.author = undefined;
							data.permission = undefined;
							data = angular.toJson(data);
						}
						return data;
					}
                }
            });
        }
    ]);
