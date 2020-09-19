const express = require('express');
const router = express.Router();

const PostEntry = require('../models/PostEntry.js')

router.get('/entry', (req, res) => {

    PostEntry.find({})
    .then((data) => {
        console.log('Data:');
        res.json(data);
    })
    .catch((error) => {
        console.log('Error: ', error);
    });

    
});

router.post('/save', (req, res) => {
    console.log('Body: ', req.body);
    const data = req.body;

    const newPost = new PostEntry(data);
    newPost.save((error) => {
        if (error) {
            res.status(500).json({msg: "Error: " + error});
        } else{
            res.send();
        }
    });

});

module.exports = router;