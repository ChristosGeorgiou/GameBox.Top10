angular.module('gbtt.controllers')

.controller('SettingsCtrl', function($scope, $config, $state) {
	$scope.Logoff = function() {
		$config.logoff();
		$state.go("login");
	};
});
