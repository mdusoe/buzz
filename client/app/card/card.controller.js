'use strict';

angular.module('buzzApp')
    .controller('CardCtrl', function($scope, $http) {
        $scope.game = {};

        $http.get('/api/games/new').success(function(game) {
            $scope.game = game;
        });
    });
