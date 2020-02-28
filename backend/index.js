const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const short = require('./app/short');
const app = express();
app.use(cors())

const port = 8000;

app.use(express.json());





const run = async () => {
   await mongoose.connect('mongodb://localhost/shop',{useNewUrlParser:true,useUnifiedTopology:true});

  app.use('/short', short);

  app.listen(port, () => {
    console.log(`HTTP Server started on ${port} port!`);
  });


};

run().catch(e => {
  console.error(e);
});