(function() {
  "use strict";
  angular.module('public')
  .controller('MyinfoController', MyinfoController);

  MyinfoController.$inject = ['user','ApiPath'];
  function MyinfoController(user, ApiPath) {
    let ctrl = this;
    ctrl.basePath = ApiPath;
    ctrl.logged = false;
    ctrl.user=user;
    console.log(user);
    if(user.name){
      ctrl.logged = true;
    }
  }
})();
