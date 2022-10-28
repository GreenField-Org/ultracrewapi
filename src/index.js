let express = require('express')
let bodyParser = require('body-parser')
let http = require("http")
let mongoose = require('mongoose')
let dotenv = require('dotenv').config()

var app = express()
var port = process.env.PORT || 5000
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//connect to mongo
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

//test to see if server is running
app.listen(port, () => console.log(`Listening on port ${port}`))

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello World!") //write a response to the client
    res.end() //end the response
  })
  .listen(8080) //the server object listens on port 8080


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
}, {timestamps: true})

const User = mongoose.model("User", userSchema)

app.get('/api/user/:id', urlencodedParser, (req, res) => {
  User.findById(req.params.id, (err, docs) => {
    if (err) {
      res.sendStatus(404)
    } else {
      res.status(200).json({ user: docs, status: 200})
    }
  })
});

app.post('/api/user', jsonParser, (req, res) => {
    const user = {
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      middleInitial: req.body.middleInitial,
      password: req.body.password,
      dob: req.body.dob,
      weight: req.body.weight,
      country: req.body.country,
      address: req.body.address,
      email: req.body.email,
      phoneNum: req.body.phoneNum,
      userTier: req.body.userTier
    }

  //check if username is empty
  if (user.username === '') {
    res.status(500).json('Username required')
  } else {
    //create new username obj in the Users collection
    // the var id turns into the _id from the result of the created username
    if (User.find({username: req.body.username}).count() > 0) {
      res.status(500).json({message: 'EXISTING_USER'})
    } else {
      User.create(user).then(result => {
        id = result._id
        res.status(200).json(result)
      })
    }
  
  }
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
