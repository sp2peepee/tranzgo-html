( function () {
	function DeleteConfirmationModalCtrl ( $uibModalInstance, dataType, dataId, apiService ) {
		var self = this;

		function confirmDelete () {
			$uibModalInstance.close( true );
		}

		function cancelDelete () {
			$uibModalInstance.dismiss();
		}

		self.dataType      = dataType;
		self.confirmDelete = confirmDelete;
		self.cancelDelete  = cancelDelete;
	}


	angular
		.module('app.components')
		.controller('DeleteConfirmationModalCtrl', DeleteConfirmationModalCtrl);

	DeleteConfirmationModalCtrl.$inject = [ '$uibModalInstance', 'dataType', 'dataId', 'apiService' ];
})();
