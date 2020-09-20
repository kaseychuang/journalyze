const express = require('express');
const router = express.Router();
const getSentimentData = require('../nlp.js');
const PostEntry = require('../models/PostEntry.js');
const DataEntry = require('../models/DataEntry.js');
const getEmotion = require('../emotionAPI.js');
const { isCompositeComponent } = require('react-dom/test-utils');
const { ObjectID } = require('mongodb');
const Entity = require('../models/Entity.js');
const { findOneAndUpdate } = require('../models/PostEntry.js');

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

router.get('/entities/extremes/people', async (req, res) => {
    try{
        // get most negative and most positive 
        const positives = await Entity.find({type: "PERSON", averageScore: {$gt: 0.5}})
        const negatives = await Entity.find({type: "PERSON", averageScore: {$lt: -0.5}})

        res.send({positive: positives, negative: negatives});
    }catch(e){
        res.status(500).send(e);
    }
})

router.get('/entities/extremes', async (req, res) => {
    try{
        // get most negative and most positive 
        const positives = await Entity.find({averageScore: {$gt: 0.5}})
        const negatives = await Entity.find({averageScore: {$lt: -0.5}})

        res.send({positive: positives, negative: negatives});
    }catch(e){
        res.status(500).send(e);
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

        // // Either update or create a new Entity
        Object.keys(nlp.entities).forEach(async (entity) => {
            // check if it already exists
            try{
                const entityData = await Entity.findOne({name: entity.toLowerCase()})
                console.log(entityData);
                if (!entityData){
                    console.log("Creating new")
                    // create new 
                    const newEntity = new Entity({
                        name: entity.toLowerCase(), 
                        type: nlp.entities[entity].type, 
                        freq: nlp.entities[entity].freq, 
                        averageScore: parseFloat(nlp.entities[entity].score)
                    })
                    await newEntity.save();
                }
                else{
                    // update
                    console.log(nlp.entities[entity].type)
                    const newFreq = entityData.freq + nlp.entities[entity].freq;
                    const update = {
                        freq: newFreq,
                        averageScore: entityData.averageScore / newFreq
                    }
                    await Entity.findOneAndUpdate({name: entity}, update);
                }
            }catch(e){
                console.log(e)
                res.status(500).send(e)

            }
         
        })


    } catch (error) {
        console.log(error)

        res.status(500).send(error)
    }

});


module.exports = router;