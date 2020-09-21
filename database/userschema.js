const mongoose = require('mongoose');
const db = require('./connect.js');
mongoose.Promise = global.Promise;

const MessageSchema = new mongoose.Schema({
    user : String,
    number: Number,
    adress: String,
    message: String,
  },
    {
      timestamps: true
    }
  );


  const Message = mongoose.model('Message', MessageSchema);


  module.exports = Message;
