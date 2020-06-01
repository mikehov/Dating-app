console.log('JavaScript works!');

// document.querySelectorAll('label').addEventListener('click', () => {
//     console.log('test');
// });

function likingButtons() {
    for (let i = 0; i < document.querySelectorAll('button').length; i++) {
        document.querySelectorAll('button')[i].addEventListener('click', troep);
    }
}
likingButtons();

function troep() {
    console.log('Click');
}
