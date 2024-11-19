const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dbConnect = require('./config/database');
dbConnect;
const todoRoutes = require('./routes/todoRoute');
require('dotenv').config();


const PORT = process.env.PORT || 4000


app.use(bodyParser.json());

// mount the todo api route
app.use('/api/v1' , todoRoutes);

app.get('/' ,  (req , res)=>{
  res.send('Welcom to the server')
});


app.listen(PORT , ()=>{
  console.log(`Server started successfully ${PORT}`);
});