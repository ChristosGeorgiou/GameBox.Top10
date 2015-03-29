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
		templateUrl: "views/general/start.html",
		controller: 'StartCtrl',
	})

	.state('login', {
		url: "/login",
		templateUrl: "views/general/login.html",
		controller: 'LoginCtrl',
	})

	.state('app', {
		url: "/app",
		abstract: true,
		templateUrl: "views/_layouts/empty.html",
		controller: 'AppCtrl',
	})

	.state('app.main', {
		url: "/main",
		views: {
			'content': {
				templateUrl: "views/notes/main.html",
				controller: "MainCtrl",
			}
		}
	})

	.state('app.settings', {
		url: "/settings",
		views: {
			'content': {
				templateUrl: "views/settings/list.html",
				controller: "SettingsCtrl"
			}
		}
	});

	// if none of the above states are matched, use this as the fallback

	$urlRouterProvider.otherwise('/start');
});
