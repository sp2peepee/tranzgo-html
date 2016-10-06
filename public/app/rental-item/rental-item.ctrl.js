( function () {
    function RentalItemCtrl ( apiService, _ ) {
        var self = this;

        // Activates the RentalItem controller
        function activate () {
        	console.log( 'RentalItem controller activated' );

            self.testText = 'Hello world';
        	// TODO: All functionality should start here
        }

        activate();
    }


    angular
        .module('app.rental')
        .controller('RentalItemCtrl', RentalItemCtrl);

    RentalItemCtrl.$inject = [ 'apiService', '_' ];
})();
