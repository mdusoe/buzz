'use strict';

angular.module('buzzApp')
  .controller('GridCtrl', function ($scope, $http) {
    $scope.words = [];

    $http.get('/api/words').success(function(words) {
      $scope.words = words;
    });

    /*$scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
    $http.post('/api/words', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };*/
  });