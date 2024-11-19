
const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.mongoDB_URI;

const dbConnect = mongoose.connect(url)
.then(()=>{
  console.log('mongodb server connected');
})
.catch((error) =>{
  console.log('Mongodb server error' , error)
});

module.exports = dbConnect;