const mongoose = require('mongoose');

const SentenceSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        minlength: [1, "Invalid sentence"],
        trim:true
    }
})

const Sentence = mongoose.model('Sentence', SentenceSchema);

module.exports = { Sentence };