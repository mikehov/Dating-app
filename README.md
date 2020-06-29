# Read me :)

## Concept Dating-app
_When I'm chilling in my room listening to my music playlist, I want to be notified that I have a match, so I can see who it is and maybe get to know them._

This dating-app is about the feature "swiping" and "notifications". Its a casual dating-app with swiping people to the left if your not interested or to the right if you are interested. You will get a notification if you have a match.

## Installing the Dating-app project
1. Download or Clone my repository and set it up in te correct folder. 
2. Go to your terminal and go to the correct folder. (tip: use `pwd` and `cd` to do so.)
3. Install npm by typing `npm install`.
4. To run the project, type: `nodemon index.js` or `npx nodemon index.js`.

## Documentation
To find the documentation, check out my wiki page of my repository. 
https://github.com/mikehov/Dating-app/wiki

## Features
_The Dating-app provides some features, here are some insights of those features._

**Index/Login (prototype)**:
On the index page (login page), you can login by typing your email-adress, that exist in database. If you don't have an account yet, you can create one. This is just a prototype of the app to visualize the login.

![Index/login page](https://raw.githubusercontent.com/wiki/mikehov/Dating-app/images/page-index.png "Index page")

**Swiping**:
You can tab on the _red_, _purple_ or _green_ button to dislike, superlike or like people. All the information you see, sits in the database. You can see what type of information is getting stored in the table of the-data structure underneath. 
* Dislike: By disliking a person, you are not interested and go to the next one.
* Superlike or Liking: By superliking or liking a person, you will have a chance to get a match, if the other person likes you back. You guys will match and you will get a notification the next time you swipe that person. If one out of the two doesn't press the superlike or like button, there won't be a match. 

![Swipe page](https://raw.githubusercontent.com/wiki/mikehov/Dating-app/images/page-swipe.png "Swipe page")

**Add**:
You can add someone to the database by filling the input fields, not every field is required, except for: firstname, lastname, email and gender. If you added someone, you can see that person in the appearing in the list, also the database receives an new person, information that's not filled in will not be shown int the database.

![Add user page](https://raw.githubusercontent.com/wiki/mikehov/Dating-app/images/page-add.png "Add page")

**Notification**:
If you and the other person both liked eachother, you will get a direct notification that you have a match the next time you have swiped that person. 

![Match page](https://raw.githubusercontent.com/wiki/mikehov/Dating-app/images/page-match.png "Match page")

**List**:
There is a list with all the users of the database, you can add users by pressing "Add users" or going to the add page.

![List page](https://raw.githubusercontent.com/wiki/mikehov/Dating-app/images/page-list.png "List page")

## Data structure
| **Data**           | **Value**                      | **Type**         |
|--------------------|--------------------------------|------------------|
| _id                | randomIdCode                   | objectID         |
| firstname          | Melanie                        | String           |
| lastname           | Brinkhaltes                    | String           | 
| email              | melaniebrinkhaltes@outlook.com | String           | 
| gender             | female                         | String           | 
| age                | 22                             | Int32            | 
| city               | Zaandam                        | String           | 
| characteristics    | 0:excited, 1:happy, 2:godess   | Array            | 
| picture            | photo-melanie.png              | String           | 
| likes              | userid1:1, userid2:0,          | Object           | 


## Sources
AWS Simplified. (2020, February 10). SQL vs NoSQL Explained [Video file]. YouTube. Retrieved from https://www.youtube.com/watch?v=ruz-vK8IesE&t=310s

Bitovi. (n.d.). Tinder Carousel | intermediate recipes | Guides | CanJS — Build CRUD apps in fewer lines of code. Retrieved June 2, 2020, from https://canjs.com/doc/guides/recipes/tinder-carousel.html

Blex, A. (2017, December 4). mongodb append to an existing object [Post]. Retrieved from https://stackoverflow.com/questions/47631912/mongodb-append-to-an-existing-object

Box Shadow CSS Generator | CSSmatic. (n.d.). Retrieved May 10, 2020, from https://www.cssmatic.com/box-shadow 

Claire is seasoned technical writer, editor, and HTML enthusiast. She writes for HTML.com and runs a content agency, Red Robot Media. (n.d.). Attribute for METHOD = GET | POST. Retrieved May 26, 2020, from https://html.com/attributes/form-method/

de Vries, D. (n.d.-a). lecture-3. Retrieved June 2, 2020, from https://docs.google.com/presentation/d/1PJTtYNOFw8n9Zr54kBiabNpb777QDMNJIFt0bKVR__Q/edit#slide=id.g4e3b0a74b9_1_416

de Vries, D. (n.d.). lecture-4. Retrieved June 2, 2020, from https://docs.google.com/presentation/d/1J0SVcx7rMnFp37JqsQMHQq92EfBRUFdgSAj5i9wQKjg/edit#slide=id.g85a98fc989_0_63

Fialho, F. (n.d.). Animate “height” with CSS Transitions. Retrieved June 29, 2020, from https://codepen.io/felipefialho/pen/ICkwe?editors=1100

freeCodeCamp.org. (2018, October 25). Let’s Build a Tinder-Like Swipe Carousel [Video file]. In YouTube. Retrieved from https://www.youtube.com/watch?v=Iz6W4HizXq8

Code that the teacher Janno Kapritsias helped with:
```
		inputField.addEventListener('keydown', function (event) {
			characters.push(event.key);
			// hier zie je dus de letter die de gebruiker intikt..
		});
```

Linear Gradient CSS. (n.d.). Retrieved May 10, 2020, from https://cssgradient.io/

MongoDB. (n.d.-b). Managed MongoDB Hosting | Database-as-a-Service. Retrieved June 2, 2020, from https://www.mongodb.com/cloud/atlas

MongoDB. (n.d.-b). Connect to MongoDB. Retrieved June 2, 2020, from https://docs.mongodb.com/guides/server/drivers/

MongoDB. (2020, June 3). db.collection.update() — MongoDB Manual [Formpost]. Retrieved from https://docs.mongodb.com/manual/reference/method/db.collection.update/ Code:
```
db.products.update(
   { _id: 100 },
   { $set:
      {
        quantity: 500,
        details: { model: "14Q3", make: "xyz" },
        tags: [ "coats", "outerwear", "clothing" ]
      }
   }
)
```

npmjs. (2019, April 26). npm: body-parser. Retrieved June 2, 2020, from https://www.npmjs.com/package/body-parser

npmjs. (2020, March 15). npm: cookie-parser. Retrieved June 21, 2020, from https://www.npmjs.com/package/cookie-parser

Code that the student Sam de Kanter helped with:
```
const allCharacteristics = allItems.dataset.characteristics;
allItems.classList.add('invisible');
```

Sarzyński, Ł. (n.d.). fill HTML forms without JavaScript. Retrieved May 26, 2020, from https://dev.to/lukaszsarzynski/fill-html-forms-without-javascript-4d24

Session Authentication in Express. (2018, November 17). [Video file]. Retrieved from https://www.youtube.com/watch?v=OH6Z0dJ_Huk&t=231s

SVG drop shadow using css3. (2011, May 22). Retrieved May 10, 2020, from https://stackoverflow.com/questions/6088409/svg-drop-shadow-using-css3

Ruizendaal, R. (n.d.). RowinRuizendaal/project-tech. Retrieved May 20, 2020, from https://github.com/RowinRuizendaal/project-tech

Code that the student Rowin Ruizendaal helped with:
```
app.post('/login', (req, res) => {
  const username = req.body.email;
  console.log(req.body);
  db.collection('Users').findOne({
    'email': username,
  }, (err, result) => {
    if (err) console.log(err);
    if (result) {
      console.log(result);
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

function add(req, res) {
  data.push({
    fullname: req.body.fullname,
    age: req.body.age,
    description: req.body.description,
  });

  res.redirect('/list');
}

mongodb.MongoClient.connect(uri, {
    useUnifiedTopology: true,
  },
  function (err, client) {
    if (err) throw err;
    db = client.db(process.env.DB_NAME);
    console.log('Connected to database')
  });
```

w3schools. (n.d.-a). How To Create a Filter/Search List. Retrieved June 29, 2020, from https://www.w3schools.com/howto/howto_js_filter_lists.asp

_There are more sources inside my wiki documents themselves, these sources are only based on the code of the project._

#### Pictures
Christopher, T. (2017, May 21). Toby Christopher [Photo]. Retrieved from https://unsplash.com/photos/P-CeaGknSJA

Hefitiba, T. (2018, February 5). Toa Heftiba [Photo]. Retrieved from https://unsplash.com/photos/O3ymvT7Wf9U

Hiles, S. (2017, December 26). Sonnie Hiles [Photo]. Retrieved from https://unsplash.com/photos/gG70fyu3qsg

Jensen, D. (2017, August 15). Daniel Jensen [Photo]. Retrieved from https://unsplash.com/photos/tQpypKA92k8

Kobalasingam, H. (2018, November 8). Harishan Kobalasingam [Photo]. Retrieved from https://unsplash.com/photos/8PMvB4VyVXA

90, A. P. X. (2017, September 28). man standing. Retrieved June 21, 2020, from https://unsplash.com/photos/At__EKm5PGE
