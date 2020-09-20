const express = require('express');
const router = express.Router();
const getSentimentData = require('../nlp.js');
const PostEntry = require('../models/PostEntry.js');
const DataEntry = require('../models/DataEntry.js');
const getEmotion = require('../emotionAPI.js');
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


router.post('/save', async (req, res) => {
    try {
        console.log('Body: ', req.body);
        const objectid = ObjectID();
        let emotions =  await getEmotion(req.body.body)
        emotions = JSON.parse(emotions)['emotion'];
           
        const nlp = await getSentimentData(req.body.body)
        const pool = {
            score: parseFloat(nlp.documentSentiment.score),
            entities: nlp.entities,
            _id: objectid,
            date: req.body.date,
            emotion: emotions
        };
        const newData = new DataEntry(pool);
        newData.save((error) => {
            if (error) {
                res.status(500).json({msg: "ErrorSavePool: " + error});
            } else{
                res.send();
            }
        });
        const entry = {
            title: req.body.title,
            body: req.body.body,
            _id: objectid,
            date: req.body.date,
            score: parseFloat(data.documentSentiment.score),
            emotion: emotions
        };
        const newPost = new PostEntry(entry);
        newPost.save((error) => {
            if (error) {
                res.status(500).json({msg: "ErrorSaveEntry: " + error});
            } else{
                res.send();
            }
        });

    } catch (error) {
        console.log('Error: ', error);
    }

});


module.exports = router;