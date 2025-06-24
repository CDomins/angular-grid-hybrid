(function () {
  "use strict";

  angular
    .module("migrationReadyApp")
    .controller("ProductsController", ProductsController);

  ProductsController.$inject = ["ProductService"];

  function ProductsController(ProductService) {
    var vm = this;

    vm.gridOptions = {
      enableSorting: true,
      columnDefs: [
        { name: "SKU", field: "sku" },
        { name: "Product Name", field: "name" },
        { name: "Price", field: "price", cellFilter: "currency" },
        { name: "In Stock", field: "stock" },
      ],
      data: [],
    };

    ProductService.getProducts().then(function (data) {
      vm.gridOptions.data = data;
    });
  }
})();
