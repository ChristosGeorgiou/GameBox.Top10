angular.module('gbtt.controllers')

.controller('StartCtrl', function($scope, $config, $timeout, $state, $ionicHistory, $db) {

	$ionicHistory.clearHistory();

	$scope.initApp = function() {

		$scope.loading = true;
		$scope.status = "Loading<br>Please Wait...";
		$timeout(function(){
			$state.go('app.menu');
		},2000);

	};

	$scope.initApp();

});
