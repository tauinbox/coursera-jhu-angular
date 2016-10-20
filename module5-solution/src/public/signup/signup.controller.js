(function() {
  'use strict';

  angular.module('public')
  .controller('SignupController', ['$scope', 'MenuService', 'LocalStorage', function($scope, MenuService, LocalStorage) {
    var supCtrl = this;
    supCtrl.cantGetItem = false;
    supCtrl.formDone = false;

    supCtrl.submitSignup = function(data) {
      // console.log(data);
      var item = MenuService.getMenuItemByShortName(data.favoritedish)
      .then(
            function(response) {
              supCtrl.cantGetItem = false;
              supCtrl.formDone = true;
              console.log(response.data);
              supCtrl.signup = {
                firstname: '',
                lastname: '',
                email: '',
                tel: '',
                favoritedish: ''
              };
              $scope.signupForm.$setUntouched();
              $scope.signupForm.$setPristine();
            },
            function(failure) {
              supCtrl.cantGetItem = true;
              supCtrl.httpError = failure.data.error;
            }
          );
    };

  }]);

})();