const express = require('express');
const slug = require('slug');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
// Reads dotenv file
require('dotenv').config();

// Connect to the MongoDB Atlas 
let db = null;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}`;

mongodb.MongoClient.connect(uri, {
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) throw err;
    db = client.db(process.env.DB_NAME);
    console.log('Connected to database')
  });

const app = express();
const port = 5000;


// folder page
app.use(bodyParser.urlencoded({
  extended: true
}));
app.post('/', add);
app.use(express.static(`${__dirname}/views`));
app.set("view engine", "ejs");
app.set("views", "views");

// links to the .ejs files
app.get("/index", (req, res) => {
  db.collection('Users')
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        res.render('swipe.ejs', {
          data: data,
        });
      }
    });
});

app.get('/list', (req, res) => {
  db.collection('Users')
    .find()
    .toArray((err, data) => {
      if (err) console.log(err);
      console.log(data);
      res.render('list.ejs', {
        data: data
      });
    });
});
app.get("/add", (req, res) => {
  res.render("add.ejs", {
    data
  });
});

app.get("/match", (req, res) => {
  res.render("match.ejs");
});
app.post("/test", (req, res) => {
  db.collection('Users').insertOne({
    'username': req.body.username,
    'gender': req.body.gender,
    'age': req.body.age,
  });
  res.redirect("/list");
});


// eslint-disable-next-line require-jsdoc
function add(req, res) {
  data.push({
    fullname: req.body.fullname,
    age: req.body.age,
    description: req.body.description,
  });

  res.redirect('/list');
}

// .use('/', movies)
// .get('/add', form)
// .get('/:id', movie)

// function form(req, res) {
//   res.render('add.ejs')
// }

// eslint-disable-next-line no-undef
// app.get("/", index);
// eslint-disable-next-line no-use-before-define
// app.get("/profile/:name", files);

// NOT NEEDED AT THE MOMENT
// function files(req, res) {
//   if (req.params === "mp3") {
//     res.send("Send mp3 file!");
//   } else if (req.params === "image") {
//     res.send("Send image file!");
//   } else if (req.params === "pdf") {
//     res.send("Send pdf file!");
//   } else {
//     res.send("Nothing");
//   }
// }

// function files(req, res) {
//     console.log('Hey');
//     escape.send('Hello files');
// }

// app.get('/home', (req, res) => res.sendFile(__dirname + '/index.html'))
// app.use(express.static(__dirname + ''));

// app.get('/about', (req, res) => res.send('This is the about page.'))
// app.get('/contact', (req, res) => res.send('This is the contact page.'))
// app.get('/test', (req, res) => {
//     res.send('This is the test page with console.');
//     console.log(req.headers.host + req.url);
// })

// app.get('/mp3', (req, res) => {
//     res.sendFile(__dirname + '/0001.mp3');
//     console.log(req.headers.host + req.url);
// })
// app.get('*', (req, res) => res.send('404 Page not loading...'))

// eslint-disable-next-line no-console
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);