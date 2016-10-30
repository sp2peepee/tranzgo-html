( function () {
	function UserAddModalCtrl ( $uibModalInstance ) {
		var self = this;

		function closeModal () {
			console.log( 'CLOSE MODAL' );
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
	}


	angular
		.module('app.components')
		.controller('UserAddModalCtrl', UserAddModalCtrl);

	UserAddModalCtrl.$inject = [ '$uibModalInstance' ];
})();
