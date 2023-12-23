'use strict';

// Creating a rondom number between 1 and 20, Trunc used to reomce deccimals after whole number
const secretNumber = Math.trunc(Math.random() * 20) + 1;

//displaying number behing 'Question Mark'
document.querySelector('.number').textContent = secretNumber;
//handling on-click for the check buttonß
document.querySelector('.check').addEventListener('click', function () {
  //converting string to a number and saving as variable
  const guess = Number(document.querySelector('.guess').value);

  //converting boolean from false to true since guess is = 0
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too High!';
  } else if (guess < secretNumber)
    document.querySelector('.message').textContent = 'Too Low!';
});
