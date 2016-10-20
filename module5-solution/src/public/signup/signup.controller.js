(function() {
  'use strict';

  angular.module('public')
  .controller('SignupController', ['MenuService', 'LocalStorage', function(MenuService, LocalStorage) {
    var supCtrl = this;
    supCtrl.signup = {};
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
            },
            function(failure) {
              supCtrl.cantGetItem = true;
              supCtrl.httpError = failure.data.error;
            }
          );
    };

  }]);

})();