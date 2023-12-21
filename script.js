'use strict';
// Manipulating text content for one of theDOM nodes
document.querySelector('.message').textContent = 'Correct Number';

//handling on-click for the check button
document.querySelector('.check').addEventListener('click', function () {
  //converting string to a number and saving as variable
  const guess = Number(document.querySelector('.guess').value);

  //converting boolean from false to true
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }
});
