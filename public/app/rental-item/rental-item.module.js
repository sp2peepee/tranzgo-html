(function () {
    'use strict';

    angular.module('app.rental', ['ngRoute'] )
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/rental', {
                    templateUrl : 'app/rental-item/rental-item.html',
                    controller  : 'RentalItemCtrl as vm'
                });
        }]);
})();
