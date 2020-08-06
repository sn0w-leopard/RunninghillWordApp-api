const mongoose = require('mongoose');

const SentenceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim:true
    },
        _sentenceId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
})

const Sentence = mongoose.model('Sentence', SentenceSchema);

module.exports = { Sentence };