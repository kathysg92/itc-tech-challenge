'use strict';

/* App Module */
var techChallenge = angular.module('techChallenge', [
            'ngResource',
            'ngRoute',
            'ngAnimate',
            'ngMaterial',
            'ngAria',
            'ui.date'
        ]);

techChallenge
.config(['$logProvider', '$routeProvider', '$mdThemingProvider',
        function ($logProvider, $routeProvider, $mdThemingProvider) {
            $logProvider.debugEnabled(true);
            $routeProvider
            .when('/company/new', {
                templateUrl : 'partials/company.html',
                controller : 'CompanyController'
                })
            .when('/company/:id/edit', {
                templateUrl : 'partials/company.html',
                controller : 'CompanyController'
            })
            .when('/companies', {
                templateUrl : 'partials/company-list.html',
                controller : 'CompanyListController'
            })
            .when('/principal', {
                templateUrl : 'partials/principal.html',
                controller : 'PrincipalController'
            })
            .otherwise({
                redirectTo : '/principal'
            });			
            $mdThemingProvider.theme('default').primaryPalette('blue');
        }
    ]);

techChallenge
.directive('loadImage', function($log) {
        return {
            restrict: 'A',
            link: function(scope, element) {
				element.bind('load', function() {
					scope.validImage = true;
					$log.debug('Image successfully loaded.');
				});
				element.bind('error', function(){
					scope.validImage = false;
					$log.debug('No image loaded.');
				});
            }
        };
    })