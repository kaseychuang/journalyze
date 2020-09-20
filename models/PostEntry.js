const { ObjectID, ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PostSchema = new Schema({
    _id: ObjectId,
    title: String,
    date: Date,
    body : String
});

const PostEntry = mongoose.model('PostEntry', PostSchema);

module.exports = PostEntry;