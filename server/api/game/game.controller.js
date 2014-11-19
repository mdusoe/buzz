/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /games              ->  index
 * POST    /games              ->  create
 * GET     /games/:id          ->  show
 * PUT     /games/:id          ->  update
 * DELETE  /games/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Game = require('./game.model');
var Word = require('../word/word.model');


// Creates a new word in the DB.
exports.create = function(req, res) {

    var newGame = {
        rows: [],
        isWon: false
    };

    Word.findRandom().limit(25).exec(function(err, words) {
        console.log('Found words: ' + words.length);
        for (var rowCount = 0; rowCount < 5; rowCount++) {
            var newRow = {
                cells: []
            };
            for (var cellCount = 0; cellCount < 5; cellCount++) {
                if (rowCount * 5 + cellCount === 12) {
                    newRow.cells.push({
                        word: "FREE SPACE",
                        isSelected: true,
                        isWinner: false
                    });
                } else {

                    newRow.cells.push({
                        word: words[rowCount * 5 + cellCount].word,
                        isSelected: false,
                        isWinner: false
                    })
                }

            }
            newGame.rows.push(newRow);
        }

        Game.create(newGame, function(err, game) {
            if (err) {
                return handleError(res, err);
            }
            return res.json(201, game);
        });


    });


};

exports.update = function(req, res) {
    Game.findById(req.params.id, function(err, game) {
        if (err) {
            return handleError(res, err);
        }
        if (!game) {
            return res.send(404);
        }

        var inGame = req.body;

        clearWins(inGame);
        checkForWin(inGame);

        Game.update({
            _id: req.params.id
        }, inGame, function(err, outGame) {
            if (err) {
                return handleError(res, err);
            }
            return res.json(200, inGame);
        });

    });
};

function clearWins(game) {
    game.isWon = false;
    for (var rowId = 0; rowId < game.rows.length; rowId++) {
        for (var colId = 0; colId < game.rows[rowId].cells.length; colId++) {
            game.rows[rowId].cells[colId].isWinner = false;
        };
    };
}

function checkForWin(game) {
    // assume column count is the same across all rows
    var colCount = game.rows[0].cells.length;
    var rowCount = game.rows.length;

    // check rows
    for (var rowId = 0; rowId < rowCount; rowId++) {
        var row = game.rows[rowId];
        // all need to be selected to win...
        isWin(row.cells, game);
    };

    // check columns
    for (var colId = 0; colId < colCount; colId++) {
        var cells = [];
        for (var rowId = 0; rowId < rowCount; rowId++) {
            cells.push(game.rows[rowId].cells[colId]);
        };
        isWin(cells, game);
    };

    // check diagonals - this assumes a square, so only do it if...
    if (colCount == rowCount) {
        // first top left to bottom right...
        var cells = [];
        for (var i = 0; i < rowCount; i++) {
            cells.push(game.rows[i].cells[i]);
        };
        isWin(cells, game);

        // then top right to bottom left.
        cells = [];
        for (var i = 0; i < rowCount; i++) {
            cells.push(game.rows[i].cells[rowCount - i - 1]);
        };
        isWin(cells, game);
    }
}


function isWin(cells, game) {
    var won = true;
    for (var cellId = 0; cellId < cells.length; cellId++) {
        var cell = cells[cellId];
        if (!cell.isSelected) {
            won = false;
            break;
        }
    };
    if (won) {
        for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            cell.isWinner = true;
        };
        game.isWon = true;
    }
}

function handleError(res, err) {
    return res.send(500, err);
}
