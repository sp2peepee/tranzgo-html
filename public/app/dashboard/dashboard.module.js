(function () {
    'use strict';

    angular.module('app.dashboard', ['ngRoute'] )
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/dashboard', {
                    templateUrl : 'app/dashboard/dashboard.html'
                });
        }]);
})();
