angular.module('gbtt.controllers', [])
angular.module('gbtt.services', [])
angular.module('gbtt', ['ionic', 'gbtt.controllers', 'gbtt.services'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if (window.cordova && window.cordova.plugins.Keyboard) {
			window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			window.StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

		.state('start', {
		url: "/start",
		templateUrl: "views/start.html",
		controller: 'StartCtrl',
	})

	.state('menu', {
		url: "/menu",
		templateUrl: "views/menu.html",
		controller: 'MenuCtrl',
	})

	.state('app.settings', {
		url: "/settings",
		views: {
			'content': {
				templateUrl: "views/settings.html",
				controller: "SettingsCtrl"
			}
		}
	});

	// if none of the above states are matched, use this as the fallback

	$urlRouterProvider.otherwise('/start');
});
