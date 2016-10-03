(function() {
  'use strict';

  angular.module('MenuApp')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    // Set up UI states
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.template.html'
    })
    .state('categories', {
      url: '/categories',
      template: '<categories categories-data="$ctrl.categories"></categories>',
      controller: ['resolvedCategories', function(resolvedCategories) {
        var $ctrl = this;
        $ctrl.categories = resolvedCategories.data;
      }],
      controllerAs: '$ctrl',
      resolve: {
        resolvedCategories: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('items', {
      url: '/items/{categoryShortName}',
      template: '<items items-data="$ctrl.items"></items>',
      controller: ['resolvedItems', function(resolvedItems) {
        var $ctrl = this;
        $ctrl.items = resolvedItems.data;
      }],
      controllerAs: '$ctrl',
      resolve: {
        resolvedItems: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }      
    }) 
    ;

  }]);

})();