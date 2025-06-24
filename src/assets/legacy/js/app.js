(function () {
  "use strict";

  angular
    .module("migrationReadyApp", [
      "ngRoute",
      "ngAnimate",
      "ngTouch",
      "ui.grid",
      "ui.grid.autoResize",
    ])
    .config(function () {
      console.log("migrationReadyApp initialized");
    })
    .run(function () {
      console.log("migrationReadyApp running");
    });
})();
