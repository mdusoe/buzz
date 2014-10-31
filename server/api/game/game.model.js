'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RowSchema = new Schema({
	words: [String]
});

module.exports = mongoose.model('Row', RowSchema);

var GameSchema = new Schema({
  rows: [RowSchema]
});

module.exports = mongoose.model('Game', GameSchema);