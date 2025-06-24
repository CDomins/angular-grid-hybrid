(function () {
  "use strict";

  angular
    .module("migrationReadyApp")
    .controller("MainController", MainController);
  MainController.$inject = ["$location"];

  function MainController($location) {
    var vm = this;
    vm.isActive = isActive;

    function isActive(route) {
      return route === $location.path();
    }
  }
})();
