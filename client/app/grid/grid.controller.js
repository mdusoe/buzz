'use strict';

angular.module('buzzApp')
  .controller('GridCtrl', function ($scope, $http) {
    $scope.words = [];

    $http.get('/api/words').success(function(words) {
      $scope.words = words;
    });
  });