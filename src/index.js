const express = require('express')
const app = express()
var http = require("http");
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;


//connect to mongo
mongoose.connect('mongodb+srv://greenfielddev:Sh3rl0ck@cluster0.zlfjykj.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

//test to see if server is running
app.listen(port, () => console.log(`Listening on port ${port}`));

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
