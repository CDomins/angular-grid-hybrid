(function () {
  "use strict";

  angular.module("migrationReadyApp").service("OrderService", OrderService);

  OrderService.$inject = ["$q", "$timeout"];

  function OrderService($q, $timeout) {
    const getOrders = function () {
      var deferred = $q.defer();
      const orders = [
        {
          orderId: 1001,
          customer: "John Doe",
          total: 1349.98,
          status: "Shipped",
        },
        {
          orderId: 1002,
          customer: "Jane Smith",
          total: 49.99,
          status: "Processing",
        },
        {
          orderId: 1003,
          customer: "Peter Jones",
          total: 199.0,
          status: "Delivered",
        },
        {
          orderId: 1004,
          customer: "Mary Johnson",
          total: 25.5,
          status: "Shipped",
        },
      ];
      $timeout(() => deferred.resolve(orders), 700);
      return deferred.promise;
    };

    return {
      getOrders: getOrders,
    };
  }
})();
