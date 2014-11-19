'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CellSchema = new Schema({
    word: String,
    isSelected: Boolean,
    isWinner: Boolean
});

module.exports = mongoose.model('Cell', CellSchema);

var RowSchema = new Schema({
    cells: [CellSchema]
});

module.exports = mongoose.model('Row', RowSchema);

var GameSchema = new Schema({
    rows: [RowSchema],
    isWon: Boolean
});

module.exports = mongoose.model('Game', GameSchema);
