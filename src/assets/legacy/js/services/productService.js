(function () {
  "use strict";

  angular.module("migrationReadyApp").service("ProductService", ProductService);

  ProductService.$inject = ["$q", "$timeout"];

  function ProductService($q, $timeout) {
    const getProducts = function () {
      var deferred = $q.defer();
      const products = [
        { sku: "HW-001", name: 'Laptop Pro 15"', price: 1299.99, stock: 45 },
        { sku: "HW-002", name: "Wireless Mouse", price: 25.5, stock: 250 },
        { sku: "SW-001", name: "OS License", price: 199.0, stock: 1500 },
        { sku: "AC-005", name: "USB-C Hub", price: 49.99, stock: 120 },
      ];
      $timeout(() => deferred.resolve(products), 300);
      return deferred.promise;
    };

    return {
      getProducts: getProducts,
    };
  }
})();
