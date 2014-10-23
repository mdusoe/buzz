'use strict';

angular.module('buzzApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/grid', {
        templateUrl: 'app/grid/grid.html',
        controller: 'GridCtrl'
      });
  });