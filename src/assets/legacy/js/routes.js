(function () {
  "use strict";

  angular.module("migrationReadyApp").config(AppRoutes);

  AppRoutes.$inject = ["$routeProvider"];

  function AppRoutes($routeProvider) {
    $routeProvider
      .when("/users", {
        // templateUrl: "users.html",
        // controller: "UsersController",
        // controllerAs: "vm",
        template: "<app-users></app-users>",
      })
      .when("/products", {
        // templateUrl: "products.html",
        // controller: "ProductsController",
        // controllerAs: "vm",
        template: "<app-products></app-products>",
      })
      .when("/orders", {
        templateUrl: "orders.html",
        controller: "OrdersController",
        controllerAs: "vm",
        // template: "<app-orders></app-orders>",
      })
      .otherwise({
        redirectTo: "/users",
      });
  }
})();
