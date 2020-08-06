const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim:true
    }
})

const Word = mongoose.model('Word', WordSchema);

module.exports = { Word };