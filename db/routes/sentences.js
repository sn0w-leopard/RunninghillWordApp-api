const express = require('express');
const router = express.Router();
const { Sentence } = require('../models/sentence.model');

/* SENTENCE ROUTES */

/**
 * @api {get} /sentences Get all sentences in dictionary
 * @apName GetSentences
 * @apiGroup Sentences
 */
router.get('/', (req,res) => {
    Sentence.find({}).then((sentences) => {
        res.status(200).json({
            sentences
        });
    });
})

/**
 * @api {post} /sentences Add new sentence to dictionary
 * @apName Postsentences
 * @apiGroup sentences
 */
router.post('/', (req,res) => {
    let title = req.body.title;

    newsentence = new Sentence({
        title
    })

    newsentence.save().then((sentenceDoc) =>{
        res.status(201).json({
            message: "Sentence Added Successfully",
            sentenceDoc
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
});


module.exports = router;