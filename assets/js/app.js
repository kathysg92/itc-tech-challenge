'use strict';

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
            .when('/main', {
                templateUrl : 'partials/main.html',
                controller : 'PrincipalController'
            })
            .when('/blog', {
                templateUrl : 'partials/blog.html',
                controller : 'BlogController'
            })
            .when('/entry', {
                templateUrl : 'partials/entry.html',
                controller : 'EntryController'
            })
            .when('/login', {
                templateUrl : 'partials/login',
                controller : 'LoginController'
            })
            .otherwise({
                redirectTo : '/main'
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