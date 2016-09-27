(function(){
  'use strict';

  angular.module('NarrowItDownApp')

  .component('foundItems', {
    templateUrl: './templates/items.template.html',
    bindings: {
      foundItems: '<',
      searchDone: '<',
      onRemove: '&'
    }
  });


})();