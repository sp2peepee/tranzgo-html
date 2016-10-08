(function () {
	'use strict';

	angular
		.module('app.core', [
		// angular modules
		'ngRoute'
		] )
		.constant( '_', window._ );
})();
