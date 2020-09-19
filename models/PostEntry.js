const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: String,
    date: Date,
    body : String
});

const PostEntry = mongoose.model('PostEntry', PostSchema);

module.exports = PostEntry;