/**
 * application.js
 *
 * @copyright Copyright 2014
 * @author    Christian Blank
 */


//application module
var app = angular.module("application", [
	'ngRoute',
	'ui.bootstrap',
	'ngAnimate'
]);


//global application configuration
app.config(['$routeProvider', function($routeProvider){

		//global routing setup
		$routeProvider
		//home
		.when('/', {
			templateUrl : 'templates/home/home.html',
			controller  : 'homeCtrl'
		})
		.when('/imprint', {
			templateUrl : 'templates/imprint/imprint.html',
			controller  : 'imprintCtrl'
		})
		//if route not found
		.otherwise({redirectTo: '/'});

}]);


app.run(function($rootScope) {

    $rootScope.setCurrentPage = function(page) {
        $rootScope.currentPage = page;
        return $rootScope.currentPage;
    };

});


