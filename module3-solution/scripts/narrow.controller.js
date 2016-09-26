(function(){
  'use strict';

  angular.module('NarrowItDownApp')

  // I chose this method of protection from minification
  .controller('NarrowItDownController', ['MenuSearchService', function(MenuSearchService) {

    var narrow = this;
    narrow.searchTerm = "";


    narrow.getMatchedMenuItems = function(searchTerm) {
      narrow.found = [];
      MenuSearchService.getMatchedMenuItems(searchTerm)
      .then(function(result) {
        narrow.found = result;
      });
    };

    narrow.removeItem = function(idx) {
      narrow.found.splice(idx, 1);
    };

  }])

  ;

})();