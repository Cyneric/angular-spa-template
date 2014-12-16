/**
 * controllers.js
 *
 * @copyright Copyright 2014
 * @author    Christian Blank
 */


//home controller
app.controller('homeCtrl', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope){

	$rootScope.setCurrentPage('home');

	$scope.go = function (path) {
		$location.path(path);
	};

}]);