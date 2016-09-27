( function () {
	'use strict';

	function apiService ( $http ) {

		function authenticate ( data ) {
			if ( !data ) {
				console.log( 'NO AUTH DATA PASSED!' );
				var data = {
					'username' : 'stephenpadilla@gmail.com',
					'password' : 'wallpwd'
				};
			}

			return $http.post( 'http://dev.tranzwatch.com/auth', data );
		}

		var service = {
			'tranzGoApiCall' : {
				'authenticate' : authenticate
			}
		};

		return service;
	}

	apiService.$inject = [ '$http' ];

	angular
		.module( 'app.core' )
		.factory( 'apiService', apiService );
} )();