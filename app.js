const express  = require('express');
const app = express();

const {mongoose} = require('./db/mongoose');

const bodyParser = require('body-parser');

const { Word, Sentence } = require('./db/models');
/* MIDDLEWARE  */

app.use(bodyParser.json());

/* ROUTE HANDLERS */

/* WORD ROUTES */

/**
 * GET /words
 * Purpose: Get all words in dictionary
 */
app.get('/words', (req,res) => {
    Word.find({}).then((words) => {
        res.send(words);
    });
})

/* HISTORY ROUTES */

/**
 * GET /history
 * Purpose: Get all sentences
 */
app.get('/sentences', (req,res) => {
    Sentence.find({}).then((sentences) => {
        res.send(sentences);
    });    
})

/**
 * POST /history
 * Purpose: Save sentence
 */
app.post('/sentences', (req,res) => {
    let title = req.body.title;
    
    newSentence = new Sentence({
        title, id
    })

    newSentence.save().then((sentenceDoc) =>{
        res.send(sentenceDoc);
    })
})

/**
 * DELETE /history/:id
 * Purpose: Delete sentence
 */
app.delete('/sentences/:id', (req, res) => {

})



app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})