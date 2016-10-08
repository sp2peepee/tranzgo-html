( function () {
	'use strict';

	function apiService ( $http ) {
		var baseURL   = 'http://dev.tranzwatch.com/';
		var authToken = ''

		function authenticate ( data ) {
			if ( !data ) {
				console.log( 'NO AUTH DATA PASSED!' );
				var data = {
					'username' : 'stephenpadilla@gmail.com',
					'password' : 'wallpwd'
				};
			}

			return $http.post( baseURL + 'auth', data );
		}

		function getUsers ( data ) {
			return $http.get( baseURL + 'api/v1/user?page[limit]=' + data.limitVal + '&page[offset]=' + data.offsetVal + '&token=' + authToken );
		}

		function getUserDetails ( userId ) {
			return $http.get( baseURL + 'api/v1/user/' + userId + '?token=' + authToken );
		}

		var service = {
			'tranzGoApiCall' : {
				'authenticate'   : authenticate,
				'getUsers'       : getUsers,
				'getUserDetails' : getUserDetails
			}
		};

		return service;
	}

	apiService.$inject = [ '$http' ];

	angular
		.module( 'app.core' )
		.factory( 'apiService', apiService );
} )();
