const express = require('express');
const router = express.Router();

const PostEntry = require('../models/PostEntry.js')

router.get('/db', (req, res) => {

    PostEntry.find({})
    .then((data) => {
        console.log('Data:');
        res.json(data);
    })
    .catch((error) => {
        console.log('Error: ', error);
    });

    
});

module.exports = router;