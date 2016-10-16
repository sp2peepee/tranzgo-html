(function () {
	'use strict';

	angular.module('app.usersDetail', ['ngRoute'] )
		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider
				.when('/users/:userId', {
					templateUrl : 'app/users-detail/users-detail.html',
					controller  : 'UsersDetailCtrl as vm'
				});
		}]);
})();
