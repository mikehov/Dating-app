console.log('Javascript works');

// selecting the html elements
const data = document.querySelectorAll('.listsearch');
const characteristics = document.querySelectorAll('.characteristics');

// selecting the inputfield, checks if the value changes of the input field
const inputField = document.querySelector('input');
inputField.addEventListener('input', function(event) {
  const letters = inputField.value;

  // loops through all users
  for (i = 0; i < data.length; i++) {
    const allItems = data[i];
    const allCharacteristics = allItems.dataset.characteristics;
    // if the letters are matching the characteristics, keep the item visible, otherwise make it invisible
    if (allCharacteristics.indexOf(letters) > -1) {
      allItems.classList.remove('invisible');
    } else {
      allItems.classList.add('invisible');
    }
  }
});
