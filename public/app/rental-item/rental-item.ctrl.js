( function () {
	function RentalItemCtrl ( $uibModal, apiService, _ ) {
		var self = this;

		self.itemList = [
			{
				'id'           : 123,
				'company_id'   : 123,
				'plate_no'     : 'ABC-123',
				'item_type_id' : 123,
				'transmission' : 'Manual',
				'make'         : 'Nissan',
				'model'        : 'Almera',
				'year_model'   : '2016',
				'max_load'     : 5,
				'times_rented' : 0,
				'is_available' : 0,
				'status'       : 1,
				'image'        : '',
				'created_at'   : '',
				'updated_at'   : ''
			},
			{
				'id'           : 456,
				'company_id'   : 456,
				'plate_no'     : 'EFG-456',
				'item_type_id' : 456,
				'transmission' : 'Automatic',
				'make'         : 'Toyota',
				'model'        : 'FJ Cruiser',
				'year_model'   : '2015',
				'max_load'     : 6,
				'times_rented' : 0,
				'is_available' : 1,
				'status'       : 0,
				'image'        : '',
				'created_at'   : '',
				'updated_at'   : ''
			}
		];

		function deleteRentalItem ( itemId ) {
			// TODO: Call delete rental item API here
		}

		function confirmDeleteModal ( itemId ) {
			var modalInstance = $uibModal.open( {
				'templateUrl'  : '/app/components/delete-confirmation-modal/delete-confirmation-modal.html',
				'controller'   : 'DeleteConfirmationModalCtrl',
				'controllerAs' : 'vm',
				'resolve'      : {
					'dataType' : function () {
						return 'Rental Item';
					},
					'dataId' : function () {
						return self.currItemId;
					}
				}
			} );

			modalInstance.result.then( function () {
				// TODO: Call delete API
			} );
		}

		// Convert status codes to words
		function convertStatusCodes ( status ) {
			if ( status ) {
				return 'Yes';
			}

			return 'No';
		}

		// Handles the getItems response
		function getItemsHandler ( result ) {
			if ( result ) {
				self.itemList = result.data;
			}
		}

		// Fetches rental item list
		function getItems () {
			var data = {
				'limitVal'  : '10',
				'offsetVal' : '0'
			};

			apiService.tranzGoApiCall.rentalItems.getRentalItems( data ).then( getItemsHandler );
		}

		// Test function to call authentication
		function getItemsList () {
			var data = {
				'username' : 'stephenpadilla@gmail.com',
				'password' : 'wallpwd'
			};

			apiService.tranzGoApiCall.authenticate( data ).then( function ( res ) {
				console.log( 'AUTHENTICATES!' );
				console.log( res );
			} );
		}

		// Activates the RentalItem controller
		function activate () {
			console.log( 'RentalItem controller activated' );

			// TODO: All functionality should start here
		}

		activate();

		self.convertStatusCodes = convertStatusCodes;
		self.confirmDeleteModal = confirmDeleteModal;
	}


	angular
		.module('app.rental')
		.controller('RentalItemCtrl', RentalItemCtrl);

	RentalItemCtrl.$inject = [ '$uibModal', 'apiService', '_' ];
})();
