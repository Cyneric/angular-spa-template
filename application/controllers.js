/**
 * controllers.js
 *
 * @copyright Copyright 2014
 * @author    Christian Blank
 */


//home controller
app.controller('homeCtrl', ['$scope', '$rootScope', function($scope, $rootScope){

	$rootScope.setCurrentPage('home');

}]);


//home controller
app.controller('imprintCtrl', ['$scope', '$rootScope', function($scope, $rootScope){

	$rootScope.setCurrentPage('imprint');

}]);