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

		function getRentalItems ( data ) {
			// TODO : Call API for retrieving rental item list
		}

		function getRentalItemDetails ( itemId ) {
			// TODO : Call API for retrieving rental item details
		}

		var service = {
			'tranzGoApiCall' : {
				'authenticate'   : authenticate,

				'users' : {
					'getUsers'       : getUsers,
					'getUserDetails' : getUserDetails
				},

				'rentalItems' : {
					'getRentalItems'       : getRentalItems,
					'getRentalItemDetails' : getRentalItemDetails
				}
			}
		};

		return service;
	}

	apiService.$inject = [ '$http' ];

	angular
		.module( 'app.core' )
		.factory( 'apiService', apiService );
} )();
