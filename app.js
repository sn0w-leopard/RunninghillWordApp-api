const express  = require('express');
const app = express();
const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose');
const { Word, Sentence } = require('./db/models');


/* MIDDLEWARE  */

app.use(bodyParser.json());

/* ROUTE HANDLERS */

/* WORD ROUTES */

/**
 * @api {get} /words Get all words in dictionary
 * @apName GetWords
 * @apiGroup Words
 */
app.get('/words', (req,res) => {
    Word.find({}).then((words) => {
        res.send(words);
    });
})

/**
 * @api {get} /words Get all words of specified type in dictionary
 * @apName GetTypeWords
 * @apiGroup Words
 */
app.get('/words/:type', (req,res) => {
    Word.find({
        type: req.params.type
    }).then((words) => {
        res.send(words);
    });
})

/**
 * @api {post} /words Add new word to dictionary
 * @apName PostWords
 * @apiGroup Words
 */
app.post('/words', (req,res) => {
    let title = req.body.title;
    let type = req.body.type;

    newWord = new Word({
        title,type
    })

    newWord.save().then((wordDoc) =>{
        res.send(wordDoc);
    })
})

/* SENTENCE ROUTES */

/**
 * @api {get} /sentences Get all sentences
 * @apName GetSentence
 * @apiGroup Sentences
 */
app.get('/sentences', (req,res) => {
    Sentence.find({}).then((sentences) => {
        res.send(sentences);
    });    
})

/**
 * @api {post} /sentences Save sentence
 * @apName PostSentence
 * @apiGroup Sentences
 */
app.post('/sentences', (req,res) => {
    let title = req.body.title;
    
    newSentence = new Sentence({
        title
    })

    newSentence.save().then((sentenceDoc) =>{
        res.send(sentenceDoc);
    })
})



app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})