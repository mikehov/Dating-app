// Random distance counter
// eslint-disable-next-line require-jsdoc
function randomCounter() {
  const randomDistance = Math.floor(Math.random() * 100);
  return randomDistance;
};

console.log(randomCounter());

// eslint-disable-next-line max-len
document.querySelector('.person-information p:nth-child(3)').innerHTML = randomCounter() + 'km away from you';
