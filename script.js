'use strict';

// Creating a rondom number between 1 and 20, Trunc used to reomce deccimals after whole number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 5;

let highScore = 0;

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
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //Tracking Highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

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

// Reseting the game once user clicks "Again" button
document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#000000';
  document.querySelector('.number').style.width = '15rem';
});
