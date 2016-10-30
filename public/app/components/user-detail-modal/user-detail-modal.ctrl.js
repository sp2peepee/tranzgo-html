( function () {
	function UserDetailModalCtrl ( $uibModalInstance, userId ) {
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

		function closeModal () {
			console.log( 'CLOSE MODAL' );
			$uibModalInstance.dismiss();
		}

		function getUserDetails () {
			self.currUser = _.find( self.userList, { 'id' : parseInt( userId ) } );
		}

		function activate () {
			getUserDetails();
		}

		activate();

		self.closeModal = closeModal;
	}


	angular
		.module('app.components')
		.controller('UserDetailModalCtrl', UserDetailModalCtrl);

	UserDetailModalCtrl.$inject = [ '$uibModalInstance', 'userId' ];
})();
