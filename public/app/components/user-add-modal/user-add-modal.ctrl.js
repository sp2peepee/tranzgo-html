( function () {
	function UserAddModalCtrl ( $uibModalInstance ) {
		var self = this;

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
			$uibModalInstance.close( self.userModel )
		}

		function dismissModal () {
			$uibModalInstance.dismiss();
		}

		function activate () {
			// TODO: Add something here
		}

		activate();

		self.dismissModal = dismissModal;
		self.submitUser   = submitUser;
	}


	angular
		.module('app.components')
		.controller('UserAddModalCtrl', UserAddModalCtrl);

	UserAddModalCtrl.$inject = [ '$uibModalInstance' ];
})();
