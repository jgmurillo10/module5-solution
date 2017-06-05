(function() {
  "use strict";
  angular.module('public')
  .controller('MyinfoController', MyinfoController);

  MyinfoController.$inject = ['user'];
  function MyinfoController(user) {
    let ctrl = this;
    ctrl.logged = false;
    ctrl.user=user;
    if(user.name){
      ctrl.logged = true;
    }
  }
})();
