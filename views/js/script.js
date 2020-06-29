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
