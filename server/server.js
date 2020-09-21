const express = require("express");
const bodyParser = require("body-parser");
const Post = require("../database/schema.js");
const Message = require("../database/userschema.js");
const About = require("../database/AboutSchema.js");
const News = require("../database/newsschema.js");

const app = express();
const PORT = 3000;
const path = require("path");
app.use(express.static("client/dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// getting Posts from database
app.get("/getp", (req, res) => {
  Post.find({}, function (error, data) {
    if (error) return console.log(error);
    res.send(data);
  });
});
// getting About from database
app.get("/geta", (req, res) => {
  About.find({}, function (error, data) {
    if (error) return console.log(error);
    res.send(data);
  });
});
// getting Message from database
app.get("/getm", (req, res) => {
  Message.find({}, function (error, data) {
    if (error) return console.log(error);
    res.send(data);
  });
});

app.get("/getn", (req, res) => {
  News.find({}, function (error, data) {
    if (error) return console.log(error);
    res.send(data);
  });
});



// deleting one post
app.post("/delete", function (req, res) {
  console.log(req.body)

  Post.deleteOne({ body: Object.keys(req.body)[0] }).catch(function (error) {
    console.log(error, b, c);
  });
});

// update about us 
app.post("/inserta", function (req, res) {
  console.log(req.body)
 About.updateOne({body : req.body.oldabout} , {$set:{body: req.body.about}} , function(err, result) {
  if (err) console.log(err)  
});
});


// update post 
app.post("/updatep", function (req, res) {
  console.log(req.body)
 About.updateOne({body : req.body.oldabout} , {$set:{body: req.body.about}} , function(err, result) {
  if (err) console.log(err)  
});
});

// inserting a new post 
app.post("/insert", (req, res) => {
  var newpost = {
    title: req.body.title,
    author: req.body.author,
    imageUrl: req.body.imageUrl,
    body: req.body.post,
  };
  console.log(req.body);
  const newP = new Post(newpost);
  newP.save((err, result) => {
    res.send(result);
  });
});


//insert new message
app.post("/insertm", (req, res) => {
  var newmessage = {
    user: req.body.user,
    number: req.body.number,
    adress: req.body.adress,
    message: req.body.message,
  };
  console.log(req.body);
  const newM = new Message(newmessage);
  newM.save((err, result) => {
    res.send(result);
  });
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
