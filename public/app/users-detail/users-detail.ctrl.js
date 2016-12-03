( function () {
	function UsersDetailCtrl ( $routeParams, $uibModal, apiService, _  ) {
		var self = this;

		self.currUser     = {};
		self.currUserId   = 0;
		self.currUserName = '';
		self.userExists   = false;
		self.editMode     = false;

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
				'company_name'     : 'Tranzwatch Corp.',
				'logged_in_status' : 1,
				'vehicle_id'       : 1,
				'plate_no'         : 'TXYA-1078',
				'system_code'      : 'OAMUQUNA',
				'verified_on'      : '2016-10-04 11:47:00',
				'created_at'       : '2016-10-03 10:31:00',
				'updated_at'       : '2016-10-03 10:31:00'
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
				'account_status'   : 0,
				'user_points'      : 0,
				'misc_remarks'     : '',
				'company_name'     : 'Tranzwatch Corp.',
				'logged_in_status' : 0,
				'vehicle_id'       : null,
				'plate_no'         : null,
				'system_code'      : 'OAMUQUNA',
				'verified_on'      : '2016-10-11 11:47:00',
				'created_at'       : '2016-10-03 10:31:00',
				'updated_at'       : '2016-10-11 17:12:00'
			}
		];

		function disableEditMode () {
			self.editMode = false;
		}

		function saveChanges () {
			// TODO: Call UPDATE API

			disableEditMode();
		}

		function enableEditMode () {
			self.editMode = true;
		}

		function confirmDeleteModal () {
			var modalInstance = $uibModal.open( {
				'templateUrl'  : '/app/components/delete-confirmation-modal/delete-confirmation-modal.html',
				'controller'   : 'DeleteConfirmationModalCtrl',
				'controllerAs' : 'vm',
				'resolve'      : {
					'dataType' : function () {
						return 'User';
					},
					'dataId' : function () {
						return self.currUserId;
					}
				}
			} );

			modalInstance.result.then( function () {
				// TODO: Call delete API
			} );
		}

		// Test function to set the view to details
		function viewUserDetails ( userId ) {
			self.isDetailMode = true;

			self.currUser = _.find( self.userList, { 'id' : parseInt( userId ) } );

			if ( self.currUser ) {
				self.userExists   = true;
				self.currUserName = self.currUser.first_name + ' ' + self.currUser.last_name;
			}
		}

		// Handles the getUserDetails response
		function getUserDetailsHandler ( result ) {
			if ( result ) {
				self.currUser     = result.data;
				self.currUserName = result.data.first_name + ' ' + result.data.last_name;
			}
		}

		// Fetches details for a specific user
		function getUserDetails ( userId ) {
			apiService.tranzGoApiCall.users.getUserDetails( userId ).then( getUserDetailsHandler );
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
			console.log( 'Users-Detail controller activated' );

			if ( $routeParams.userId ) {
				console.log( 'IS DETAILS!' );
				self.currUserId = $routeParams.userId;
				viewUserDetails( self.currUserId );
			}
			// Should call getUsers function here
		}

		activate();

		self.confirmDeleteModal = confirmDeleteModal;
		self.enableEditMode     = enableEditMode;
		self.disableEditMode    = disableEditMode;
		self.saveChanges        = saveChanges;
	}


	angular
		.module('app.usersDetail')
		.controller('UsersDetailCtrl', UsersDetailCtrl);

	UsersDetailCtrl.$inject = [ '$routeParams', '$uibModal', 'apiService', '_' ];
})();
