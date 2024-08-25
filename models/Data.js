const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    numbers: [String],
    alphabets: [String],
    highest_lowercase_alphabet: String,
});

module.exports = mongoose.model('Data', DataSchema);
