( function () {
	function UsersCtrl ( $uibModal, apiService ) {
		var self = this;

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

		self.userTypeList = [
			{
				userType : 'Admin'
			},
			{
				userType : 'Coordinator'
			},
			{
				userType : 'Booking Officer'
			},
			{
				userType : 'Driver'
			},
			{
				userType : 'Renter'
			}
		];

		self.userStatusList = [
			{
				userStatus : 'Inactive'
			},
			{
				userStatus : 'Active'
			}
		];

		function deleteUser ( userId ) {
			// TODO: Call delete user API here
		}

		function addUserModal ( userId ) {
			console.log( 'OPEN ADD USER MODAL' );
			var modalInstance = $uibModal.open( {
				'templateUrl'  : '/app/components/user-add-modal/user-add-modal.html',
				'controller'   : 'UserAddModalCtrl',
				'controllerAs' : 'vm'
			} );

			modalInstance.result.then( function ( res ) {
				// TODO: Call Add API
			} );
		}

		function viewDetailsModal ( userId ) {
			console.log( 'OPEN VIEW DETAILS MODAL' );
			var modalInstance = $uibModal.open( {
				'templateUrl'  : '/app/components/user-detail-modal/user-detail-modal.html',
				'controller'   : 'UserDetailModalCtrl',
				'controllerAs' : 'vm',
				'size'         : 'xs',
				'resolve'      : {
					'userId' : function () {
						return userId;
					}
				}
			} );
		}

		function confirmDeleteModal ( userId ) {
			console.log( 'OPEN DELETE MODAL' );
			var modalInstance = $uibModal.open( {
				'templateUrl'  : '/app/components/delete-confirmation-modal/delete-confirmation-modal.html',
				'controller'   : 'DeleteConfirmationModalCtrl',
				'controllerAs' : 'vm',
				'resolve'      : {
					'dataType' : function () {
						return 'User';
					},
					'dataId' : function () {
						return userId;
					}
				}
			} );

			modalInstance.result.then( function () {
				// TODO: Call delete API
			} );
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
			getUserList();
		}

		activate();

		self.confirmDeleteModal = confirmDeleteModal;
		self.viewDetailsModal   = viewDetailsModal;
		self.addUserModal       = addUserModal;
	}


	angular
		.module('app.users')
		.controller('UsersCtrl', UsersCtrl);

	UsersCtrl.$inject = [ '$uibModal', 'apiService' ];
})();
