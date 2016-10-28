( function () {
	function RentalItemDetailCtrl ( $uibModal, $routeParams, apiService, _ ) {
		var self = this;

		self.itemExists = false;

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

		function confirmDeleteModal () {
			console.log( 'OPEN DELETE MODAL' );
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

		// Test function to set the view to details
		function viewItemDetails ( itemId ) {
			self.currItem     = _.find( self.itemList, { 'id' : parseInt( itemId ) } );
			console.log( itemId );

			if ( self.currItem ) {
				self.itemExists   = true;
				self.currItemName = self.currItem.make + ' ' + self.currItem.model + ' ' + self.currItem.year_model + ' (' + self.currItem.plate_no + ')';
			}

			console.log( 'VIEW DETAILS FOR RENTAL ITEM: ' + itemId );
			console.log( self.currItemName );
		}

		// Handles the getItemDetails response
		function getItemDetailsHandler ( result ) {
			if ( result ) {
				self.currItem     = result.data;
				self.currItemName = result.data.first_name + ' ' + result.data.last_name;

				console.log( self.currItemName );
			}
		}

		// Fetches details for a specific rental item
		function getItemDetails ( itemId ) {
			apiService.tranzGoApiCall.rentalItems.getRentalItemDetails( itemId ).then( getItemDetailsHandler );
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

			if ( $routeParams.itemId ) {
				console.log( 'IS DETAILS!' );
				self.currItemId = $routeParams.itemId;
				viewItemDetails( self.currItemId );
			}

			// TODO: All functionality should start here
		}

		activate();

		self.convertStatusCodes = convertStatusCodes;
		self.confirmDeleteModal = confirmDeleteModal;
	}


	angular
		.module('app.rentalDetail')
		.controller('RentalItemDetailCtrl', RentalItemDetailCtrl);

	RentalItemDetailCtrl.$inject = [ '$uibModal', '$routeParams', 'apiService', '_' ];
})();
