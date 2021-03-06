angular.module('OAuth', ['ionic', "satellizer", "toastr"])

.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function ($stateProvider, $urlRouterProvider, $authProvider) {
	$authProvider.facebook({
		clientId: '956479351086572',
		url: null
	});

	$stateProvider
		.state('app', {
			url: '/app',
			abstract: true,
			templateUrl: 'templates/menu.html',
			controller: 'AppCtrl'
		})
		.state('app.playlists', {
			url: '/playlists',
			views: {
				'menuContent': {
					templateUrl: 'templates/playlists.html',
					controller: 'PlaylistsCtrl'
				}
			}
		})
		.state('app.single', {
			url: '/playlists/:playlistId',
			views: {
				'menuContent': {
					templateUrl: 'templates/playlist.html',
					controller: 'PlaylistCtrl'
				}
			}
		});

	$urlRouterProvider.otherwise('/app/playlists');
});