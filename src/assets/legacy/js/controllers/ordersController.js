(function () {
  "use strict";

  angular
    .module("migrationReadyApp")
    .controller("OrdersController", OrdersController);

  OrdersController.$inject = ["OrderService"];

  function OrdersController(OrderService) {
    var vm = this;

    vm.gridOptions = {
      enableSorting: true,
      columnDefs: [
        { name: "Order ID", field: "orderId", width: "15%" },
        { name: "Customer", field: "customer" },
        { name: "Order Total", field: "total", cellFilter: "currency" },
        { name: "Status", field: "status" },
      ],
      data: [],
    };

    OrderService.getOrders().then(function (data) {
      vm.gridOptions.data = data;
    });
  }
})();
