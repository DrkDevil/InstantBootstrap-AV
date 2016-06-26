'use strict';

angular.module('baseApp.index', [
  'ngRoute',
  'index.controllers',
  'index.directives'
])
.run(['$rootScope', '$route', '$location', '$anchorScroll', function($rootScope, $route, $location, $anchorScroll) {
  $rootScope.$on('$routeChangeSuccess', function(newVal, oldVal) {
    if (oldVal !== newVal) {
      document.title = $route.current.title;

      // AnchrScroll to the top of the page on route change
      //$location.hash('top');
      //$anchorScroll();
    }
  });
}])
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', { 
      title: 'InstantBootstrap - Angular Edition', 
      templateUrl: 'main.html', 
      controller: 'IndexCtrl' 
    })
    .when('/about', { 
      title: 'InstantBootstrap - About', 
      templateUrl: 'about.html', 
      controller: 'IndexCtrl' 
    })
	.when('/soon', { 
      title: 'Under Construction', 
      templateUrl: 'soon.html', 
      controller: 'IndexCtrl' 
    })
    .otherwise({ redirectTo: '/' });

  //$locationProvider.html5Mode(true);
}]);