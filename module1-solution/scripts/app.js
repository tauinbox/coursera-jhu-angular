(function(){
  'use strict';

  angular.module('checkApp', [])

  .controller('InputController', ['$scope', function($scope) {

    $scope.string = "";
    $scope.result = "";

    $scope.checkInput = function() {
      $scope.string = $scope.string.trim();
      if ($scope.string == "") {
        $scope.result = "Please enter data first";
        return;
      }
      var numberOfItems = $scope.string.split(',').length;
      if (numberOfItems > 3) {
        $scope.result = "Too much!";
      } else {
        $scope.result = "Enjoy!";
      }
    };

  }]);

})();