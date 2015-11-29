angular.module("OAuth")

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, $auth, $location, toastr) {
	$ionicModal.fromTemplateUrl('templates/login.html', {
		scope: $scope
	}).then(function (modal) {
		$scope.modal = modal;
	});

	// Triggered in the login modal to close it
	$scope.closeLogin = function () {
		$scope.modal.hide();
	};

	// Open the login modal
	$scope.login = function () {
		$scope.modal.show();
	};

	$scope.logout = function () {
		$auth.logout();
		toastr.info("You are now logged out!");
	};

	$scope.doLogin = function (provider) {
		$auth.authenticate(provider)
			.then(function (response) {
				$auth.setToken(response.code);
				toastr.success("Login Successful!");
				$scope.modal.hide();
			})
			.catch(function (response) {
				$scope.modal.hide();
				toastr.error("Login was not successful!");
			});
	};

	$scope.isAuthenticated = function () {
		return $auth.isAuthenticated();
	};
})

.controller('PlaylistsCtrl', function ($scope) {
	$scope.playlists = [
		{
			title: 'Reggae',
			id: 1
		},
		{
			title: 'Chill',
			id: 2
		},
		{
			title: 'Dubstep',
			id: 3
		},
		{
			title: 'Indie',
			id: 4
		},
		{
			title: 'Rap',
			id: 5
		},
		{
			title: 'Cowbell',
			id: 6
		}
  ];
})

.controller('PlaylistCtrl', function ($scope, $stateParams) {});