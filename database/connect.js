const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/test99', {useNewUrlParser: true,useUnifiedTopology: true});

module.exports = db;