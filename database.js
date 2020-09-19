const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const PostEntry = require('./models/PostEntry.js')
require('custom-env').env()

const app = express();
const PORT = 5000;

const routes = require('./routes/EntryRoute.js');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log("IT CONNECTED");
});

// data = {
//     body: "hi my dawgssssssssssssssssssss",
//     date: Date.now(),
//     title: "hello"
// };
// const newEntry = new PostEntry(data);
// newEntry.save((error) => {
//     if (error) {
//         console.log("something went wrong");
//     } else {
//         console.log("saved!!!");
//     }
// });

app.use(morgan('tiny'));
//HTTP call

app.use('/', routes);
app.listen(PORT, console.log(`Server is starting at ${PORT}`));

