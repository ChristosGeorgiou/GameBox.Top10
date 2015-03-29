angular.module('gbtt.controllers')

.controller('AppCtrl', function($scope, $config, $state) {

	$config.validate(["config", "user"], function() {
		$state.go('start');
	});

});
