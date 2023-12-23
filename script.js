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

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎊 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    score++;
    document.querySelector('.score').textContent = score;

    //When guess is to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      document.querySelector('body').style.backgroundColor = '#ff0000';
      document.querySelector('.number').style.width = '30rem';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER ❌';
      document.querySelector('body').style.backgroundColor = '#808080';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.score').textContent = 0;
    }

    //When guess is to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      document.querySelector('body').style.backgroundColor = '#ff0000';
      document.querySelector('.number').style.width = '30rem';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER ❌';
      document.querySelector('body').style.backgroundColor = '#808080';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.score').textContent = 0;
    }
  }
});
