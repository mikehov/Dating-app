// All the packages
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const objectId = mongodb.ObjectID;
require('dotenv').config();


// Connect to the MongoDB Atlas Database
let db = null;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}`;

mongodb.MongoClient.connect(uri, {
  useUnifiedTopology: true,
},
function(err, client) {
  if (err) throw err;
  db = client.db(process.env.DB_NAME);
  console.log('Connected to database');
});

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: true,
}));

// session cookieParser
app.use(cookieParser());
app.use(
    session({
      secret: 'Prototype',
      resave: true,
      saveUninitialized: false,
      cookie: {
        maxAge: 3600000,
      },
    }),
);

// Folder page
app.post('/', add);
app.use(express.static(`${__dirname}/views`));
app.set('view engine', 'ejs');
app.set('views', 'views');


// Links to the .ejs files
// Homescreen
app.get('/index', function(req, res) {
  console.log('This is the index page, let\'s start swiping!');
  res.render('index.ejs');
});
// List with all users from the database
app.get('/list', function(req, res) {
  db.collection('Users')
      .find()
      .toArray(function(err, data) {
        if (err) console.log(err);
        console.log(data);
        res.render('list.ejs', {
          data: data,
        });
      });
});
// Add a user page to the database
app.get('/add', function(req, res) {
  res.render('add.ejs');
  console.log('User has been added to the list');
});
// You have a match with someone page
app.get('/match', function(req, res) {
  res.render('match.ejs');
});

app.post('/login', (req, res) => {
  const username = req.body.email;
  db.collection('Users').findOne({
    'email': username,
  }, (err, result) => {
    if (err) console.log(err);
    if (result) {
      req.session.user = result;
      req.session.save(function(err) {
        res.render('swipe', {
          data: req.session.user,
        });
      });
    } else {
      res.redirect('/index');
    }
  });
});


let index = 0;
// first time loading the page
app.get('/swipe', async (req, res) => {
  const users = await db
      .collection('Users')
      .find({_id: {$ne: objectId(req.session.user._id)}})
      .toArray();

  if (index == users.length) {
    index = 0;
  }

  res.render('./swipe.ejs', {data: users[index]});
});

// keeps track off every swipe and goes to the next
app.post('/swipe', async (req, res) => {
  const users = await db
      .collection('Users')
      .find({_id: {$ne: objectId(req.session.user._id)}})
      .toArray();
  index++;

  // if you superliked(1) or liked(2) that person, it will be saved
  if (req.body.liking == 1 || req.body.liking == 2) {
    await db.collection('Users').updateOne({
      '_id': objectId(req.session.user._id),
    }, {
      $push: {
        likes: users[index -1]._id,
      },
    }, (err, result) => {
      if (err) console.log(err);
      if (result) {
        console.log('You liked the person ' + `${users[index-1].firstname}` + ' ' + `${users[index-1].lastname}`);
      }
    });
    const checkLike = await db
        .collection('Users')
        // eslint-disable-next-line max-len
        .find({_id: objectId(users[index -1]._id), likes: objectId(req.session.user._id)})
        .toArray();

    // checks if they liked you to
    if (checkLike && checkLike.length > 0) {
      console.log(`You have a match with: ` + `${users[index-1].firstname}` + ' ' + `${users[index-1].lastname}` + ' ' + `${users[index-1]._id}`);
      res.render('./match.ejs', {data: users[index -1]});
      return;
    }
    // if you disliked(0) that person, it will be saved
  } else {
    await db.collection('Users').updateOne({
      '_id': objectId(req.session.user._id),
    }, {
      $push: {
        dislikes: users[index -1]._id,
      },
    }, (err, result) => {
      if (err) console.log(err);
    });
    console.log('Probably not your type of person.');
  }

  // checks if you reaced the end of all the users
  if (index == users.length) {
    // console.log('There are no new matches coming, you have reached the end');
    index = 0;
    res.render('./swipe.ejs', {data: users[index]});
    return;
  }
  res.render('./swipe.ejs', {data: users[index]});
  return;
});

// adds the user information to the list
app.post('/user', function(req, res) {
  db.collection('Users').insertOne({
    'firstname': req.body.firstname,
    'lastname': req.body.lastname,
    'email': req.body.email,
    'gender': req.body.gender,
    'age': req.body.age,
    'lookingfor': req.body.lookingfor,
    'city': req.body.city,
    'characteristics': req.body.characteristics,
    'picture': 'photo-dummy.png',
  });
  res.redirect('/list');
});

// adds the user to the list
// eslint-disable-next-line require-jsdoc
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

app.listen(port, function() {
  console.log(`Example app listening at http://localhost:${port}`)
});