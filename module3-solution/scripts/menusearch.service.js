(function(){
  'use strict';

  angular.module('NarrowItDownApp')

  // I chose this method of protection from minification
  .service('MenuSearchService', ['$http', function($http) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
        method: 'GET',
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function (result) {
          // process result and only keep items that match
          var foundItems;
          foundItems = [];

          for(var i=0; i<result.data.menu_items.length; i++) {
            if((result.data.menu_items[i].name.toLowerCase().indexOf(searchTerm) !== -1) || 
              (result.data.menu_items[i].description.toLowerCase().indexOf(searchTerm) !== -1)) {
              foundItems.push(result.data.menu_items[i]);
            }
          }

          // return processed items
          return foundItems;
      });      
    };

  }])

  ;

})();