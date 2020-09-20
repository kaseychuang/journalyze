const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const EntitySchema = new Schema({
    type: String, 
    name: String, 
    freq: Number, 
    averageScore: Number
});

const Entity = mongoose.model('Entity', EntitySchema);

module.exports = Entity;