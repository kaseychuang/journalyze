const express = require('express');
const router = express.Router();

const PostEntry = require('../models/PostEntry.js')

router.get('/entry/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const entry = await PostEntry.findById(id);
        if (!entry){
            return res.status(400).send({error: "Couldn't find that entry"});
        }
        res.status(200).send(entry);
    }catch (e){
        res.status(500).send(e)
    }
    
})

router.get('/entries', (req, res) => {
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