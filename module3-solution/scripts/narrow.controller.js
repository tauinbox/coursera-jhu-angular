(function(){
  'use strict';

  angular.module('NarrowItDownApp')

  // I chose this method of protection from minification
  .controller('NarrowItDownController', ['$rootScope', 'MenuSearchService', function($rootScope, MenuSearchService) {

    var narrow = this;
    narrow.searchTerm = "";


    narrow.getMatchedMenuItems = function(searchTerm) {
      narrow.found = [];
      $rootScope.$broadcast('list:processing', {on: true});
      MenuSearchService.getMatchedMenuItems(searchTerm)
      .then(function(result) {
        narrow.found = result;
        $rootScope.$broadcast('list:processing', {on: false});
      });
    };

    narrow.removeItem = function(idx) {
      narrow.found.splice(idx, 1);
    };

  }])

  ;

})();