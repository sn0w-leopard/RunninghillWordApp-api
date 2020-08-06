const express = require('express');
const router = express.Router();
const { Word } = require('../models/word.model');

/* WORD ROUTES */

/**
 * @api {get} /words Get all words in dictionary
 * @apiName GetWords
 * @apiGroup Words
 */
router.get('/', (req,res) => {
    Word.find({}).then((words) => {
        res.status(200).json({
            words
        });
    });
})

/**
 * @api {get} /words/:type Get all words of specified type in dictionary
 * @apiName GetTypeWords
 * @apiGroup Words
 */
router.get('/:type', (req, res, next) => {
    Word.find({
        type: req.params.type
    }).then((words) => {
        res.status(200).json({
           words
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
});

/**
 * @api {post} /words Add new word to dictionary
 * @apiName PostWords
 * @apiGroup Words
 */
router.post('/', (req,res) => {
    let title = req.body.title;
    let type = req.body.type;

    newWord = new Word({
        title,type
    })

    newWord.save().then((wordDoc) =>{
        res.status(201).json({
            message: "Word Added Successfully",
            wordDoc
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