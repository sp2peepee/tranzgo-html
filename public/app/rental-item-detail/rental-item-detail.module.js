(function () {
	'use strict';

	angular.module('app.rentalDetail', ['ngRoute'] )
		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider
				.when('/rental/:itemId', {
					templateUrl : 'app/rental-item-detail/rental-item-detail.html',
					controller  : 'RentalItemDetailCtrl as vm'
				});
		}]);
})();
