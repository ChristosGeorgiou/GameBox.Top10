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

    .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "views/_layouts/empty.html"
  })

  .state('app.start', {
    url: "/start",
    views: {
      'content': {
        templateUrl: "views/general/start.html",
        controller: "StartCtrl",
      }
    }
  })

  .state('app.menu', {
    url: "/menu",
    views: {
      'content': {
        templateUrl: "views/general/menu.html",
        controller: 'MenuCtrl',
      }
    }
  })

  .state('app.settings', {
    url: "/settings",
    views: {
      'content': {
        templateUrl: "views/general/settings.html",
        controller: 'SettingsCtrl',
      }
    }
  })

  .state('game', {
    url: "/game",
    abstract: true,
    templateUrl: "views/_layouts/general.html"
  })

  .state('game.settings', {
    url: "/settings",
    views: {
      'content': {
        templateUrl: "views/game/settings.html",
        controller: "GameCtrl",
      }
    }
  })

  .state('game.card', {
    url: "/card",
    views: {
      'content': {
        templateUrl: "views/game/card.html",
        controller: 'CardCtrl',
      }
    }
  });

  // if none of the above states are matched, use this as the fallback

  $urlRouterProvider.otherwise('/app/start');
})

.controller('AppCtrl', function($scope) {

})
