// Random distance counter
// eslint-disable-next-line require-jsdoc
function randomCounter() {
  const randomDistance = Math.floor(Math.random() * 100);
  return randomDistance;
};

console.log(randomCounter());

// eslint-disable-next-line max-len
document.querySelector('.person-information p:nth-child(3)').innerHTML = randomCounter() + 'km away from you';

// const listCharacteristics = ['happy', 'cool', 'kind', 'friendly', 'clever', 'gentle', 'polite', 'original'];

// // eslint-disable-next-line require-jsdoc
// function calcRandomCharacteristics() {
//   const randomCharacteristic = listCharacteristics[Math.floor(Math.random() * listCharacteristics.length)];
//   return randomCharacteristic;
// }

// // eslint-disable-next-line max-len
// document.querySelector('.person-information div p:nth-child(1)').innerHTML = calcRandomCharacteristics();
// document.querySelector('.person-information div p:nth-child(2)').innerHTML = calcRandomCharacteristics();
// document.querySelector('.person-information div p:nth-child(3)').innerHTML = calcRandomCharacteristics();

// console.log(calcRandomCharacteristics());