'use strict';

let secretNumber = generateNumber;
let score = 20;
let highscore = 0;
let gameDone = false;

// +++ GAME FUNCTIONS +++

const generateNumber = function () {
  Math.trunc(Math.random() * 20) + 1;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const changeScoreAppearance = function (backgroundColor, width) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
  document.querySelector('.number').style.width = width;
};

const changeGuess = function (value) {
  document.querySelector('.guess').value = value;
};

// adds functionality to Again! button

document.querySelector('.again').addEventListener('click', function () {
  console.log('Game Reset');

  // restores values to initial
  displayNumber('?');
  score = 20;
  secretNumber = generateNumber;
  changeGuess('');
  setScore(score);
  changeScoreAppearance('#222', '15rem');
  displayMessage('Start guessing...');
  gameDone = false;
});

// adds functionality to Check! button

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // no input
  if (!guess) {
    displayMessage('No number! :(');

    // correct guess
  } else if (guess === secretNumber && gameDone == false) {
    displayNumber(secretNumber);
    displayMessage('Correct Number! :D');
    changeScoreAppearance('#60b347', '30rem');

    gameDone = true;

    // check high score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // guess is wrong
  } else if (guess !== secretNumber && gameDone == false) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high! :O' : 'Too low! :O');
      score--;
      setScore(score);
    } else {
      displayMessage('You LOST.');
      setScore(0);
    }

    // game is done
  } else if (gameDone == true) {
    displayMessage(
      'Game has already concluded. \n Press AGAIN! to play again!'
    );
  }
});
