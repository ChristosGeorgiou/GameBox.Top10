angular.module('gbtt.controllers')

.controller('StartCtrl', function($scope, $config, $timeout, $state, $ionicHistory, $db) {

	$ionicHistory.clearHistory();

	$scope.initApp = function() {

		$scope.loading = true;
		$scope.status = "Loading<br>Please Wait...";
		$timeout(function(){
			$state.go('menu');
		},2000);
		// //####
		// $scope.status = "FORCEINIT";
		// $db.delete("_settings");
		// $db.delete("_user");
		// //####
		//
		// $scope.loading = true;
		// $scope.status = "Loading...";
		//
		// if (!$config.settings) {
		// 	$scope.status = "Loading Settings<br>Please wait...";
		// 	$config.setup($scope).then(function() {
		// 		$state.go('main');
		// 	}, function(reason) {
		// 		$scope.loading = false;
		// 		$scope.error = reason.msg;
		// 		$scope.info = reason.info;
		// 	});
		// }

	};

	$scope.initApp();

});
