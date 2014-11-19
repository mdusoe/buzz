'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var random = require('mongoose-random');

var WordSchema = new Schema({
    word: String
});
WordSchema.plugin(random, {
    path: 'r'
});

module.exports = mongoose.model('Word', WordSchema);
