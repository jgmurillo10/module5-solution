(function() {
  "use strict";
  angular.module('public')
  .service('SignupService',SignupService);

  SignupService.$inject = ['$http','ApiPath'];
  function SignupService($http,ApiPath) {
    var signup = this;
    signup.user = {};
    signup.error= false;
    signup.addUser = function(user) {
      $http.get(ApiPath+'/menu_items/'+user.dish+'.json')
      .then(function(response) {
        signup.user = user;
        signup.user.dishInfo = response.data;
      })
      .catch(function(data){
        signup.error=true;
      })
      return signup.error;
    }
    signup.getUser = function() {
      return signup.user;
    }
  };
})();
