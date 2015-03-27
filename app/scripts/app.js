'use strict';

/**
 * @ngdoc overview
 * @name abvCalculatorApp
 * @description
 * # abvCalculatorApp
 *
 * Main module of the application.
 */
angular
  .module('abvCalculatorApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      // set app to have pretty URLS
			$locationProvider.html5Mode(true);
  })
  .controller('MainController', function() {
		var vm = this;
		vm.og = 1.06;
		vm.abv = 7.77;
		vm.message = 'To Alcohol the cause of and solution to all of life\'s problems!';
	});
