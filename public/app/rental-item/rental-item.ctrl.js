( function () {
	function RentalItemCtrl ( apiService, _ ) {
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

		// Convert status codes to words
		function convertStatusCodes ( status ) {
			if ( status ) {
				return 'Yes';
			}

			return 'No';
		}

		// Test function to set the view to details
		function viewItemDetails ( itemId ) {
			self.isDetailMode = true;
			self.currItem     = _.find( self.itemList, { 'id' : itemId } );
			self.currItemName = self.currItem.make + ' ' + self.currItem.model + ' ' + self.currItem.year_model + ' (' + self.currItem.plate_no + ')';

			console.log( 'VIEW DETAILS FOR RENTAL ITEM: ' + itemId );
			console.log( self.currItemName );
		}

		// Test function to set the view to list
		function viewItemList () {
			self.isDetailMode = false;
			self.currItem     = {};
			self.currItemName = '';

			console.log( 'VIEW LIST OF RENTAL ITEMS' );
		}

		// Sets the view between list or detail view
		function toggleRentalItemView ( itemId ) {
			if ( itemId ) {
				console.log( 'VIEW DETAILS FOR ITEM: ' + itemId );
				self.isDetailMode = true;

				getUserDetails( itemId );

				return;
			}

			self.isDetailMode = false;
			self.currItem     = {};
			self.currItemName = '';

			console.log( 'VIEW LIST OF ITEMS' );
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

			apiService.tranzGoApiCall.users.getUsers( data ).then( getItemsHandler );
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

			self.testText = 'Hello world';
			// TODO: All functionality should start here
		}

		activate();

		self.convertStatusCodes = convertStatusCodes;
		self.viewItemList       = viewItemList;
		self.viewItemDetails    = viewItemDetails;
	}


	angular
		.module('app.rental')
		.controller('RentalItemCtrl', RentalItemCtrl);

	RentalItemCtrl.$inject = [ 'apiService', '_' ];
})();
