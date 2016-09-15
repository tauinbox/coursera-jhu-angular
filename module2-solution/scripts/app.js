(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])

  // I chose this method of protection from minification
  .controller('ToBuyShoppingController', ['$scope', 'ShoppingListCheckOffService', function($scope, ShoppingListCheckOffService) {

    var toBuy = this;
    toBuy.expected = ShoppingListCheckOffService.expected;

    toBuy.getIt = function(index) {
      ShoppingListCheckOffService.getIt(index);
    };

  }])

  .controller('AlreadyBoughtShoppingController', ['$scope', 'ShoppingListCheckOffService', function($scope, ShoppingListCheckOffService) {

    var bought = this;
    bought.done = ShoppingListCheckOffService.done;
    
  }])

  .factory('ShoppingListCheckOffService', function() {

    var shopServ = {};

    shopServ.expected = [
      {
        name: "cookies", quantity: 10
      },
      {
        name: "candies", quantity: 5
      },
      {
        name: "pepsi", quantity: 3
      },
      {
        name: "beer", quantity: 20
      },
      {
        name: "chips", quantity: 7
      }                
    ];

    shopServ.done = [];

    shopServ.getIt = function(index) {
      shopServ.done.push(shopServ.expected[index]);
      shopServ.expected.splice(index, 1);
    };

    return shopServ;
  })
  ;

})();