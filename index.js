const express = require("express");
const slug = require('slug');
const bodyParser = require("body-parser")

const app = express();
const port = 5000;

const data = [
  // {
  //   id: "the lost cavia",
  //   title: "The Lost Cavia",
  //   plot:
  //     "Stuck in a ice cube for 182 days but managed to get out by a thunderstorm.",
  //   description:
  //     "Stuck in a ice cube for 182 days but managed to get out by a thunderstorm.",
  // },
  // {
  //   id: "barbeque goes wrong III",
  //   title: "Barbeque goes wrong III",
  //   plot:
  //     "Sam came back from the grave to get his revenge and destroy them all at the local park.",
  //   description:
  //     "Sam came back from the grave to get his revenge and destroy them all at the local park.",
  // },
  // {
  //   id: "milkman wasn't a man",
  //   title: "Milkman wasn't a man",
  //   plot: "A guy that really likes to drink milk, he drinks a lot, a lot.",
  //   description: "A guy that really likes to drink milk, he drinks a lot, a lot.",
  // },
  {
    id: "thomas moffle",
    fullname: "Thomas Moffle",
    age: "23",
    description: "A guy that reall really likes goats.",
  },
  {
    id: "carl batman",
    fullname: "Carl Batman",
    age: "27",
    description: "Not from the movies, cause I'm real.",
  },
  {
    id: "melanie brinkstops",
    fullname: "Melanie Brinkstops",
    age: "24",
    description: "You can know me from Sluipschutters, but I'm just a copy.",
  },
];

app.use(bodyParser.urlencoded({extended: true}));
app.post('/', add);
app.use(express.static(`${__dirname}/views`));
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/index", (req, res) => {
  res.render("index.ejs");
});
app.get("/match", (req, res) => {
  res.render("match.ejs");
});
app.get("/list", (req, res) => {
  res.render("list.ejs", { data });
});
app.get("/add", (req, res) => {
  res.render("add.ejs", { data });
});
app.get("/head", (req, res) => {
  res.render("head.ejs", { data });
});
app.get("/detail", (req, res) => {
  res.render("detail.ejs", { data });
});
app.get("/list", (req, res) => {
  res.render("list.ejs", { data });
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
