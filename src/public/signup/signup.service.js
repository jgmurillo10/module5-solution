(function() {
  "use strict";
  angular.module('public')
  .service('SignupService',SignupService);

  function SignupService() {
    var signup = this;
    signup.user = {};

    signup.addUser = function(user) {
      signup.user = user;
    }
    signup.getUser = function(email) {
      return signup.user;
    }
  };
})();
