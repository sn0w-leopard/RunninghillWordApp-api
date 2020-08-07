//Connection logic to the MongoDB database

const mongoose = require('mongoose');
const url = "mongodb+srv://RunninghillAdmin:hillrunner@runninghill-word-app.1llvv.azure.mongodb.net/WordApp?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;
mongoose.connect(url, {useNewUrlParser: true}).then(() => {
    console.log('Connection to MongoDB successful');
}).catch((e) => {
    console.log('Error while attemping to connect: Connection to MongoDB unsuccessful');
    console.log(e);
})

// To prevent deprectation warnings from MongoDB native driver
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
};