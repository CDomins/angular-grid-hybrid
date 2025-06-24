(function () {
  "use strict";

  angular
    .module("migrationReadyApp")
    .controller("UsersController", UsersController);

  UsersController.$inject = ["UserService"];

  function UsersController(UserService) {
    var vm = this;

    vm.gridOptions = {
      enableSorting: true,
      columnDefs: [
        { name: "ID", field: "id", width: "10%" },
        { name: "Name", field: "name" },
        { name: "Email", field: "email" },
        { name: "Role", field: "role" },
      ],
      data: [],
    };

    UserService.getUsers().then(function (data) {
      vm.gridOptions.data = data;
    });
  }
})();
