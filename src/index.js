const express = require('express')
const helmet = require('helmet')
const app = express()
app.use(helmet())
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


 //creating a user
 const Schema = mongoose.Schema
 const userSchema = new Schema({
  username: String,
  firstName: String,
  lastName: String,
  password: String,
  middleInitial: String, 
  dob: Date,
  weight: Number,
  country: String,
  address: String,
  email: String,
  phoneNum: String,
  userTier: Number
})
const User = mongoose.model("User", userSchema)
  app.post('/api/user', (req, res) =>{
  //assign body item w username in it to username var
  const username = req.body.username
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const password = req.body.password
  const middleInitial = req.body.middleInitial
  const dob = req.body.dob
  const weight = req.body.weight
  const country = req.body.country
  const address = req.body.address
  const email = req.body.email
  const phoneNum = req.body.phoneNum
  const userTier = req.body.userTier
 //check if username is empty
 if (username === ''){
   res.json('Username required')
 }else
 //create new username obj in the Users collection
 // the var id turns into the _id from the result of the created username
  User.create({
    username: username,
    firstName: firstName,
    lastName: lastName,
    middleInitial: middleInitial, 
    password: password,
    dob: dob,
    weight: weight,
    country: country,
    address: address,
    email: email,
    phoneNum: phoneNum,
    userTier: userTier
  }).then(result => {
    id = result._id
    res.json(result)
  })
})


 //creating an aid station
 const aidStationSchema = new Schema({
  distancePoint: String,
  food: String,
  liquids: String,
  mood: String,
  notes: String, 
  timeOut: Date,
  timeIn: Date,
  raceID: String,
})
const AidStation = mongoose.model("AidStation", aidStationSchema)
  app.post('/api/aidstation', (req, res) =>{
  //assign item to what's in the body
  const distancePoint = req.body.distancePoint
  const food = req.body.food
  const liquids = req.body.liquids
  const mood = req.body.mood
  const notes = req.body.notes
  const timeOut = req.body.timeOut
  const timeIn = req.body.timeIn
  const raceID = req.body.raceID

  AidStation.create({
    distancePoint: distancePoint,
    food: food,
    liquids: liquids,
    mood: mood, 
    notes: notes,
    timeOut: timeOut,
    timeIn: timeIn,
    raceID: raceID,
  }).then(result => {
    id = result._id
    res.json(result)
  })
})
