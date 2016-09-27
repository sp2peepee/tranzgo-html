( function () {
    function UsersCtrl ( apiService ) {
        var self = this;

        self.userList = [
			{
				"id"               : 3,
				"company_id"       : 1,
				"account_type"     : 3,
				"first_name"       : "Joe",
				"last_name"        : "Smith",
				"username"         : "joesmith@gmail.com",
				"nickname"         : "Joe",
				"designation"      : "Driver",
				"mobile_num"       : "032-889183-890",
				"account_status"   : 1,
				"user_points"      : 0,
				"misc_remarks"     : "",
				"company_name"     : "Tranzwatch",
				"logged_in_status" : 1,
				"vehicle_id"       : 1,
				"plate_no"         : "TXYA-1078",
				"system_code"      : "OAMUQUNA"
			},
			{
				"id": 2,
				"company_id"       : 1,
				"account_type"     : 1,
				"first_name"       : "Stephen",
				"last_name"        : "Padilla",
				"username"         : "stephenpadilla@gmail.com",
				"nickname"         : "Steph",
				"designation"      : "Manager",
				"mobile_num"       : "032-928928-1919",
				"account_status"   : 1,
				"user_points"      : 0,
				"misc_remarks"     : "",
				"company_name"     : "Tranzwatch",
				"logged_in_status" : 0,
				"vehicle_id"       : null,
				"plate_no"         : null,
				"system_code"      : "OAMUQUNA"
			}
        ];

        function activate () {
        	console.log( 'activate controller' );
        	console.log( self.userList );
        }

        activate();
    }


    angular
        .module('app.users')
        .controller('UsersCtrl', UsersCtrl);

    UsersCtrl.$inject = [ 'apiService' ];
})();
