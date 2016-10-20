(function() {
  'use strict';

  angular.module('public')
  .controller('ProfileController', ['LocalStorage', 'ApiPath', function(LocalStorage, ApiPath) {
    var profileCtrl = this;

    var getInfo = LocalStorage.getObject('ANGULAR-M5-ASSIGNMENT', false);

    if (!getInfo) {
      profileCtrl.message = 'Not Signed Up Yet. Sign up Now!';
    } else {
      profileCtrl.userInfo = getInfo;
      profileCtrl.imageUrl = ApiPath + '/images/' + getInfo.favoritedish.short_name + '.jpg'
    }

    profileCtrl.deleteProfile = function() {
      LocalStorage.removeRecord('ANGULAR-M5-ASSIGNMENT');
      profileCtrl.message = 'Not Signed Up Yet. Sign up Now!';
      profileCtrl.userInfo = '';
    };

  }]);

})();