const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
require('custom-env').env()

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log("IT CONNECTED");
});

const Schema = mongoose.Schema;
const PostSchema = new Schema({
    date: Date,
    body : String
});

const PostEntry = mongoose.model('PostEntry', PostSchema);

data = {
    body: "hi my dawgssssssssssssssssssss",
    date: Date.now()
};

const newEntry = new PostEntry(data);

newEntry.save((error) => {
    if (error) {
        console.log("something went wrong");
    } else {
        console.log("saved!!!");
    }
});

//HTTP call


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://gayatrs:Wics2020!@entry.hz7yo.azure.mongodb.net/EntryDB?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
