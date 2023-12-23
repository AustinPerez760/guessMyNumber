'use strict';

// Creating a rondom number between 1 and 20, Trunc used to reomce deccimals after whole number
const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 5;

//displaying number behing 'Question Mark'
document.querySelector('.number').textContent = secretNumber;
//handling on-click for the check buttonß
document.querySelector('.check').addEventListener('click', function () {
  //converting string to a number and saving as variable
  const guess = Number(document.querySelector('.guess').value);

  //converting boolean from false to true since guess is = 0
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎊 Correct Number';
    score++;
    document.querySelector('.score').textContent = score;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER ❌';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER ❌';
      document.querySelector('.score').textContent = 0;
    }
  }
});
