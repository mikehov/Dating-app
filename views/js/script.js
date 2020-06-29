console.log('Javascript works');

const data = document.querySelectorAll('.listsearch');
// eslint-disable-next-line no-unused-vars
const characteristics = document.querySelectorAll('.characteristics');

const inputField = document.querySelector('input');
inputField.addEventListener('input', function(event) {
  const karel = inputField.value;

  for (i = 0; i < data.length; i++) {
    const allItems = data[i];
    const allCharacteristics = allItems.dataset.characteristics;
    // console.log(allItems.dataset.characteristics.split(','));
    if (allCharacteristics.indexOf(karel) > -1) {
      allItems.classList.remove('invisible');
    } else {
      allItems.classList.add('invisible');
    }
  }
});

// voorbeeld van een filterFunctie
// eslint-disable-next-line no-unused-vars

// const filtered = data.filter(function(person) {
//   console.log('this is the person', person);
// });

// Random distance counter
// eslint-disable-next-line require-jsdoc
// function randomCounter() {
//   const randomDistance = Math.floor(Math.random() * 100);
//   return randomDistance;
// };

// console.log(randomCounter());
// document.querySelector('.person-information p:nth-child(3)').innerHTML = randomCounter() + 'km away from you';

// Search filter

// const usersList = [
//   {
//     'name': 'Karen',
//     'age': 22,
//     'picture': 'photo-dummy.png',
//     'characteristics': ['cute', 'calm', 'warm'],
//   },
//   {
//     'name': 'Andre',
//     'age': 26,
//     'picture': 'photo-dummy.png',
//     'characteristics': ['nice', 'damm', 'wow'],
//   },
//   {
//     'name': 'Peter',
//     'age': 27,
//     'picture': 'photo-dummy.png',
//     'characteristics': ['lovely', 'stubborn', 'amazing'],
//   },
// ];

// const inputField = document.querySelector('input');
// inputField.addEventListener('keydown', function(event) {
// characters.push(event.key);
// // hier zie je dus de letter die de gebruiker intikt..
// });

// // voorbeeld van een filterFunctie
// const filtered = data.filter( function(person) {
// console.log('this is the person', person);
// });





// const theFilter = usersList.filter(function(something) {
//     if (usersList.characteristics.includes(${searchQuery}) {
//     return usersList;
// });


// return something.characteristics[0] === 'lovely';
// const filtered = users.filter((user) => { if (user.char.includes(${searchQuery}) return user}

// eslint-disable-next-line require-jsdoc
// function filter() {
//   var filterValue, input, ul,li,a,i;
//      input = document.getElementById("search");
//      filterValue = input.value.toUpperCase();
//     ul = document.getElementById("Menu");
//      li = ul.getElementsByTagName("li");
    
//         for (i = 0 ; i < li.length ; i++){
//             a = li[i].getElementsByTagName("a")[0];
//             if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
//                 li[i].style.display = "";
    
//             }else{
//                 li[i].style.display = "none";
//             }
//         }
//     }


// usersList.filter function((usersList) {
//   if (user.char.includes(${searchQuery})
//   return usersList;
// });
