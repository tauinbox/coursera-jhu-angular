(function(){
  'use strict';

  angular.module('loader')

  .component('itemsLoaderIndicator', {
    templateUrl: './loader/itemsloaderindicator.template.html',
    controller: ['$rootScope', function($rootScope) {
      var $ctrl = this;

      var cancelListener = $rootScope.$on('list:processing', function (event, data) {
        // console.log("Event: ", event);
        // console.log("Data: ", data);

        if (data.on) {
          $ctrl.showLoader = true;
        }
        else {
          $ctrl.showLoader = false;
        }
      });

      $ctrl.$onDestroy = function () {
        cancelListener();
      };      
    }]
    
  });


})();