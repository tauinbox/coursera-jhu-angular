(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])

  // I chose this method of protection from minification
  .controller('ToBuyShoppingController', ['ShoppingListCheckOffService', function(ShoppingListCheckOffService) {

    var toBuy = this;
    toBuy.expected = ShoppingListCheckOffService.expected;

    toBuy.getIt = function(index) {
      ShoppingListCheckOffService.getIt(index);
    };

  }])

  .controller('AlreadyBoughtShoppingController', ['ShoppingListCheckOffService', function(ShoppingListCheckOffService) {

    var bought = this;
    bought.done = ShoppingListCheckOffService.done;
    
  }])

  .service('ShoppingListCheckOffService', function() {

    var shopServ = this;

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

  })
  ;

})();