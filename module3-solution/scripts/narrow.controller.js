(function(){
  'use strict';

  angular.module('NarrowItDownApp')

  // I chose this method of protection from minification
  .controller('NarrowItDownController', ['$rootScope', 'MenuSearchService', function($rootScope, MenuSearchService) {

    var narrow = this;
    narrow.searchTerm = "";
    narrow.searchDone = false;


    narrow.getMatchedMenuItems = function(searchTerm) {
      narrow.found = [];
      narrow.searchDone = false;
      searchTerm = searchTerm.trim();
      if (searchTerm.length == 0) {
        narrow.searchDone = true;
        return;
      }
      $rootScope.$broadcast('list:processing', {on: true});
      MenuSearchService.getMatchedMenuItems(searchTerm)
      .then(function(result) {
        narrow.found = result;
        narrow.searchDone = true;
        $rootScope.$broadcast('list:processing', {on: false});
      });
    };

    narrow.removeItem = function(idx) {
      narrow.found.splice(idx, 1);
    };

  }])

  ;

})();