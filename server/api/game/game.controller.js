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
    // var newGame = new Game();
    // var words = Word.find({}).limit(25);

    // for (var rowCount = 0; rowCount < 5; rowCount++) {
    //     var newRow = new Game.Row();
    //     for (var cellCount = 0; cellCount < 5; cellCount++) {
    //         newRow.words.push(words[rowCount * 5 + cellCount].word)
    //     };
    //     newGame.rows.push(newRow);
    // };

    var newGame = {
        rows: []
    };
    var words = Word.find({}, function(err, words) {
        console.log('Found words: ' + words.length);
        for (var rowCount = 0; rowCount < 5; rowCount++) {
            var newRow = {
                words: []
            };
            for (var cellCount = 0; cellCount < 5; cellCount++) {
                if (rowCount * 5 + cellCount == 12) {
                    newRow.words.push("FREE SPACE");
                } else {

                    newRow.words.push(words[rowCount * 5 + cellCount].word)
                }

            };
            newGame.rows.push(newRow);
        };

        Game.create(newGame, function(err, game) {
            if (err) {
                return handleError(res, err);
            }
            return res.json(201, game);
        });


    }).limit(25);


};


function handleError(res, err) {
    return res.send(500, err);
}
