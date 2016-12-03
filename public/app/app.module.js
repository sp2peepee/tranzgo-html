( function () {
	'use strict';

	angular.module( 'app', [
		//modules
		'app.core',
		'app.login',
		'app.dashboard',
		'app.home',
		'app.users',
		'app.usersDetail',
		'app.rental',
		'app.rentalDetail',
		'app.components',

		//plugins
		'ui.bootstrap',

		//other AngularJS dependencies
		'ngRoute'
	])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl : 'app/login/login.html',
                controller  : 'LoginCtrl as vm'
            })
            .when('/home', {
                templateUrl : 'app/home/home.html'
            })
            .when('/dashboard', {
                templateUrl : 'app/dashboard/dashboard.html'
            })
			.when('/users', {
				templateUrl : 'app/users/users.html',
				controller  : 'UsersCtrl as vm'
			})
				.when('/users/:userId', {
					templateUrl : 'app/users-detail/users-detail.html',
					controller  : 'UsersDetailCtrl as vm'
				})
			.when('/rental', {
				templateUrl : 'app/rental-item/rental-item.html',
				controller  : 'RentalItemCtrl as vm'
			})
				.when('/rental/:itemId', {
					templateUrl : 'app/rental-item-detail/rental-item-detail.html',
					controller  : 'RentalItemDetailCtrl as vm'
				})
            .otherwise({redirectTo:'/login'});
    }])
	.run( function ( $rootScope, $location ) {
    	// register listener to watch route changes
	    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
	    	if ( !$rootScope.authenticated ) {
	    		$location.path( '/login' );
	    	} 
	    	else if ( $rootScope.authenticated && next.templateUrl == 'app/login/login.html' ) {
	    		$location.path( '/users' );
	    	}
	    } );
	} )
})();
