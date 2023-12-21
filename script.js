'use strict';
// Manipulating text content for one of theDOM nodes
document.querySelector('.message').textContent = 'Correct Number';

//handling on-click for the check button
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
});
