(function(){
  'use strict';

  angular.module('LunchCheck', [])

  // I chose this method of protection from minification
  .controller('LunchCheckController', ['$scope', function($scope) {

    $scope.string = "";
    $scope.result = "";
    $scope.color = "black";
    $scope.bordercolor = "#cccccc";

    $scope.checkInput = function() {
      $scope.string = $scope.string.trim();
      if ($scope.string == "") {
        $scope.result = "Please enter data first";
        $scope.color = "red";
        $scope.bordercolor = "red";
        return;
      }
      var numberOfItems = $scope.string.split(',').length;
      if (numberOfItems > 3) {
        $scope.result = "Too much!";
        $scope.color = "green";
        $scope.bordercolor = "green";
      } else {
        $scope.result = "Enjoy!";
        $scope.color = "green";
        $scope.bordercolor = "green";
      }
    };

  }]);

})();