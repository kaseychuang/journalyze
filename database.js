const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const PostEntry = require('./models/PostEntry.js')
const DataEntry = require('./models/DataEntry.js')
require('custom-env').env()
const cors = require('cors');


const app = express();
const PORT = 5000;
app.use(cors({ origin: true }));

const routes = require('./routes/EntryRoute.js');

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log("IT CONNECTED");
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(cors());
app.use(morgan('tiny'));
//HTTP call

app.use('/', routes);
app.listen(PORT, console.log(`Server is starting at ${PORT}`));

