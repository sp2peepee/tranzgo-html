( function () {
	function LoginCtrl ( $rootScope, $location ) {
		var self = this;

		function checkCredentials() {
			// TODO: Should call login/authenticate API here

			// Temporary mock login
			if ( self.username === 'admin' && self.password === '1234' ) {
				// TODO: Add this to cache so that everytime user refreshes, it will not logout
				$rootScope.authenticated = true;
				$location.path( '/users' );
			}
		}

		// Activates the Users controller
		function activate () {
			console.log( 'Login controller activated' );
		}

		activate();

		self.checkCredentials = checkCredentials;
	}


	angular
		.module('app.login')
		.controller('LoginCtrl', LoginCtrl);

	LoginCtrl.$inject = [ '$rootScope', '$location' ];
})();
