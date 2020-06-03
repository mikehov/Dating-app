// All the packages
const express = require('express');
const slug = require('slug');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
require('dotenv').config();

// Connect to the MongoDB Atlas 
let db = null;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}`;

mongodb.MongoClient.connect(uri, {
    useUnifiedTopology: true,
  },
  function (err, client) {
    if (err) throw err;
    db = client.db(process.env.DB_NAME);
    console.log('Connected to database')
  });

const app = express();
const port = 5000;


app.use(bodyParser.urlencoded({
  extended: true
}));
// Folder page
app.post('/', add);
app.use(express.static(`${__dirname}/views`));
app.set("view engine", "ejs");
app.set("views", "views");

// Links to the .ejs files
app.get("/index", function (req, res) {
  res.render("index.ejs");
});
app.get('/list', function (req, res) {
  db.collection('Users')
    .find()
    .toArray(function (err, data) {
      if (err) console.log(err);
      console.log(data);
      res.render('list.ejs', {
        data: data
      });
    });
});
app.get("/add", function (req, res) {
  res.render("add.ejs");
  console.log('User has been added to the list')
});
app.get("/match", function (req, res) {
  res.render("match.ejs");
});

// Logs id's
let index = 0;
app.post("/matches", function (req, res) {
  db.collection('Users').find()
    .toArray(function (err, data) {
      if (err) console.log(err);
      let allIds = [];
      for (let i of data) {
        allIds.push(i._id);
      }
      
      // werkend maken
      console.log(req.body);
      console.log('The users ID of ' + (data[index].firstname) + ' ' + (data[index].lastname) + ' = ' + data[index]._id);
      index++;
      // console.log('This is person ' + '"' + index + '"' + ' of the database')

      if (index == allIds.length) {
        index = 0;
      }

      // console.log(data[index]);
      // console.log(req.body)

      // Random distance counter
      let randomDistance = Math.floor(Math.random() * 100);
      data[index].randomDistance = randomDistance;
      console.log('The distance is ' + data[index].randomDistance + 'km away from you');
      // console.log(data);
      res.render('swipe.ejs', {
        data: data[index]
      });
    });
});

app.post("/user", function (req, res) {
  db.collection('Users').insertOne({
    'firstname': req.body.firstname,
    'lastname': req.body.lastname,
    'email': req.body.email,
    'gender': req.body.gender,
    'age': req.body.age,
    'lookingfor': req.body.lookingfor,
    'city': req.body.city,
    'characteristics': req.body.characteristics,
  });
  res.redirect("/list");
});

function add(req, res) {
  data.push({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    gender: req.body.gender,
    age: req.body.age,
    lookingfor: req.body.lookingfor,
    city: req.body.city,
    characteristics: req.body.characteristics,
  });

  res.redirect('/list');
}

app.listen(port, function () {
  console.log(`Example app listening at http://localhost:${port}`)
});