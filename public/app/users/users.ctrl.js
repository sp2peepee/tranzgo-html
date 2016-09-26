( function () {
    function UsersCtrl() {
        var vm = this;

        var users = [
            {
                name : 'test',
                age  : 23
            },
            {
                name : 'foo',
                age  : 24
            },
            {
                name : 'bar',
                age  : 25
            }
        ];

        vm.users = users;

        console.log(vm.users);
    }


    angular
        .module('app.users')
        .controller('UsersCtrl', UsersCtrl);
})();
