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
            .when('/company/:id', {
                templateUrl : 'partials/_companyDetail.html',
                controller : 'CompanyListController'
            })
            .when('/companies', {
                templateUrl : 'partials/company-list.html',
                controller : 'CompanyListController'
            })
            .when('/infographic', {
                templateUrl : 'partials/infographics.html',
                controller : 'InfographicController'
            })
            .when('/products', {
                templateUrl : 'partials/product-list.html',
                controller : 'ProductListController'
            })
            .when('/product/new', {
                templateUrl : 'partials/product-new.html',
                controller : 'ProductController'
            })
            .when('/product/:id', {
                templateUrl : 'partials/_prodDetail.html',
                controller : 'ProductListController'
            })
            .when('/main', {
                templateUrl : 'partials/main.html',
                controller : 'CompanyController'
            })
            .when('/blog', {
                templateUrl : 'partials/blog.html',
                controller : 'BlogController'
            })
            .when('/entry', {
                templateUrl : 'partials/entry.html',
                controller : 'EntryController'
            })
            .when('/entry2', {
                templateUrl : 'partials/entry2.html',
                controller : 'EntryController2'
            })
            .when('/entry3', {
                templateUrl : 'partials/entry3.html',
                controller : 'EntryController3'
            })
            .when('/entry4', {
                templateUrl : 'partials/entry4.html',
                controller : 'EntryController4'
            })

            .when('/login', {
                templateUrl : 'partials/_login.html',
                controller : 'LoginController'
            })
            .when('/story', {
                templateUrl : 'partials/_addStory.html',
                controller : 'StoryController'
            })
            .when('/register', {
                templateUrl : 'partials/register.html',
                // controller : 'LoginController'
            })
            .when('/email', {
                templateUrl : 'partials/_email.html',
                controller : 'EmailController'
            })

            .when('/prodDetail', {
                templateUrl : 'partials/_prodDetail.html',
                controller : 'ProdDetailController'
            })
            .when('/search', {
                templateUrl : 'partials/search.html',
                controller : 'NotificationController'
            })
            .when('/about', {
                templateUrl : 'partials/about.html',
                controller : 'AboutController'
            })
            .when('/notifications', {
                templateUrl : 'partials/notifications.html',
                controller : 'NotificationController'
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