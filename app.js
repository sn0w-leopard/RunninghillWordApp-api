const express  = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose');

const wordRoutes = require('./db/routes/words');
const sentenceRoutes = require('./db/routes/sentences');

/* MIDDLEWARE  */
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cors error catcher
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });

/* ROUTE HANDLERS */

app.use('/words', wordRoutes);
app.use('/sentences', sentenceRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


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