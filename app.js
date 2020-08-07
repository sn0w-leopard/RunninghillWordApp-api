const express  = require('express');
const app = express();
const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose');

const wordRoutes = require('./db/routes/words');
const sentenceRoutes = require('./db/routes/sentences');

/* MIDDLEWARE  */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(process.cwd()+"../RunningHillWordApp/dist/RunningHillWordApp/"));

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

app.get('/', (req,res, next) => {
  res.sendFile(process.cwd()+"/../RunningHillWordApp/dist/RunningHillWordApp/index.html")
});

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

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})