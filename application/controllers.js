/**
 * controllers.js
 *
 * @copyright Copyright 2014
 * @author    Christian Blank
 */


//home controller
app.controller('homeCtrl', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope){
	
	$rootScope.setCurrentPage('home');
	
	$scope.data = {};
	
	function pointit(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}

	$scope.go = function (path) {
		$location.path(path);
	};
	
}]);