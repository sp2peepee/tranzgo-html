( function () {
	function UserEditModalCtrl ( $uibModalInstance, userDetails ) {
		var self = this;

		self.userModel = userDetails || [];

		self.companyList = [
				'Tranzwatch Corp.',
				'Company B',
				'Business C',
				'Employer D',
				'Global Zeal Inc.'
		];

		self.acctTypeList = [
			'Admin',
			'Coordinator',
			'Booking Officer',
			'Driver',
			'Renter'
		];

		function submitUser () {
			$uibModalInstance.close( self.userModel );
		}

		function closeModal () {
			$uibModalInstance.dismiss();
		}

		function getUserDetails () {
			self.currUser = _.find( self.userList, { 'id' : parseInt( userId ) } );
		}

		function activate () {
			// TODO: Add something here
		}

		activate();

		self.closeModal = closeModal;
		self.submitUser = submitUser;
	}


	angular
		.module('app.components')
		.controller('UserEditModalCtrl', UserEditModalCtrl);

	UserEditModalCtrl.$inject = [ '$uibModalInstance', 'userDetails' ];
})();
