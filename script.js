'use strict';

// Creating a rondom number between 1 and 20, Trunc used to reomce deccimals after whole number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 10;

let highScore = 0;

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

const displayScore = (currentScore) => {
  document.querySelector('.score').textContent = currentScore;
};

//handling on-click for the check buttonß
document.querySelector('.check').addEventListener('click', function () {
  //converting string to a number and saving as variable
  const guess = Number(document.querySelector('.guess').value);

  //converting boolean from false to true since guess is = 0
  if (!guess) {
    displayMessage('🚫 No number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🏆 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //Tracking Highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('GAME OVER 💣');
      document.querySelector('body').style.backgroundColor = '#ff0000';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Reseting the game once user clicks "Again" button
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing...');
  document.querySelector('.number').textContent = '?';
  displayScore(score);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#000000';
  document.querySelector('.number').style.width = '15rem';
});
