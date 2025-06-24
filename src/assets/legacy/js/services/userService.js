(function () {
  "use strict";

  angular.module("migrationReadyApp").service("UserService", UserService);

  UserService.$inject = ["$q", "$timeout"];

  function UserService($q, $timeout) {
    const getUsers = function () {
      var deferred = $q.defer();
      const users = [
        {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
          role: "Admin",
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane.smith@example.com",
          role: "User",
        },
        {
          id: 3,
          name: "Peter Jones",
          email: "peter.jones@example.com",
          role: "Editor",
        },
        {
          id: 4,
          name: "Mary Johnson",
          email: "mary.j@example.com",
          role: "User",
        },
      ];
      $timeout(() => deferred.resolve(users), 500);
      return deferred.promise;
    };

    return {
      getUsers: getUsers,
    };
  }
})();
