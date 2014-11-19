'use strict';

angular.module('buzzApp')
    .controller('CardCtrl', function($scope, $http) {
        $scope.game = {};

        $http.get('/api/games/new').success(function(game) {
            $scope.game = game;
        });

        $scope.updateCell = function(cell) {
            cell.isSelected = !cell.isSelected;
            $http.put('api/games/' + $scope.game._id, $scope.game).success(function(game) {
                $scope.game = game;
            });
        };
    });
