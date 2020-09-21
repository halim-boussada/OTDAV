const db  = require('./connect.js');
const Post = require('./schema.js');
const Message = require('./userschema.js');
const About = require('./aboutSchema.js');
const News = require('./newsschema.js');




const sampleAbout = [
  {
    body: `this is about OTDAV `
  } 
];

const sampleNew = [
  {
    image : "https://lh3.googleusercontent.com/proxy/hxqHrwbrjze96GzvBOH9BG_BsB-HUiqXvPWfbwtclbd2dRv_oXApkqZw3a1r3kT6miBqnZiaBXxW6AozXObJ2pV9KNUEt-CDDaH8g-zZ1wc8XJxpHgvdS7zXJkidmDlvqZW-J3imAL9bfoPG1iqRFHGTWBZ4k0b7XQi-eRrptmoiAw8eMkP3M_lNtLntC5XwyMcFtTLhE2KK1y577_5kyfXsjR1qUlgBnKiIsKTQvncxcNPfrkLtODOnmg" , 
    body: `this is about OTDAV newss Kept in sent gave feel will oh it we. Has pleasure procured men laughing shutters nay. Old insipidity motionless continuing law shy partiality. Depending acuteness dependent eat use dejection. Unpleasing astonished discovered not nor shy. Morning hearted now met yet beloved evening. Has and upon his last here must.`
  } 
];


const samplePosts = [
  {
    title: 'this is the first OTDAV',
    author: 'halim boussada',
    imageUrl: 'https://online.fliphtml5.com/rjqaq/ihuq/files/large/1.jpg?1573561524',
    body: `Kept in sent gave feel will oh it we. Has pleasure procured men laughing shutters nay. Old insipidity motionless continuing law shy partiality. Depending acuteness dependent eat use dejection. Unpleasing astonished discovered not nor shy. Morning hearted now met yet beloved evening. Has and upon his last here must.  `
  } 
];

const sampleMessage = [
    {
        user: 'halim ',
        number: 20028952 ,
        adress: '18 rue ahmed ben baraa',
        message: `Kept in sent gave feel will oh it we. Has pleasure procured men laughing shutters nay. Old insipidity motionless continuing law shy partiality. Depending acuteness dependent eat use dejection. Unpleasing astonished discovered not nor shy. Morning hearted now met yet beloved evening. Has and upon his last here must.  `
    } 
  ];

const insertSamplePosts = function() {
  Post.create(samplePosts)
    .then(() => console.log("succeesss"));
};
const insertSampleMessage = function() {
    Message.create(sampleMessage)
      .then(() => console.log("succeesss too"));
  };
  const insertSampleAbout = function() {
    About.create(sampleAbout)
      .then(() => console.log("succeesss three"));
  };
  const insertSampleNew = function() {
    News.create(sampleNew)
      .then(() => console.log("succeesss for"));
  };
  
  
insertSampleNew()
insertSamplePosts();
insertSampleMessage()
insertSampleAbout()