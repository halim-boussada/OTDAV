const mongoose = require('mongoose');
const db = require('./connect.js');
mongoose.Promise = global.Promise;

const AboutSchema = new mongoose.Schema({
  body: String,
},
  {
    timestamps: true
  }
);


const About = mongoose.model('About', AboutSchema);



module.exports = About;
