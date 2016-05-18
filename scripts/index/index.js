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
      title: 'BaseApp - Index', 
      templateUrl: 'main.html', 
      controller: 'IndexCtrl' 
    })
    .when('/about', { 
      title: 'BaseApp - About', 
      templateUrl: 'about.html', 
      controller: 'IndexCtrl' 
    })
	.when('/template-1', { 
      title: 'BaseApp - About', 
      templateUrl: '/bs-templates/grids.html', 
      controller: 'IndexCtrl' 
    })
    .otherwise({ redirectTo: '/' });

  //$locationProvider.html5Mode(true);
}]);