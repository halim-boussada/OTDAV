const mongoose = require('mongoose');
const db = require('./connect.js');
mongoose.Promise = global.Promise;

const PostSchema = new mongoose.Schema({
  title: String,
  author: String,
  imageUrl: String,
  body: String,
},
  {
    timestamps: true
  }
);

const Post = mongoose.model('Post', PostSchema);



module.exports = Post;
