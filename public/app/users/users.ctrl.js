( function () {
	function UsersCtrl ( apiService, _ ) {
		var self = this;

		self.isDetailMode = false;
		self.currUser     = {};
		self.currUserName = '';

		self.userList = [
			{
				'id'               : 3,
				'company_id'       : 1,
				'account_type'     : 3,
				'first_name'       : 'Joe',
				'last_name'        : 'Smith',
				'username'         : 'joesmith@gmail.com',
				'nickname'         : 'Joe',
				'designation'      : 'Driver',
				'mobile_num'       : '032-889183-890',
				'account_status'   : 1,
				'user_points'      : 0,
				'misc_remarks'     : '',
				'company_name'     : 'Tranzwatch',
				'logged_in_status' : 1,
				'vehicle_id'       : 1,
				'plate_no'         : 'TXYA-1078',
				'system_code'      : 'OAMUQUNA'
			},
			{
				'id': 2,
				'company_id'       : 1,
				'account_type'     : 1,
				'first_name'       : 'Stephen',
				'last_name'        : 'Padilla',
				'username'         : 'stephenpadilla@gmail.com',
				'nickname'         : 'Steph',
				'designation'      : 'Manager',
				'mobile_num'       : '032-928928-1919',
				'account_status'   : 1,
				'user_points'      : 0,
				'misc_remarks'     : '',
				'company_name'     : 'Tranzwatch',
				'logged_in_status' : 0,
				'vehicle_id'       : null,
				'plate_no'         : null,
				'system_code'      : 'OAMUQUNA'
			}
		];

		// Test function to set the view to details
		function viewUserDetails ( userId ) {
			self.isDetailMode = true;
			self.currUser     = _.find( self.userList, { 'id' : userId } );
			self.currUserName = self.currUser.first_name + ' ' + self.currUser.last_name;

			console.log( 'VIEW DETAILS FOR USER: ' + userId );
			console.log( self.currUserName );
		}

		// Test function to set the view to list
		function viewUserList () {
			self.isDetailMode = false;
			self.currUser     = {};
			self.currUserName = '';

			console.log( 'VIEW LIST OF USERS' );
		}

		// Sets the view between list or detail view
		function toggleUserView ( userId ) {
			if ( userId ) {
				console.log( 'VIEW DETAILS FOR USER: ' + userId );
				self.isDetailMode = true;

				getUserDetails( userId );

				return;
			}

			self.isDetailMode = false;
			self.currUser     = {};
			self.currUserName = '';

			console.log( 'VIEW LIST OF USERS' );
		}

		// Handles the getUserDetails response
		function getUserDetailsHandler ( result ) {
			if ( result ) {
				self.currUser     = result.data;
				self.currUserName = result.data.first_name + ' ' + result.data.last_name;

				console.log( self.currUserName );
			}
		}

		// Fetches details for a specific user
		function getUserDetails ( userId ) {
			apiService.tranzGoApiCall.users.getUserDetails( userId ).then( getUserDetailsHandler );
		}

		// Handles the getUsers response
		function getUsersHandler ( result ) {
			if ( result ) {
				self.userList = result.data;
			}
		}

		// Fetches user list
		function getUsers () {
			var data = {
				'limitVal'  : '10',
				'offsetVal' : '0'
			};

			apiService.tranzGoApiCall.users.getUsers( data ).then( getUsersHandler );
		}

		// Test function to call authentication
		function getUserList () {
			var data = {
				'username' : 'stephenpadilla@gmail.com',
				'password' : 'wallpwd'
			};

			apiService.tranzGoApiCall.authenticate( data ).then( function ( res ) {
				console.log( 'AUTHENTICATES!' );
				console.log( res );
			} );
		}

		// Activates the Users controller
		function activate () {
			console.log( 'Users controller activated' );

			// Should call getUsers function here
		}

		activate();

		self.viewUserDetails = viewUserDetails;
		self.viewUserList    = viewUserList;
	}


	angular
		.module('app.users')
		.controller('UsersCtrl', UsersCtrl);

	UsersCtrl.$inject = [ 'apiService', '_' ];
})();
