(function () {
	'use strict';

	angular.module('app.users', ['ngRoute'] )
		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider
				.when('/users', {
					templateUrl : 'app/users/users.html',
					controller  : 'UsersCtrl as vm'
				})
				.when('/users/:userId', {
					templateUrl : 'app/users/user-details.html',
					controller  : 'UsersCtrl as vm'
				});
		}]);
})();
