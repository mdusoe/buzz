'use strict';

angular.module('buzzApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/card', {
        templateUrl: 'app/card/card.html',
        controller: 'CardCtrl'
      });
  });