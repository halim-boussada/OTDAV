const mongoose = require('mongoose');
const db = require('./connect.js');
mongoose.Promise = global.Promise;

const NewsSchema = new mongoose.Schema({
  image : String , 
  body : String 
},
  {
    timestamps: true
  }
);


const News = mongoose.model('News', NewsSchema);



module.exports = News;