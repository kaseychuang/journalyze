const express = require('express');
const router = express.Router();
const getSentimentData = require('../nlp.js');
const PostEntry = require('../models/PostEntry.js');
const DataEntry = require('../models/DataEntry.js');
const { isCompositeComponent } = require('react-dom/test-utils');
const { ObjectID } = require('mongodb');

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
    const objectid = ObjectID();
    
    const data = {
        title: req.body.title,
        body: req.body.body,
        _id: objectid,
        date: req.body.date
    };

    const nlp = getSentimentData(data.body)
        .then((data) => {
            console.log(data);
            const pool = {
                score: parseFloat(data.documentSentiment.score),
                entities: data.entities,
                _id: objectid,
                date: req.body.date
            };
            const newData = new DataEntry(pool);
            newData.save((error) => {
                if (error) {
                    res.status(500).json({msg: "Error: " + error});
                } else{
                    res.send();
                }
            });
        })
        .catch((error) => {
            console.log('Error: ', error);
        });;

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