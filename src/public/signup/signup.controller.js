(function() {
  "use strict";

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['SignupService'];
  function SignupController(SignupService) {
    let ctrl =this;
    ctrl.submit = function () {
    ctrl.completed = true;
    ctrl.addUser = function(){
      ctrl.error = SignupService.addUser(ctrl.user);
    };
    ctrl.addUser();

  };
  }
})();
