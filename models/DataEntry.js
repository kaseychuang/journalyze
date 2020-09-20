const { ObjectId, Double } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const DataSchema = new Schema({
    _id: ObjectId,
    score: Number,
    entities: Object,
    date: Date
});

const DataEntry = mongoose.model('DataEntry', DataSchema);

module.exports = DataEntry;