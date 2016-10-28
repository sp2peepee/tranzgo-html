( function () {
	'use strict';
	function Components ( logger ) {
		var self   = this;

		self.title = 'Components';

		function activate () {
			logger.info( 'Activated Components' );
		}

		activate();
	}

	angular
		.module( 'app.components' )
		.controller( 'Components', Components );

	Components.$inject = [ 'logger' ];
} )( );
