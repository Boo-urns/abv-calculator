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
  .controller('MainController', function($scope) {
		var vm = this;
		vm.reading = {}; // stores og, fg, abv

		vm.message = 'To Alcohol the cause of and solution to all of life\'s problems!';

		vm.abvFormula = function(readings) {
			//  (  ( 1.05  x  ( OG – FG )  )  / FG  )  / 0.79  x  100 = % ABV
			return (( 1.05 * ( readings.og - readings.fg )) / readings.fg) / 0.79 * 100;
		}
		
		vm.calculateABV = function() {
			console.log(this.reading);
			if(this.reading.og !== undefined && this.reading.fg !== undefined) {
				this.reading.abv = this.abvFormula(this.reading).toFixed(2);
				
			}
		}

		

	});
