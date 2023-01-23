'use strict';
//selecting element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const score0Cur = document.getElementById('current--0');
const score1Cur = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions
let playing = 0;
score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// current player variables

let activeScore = function () {
  return document.getElementById(`score--${activePlayer}`, 10);
}; // current  player's total score
const activeCurrent = function () {
  return document.getElementById(`current--${activePlayer}`, 10);
}; // current player's current score

//
//              ++ GAME FUNCTIONS ++
//

const setScore = function (number) {
  currentScore = number;
  activeCurrent().textContent = currentScore;
};

const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const gameReset = function () {
  currentScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  score0Cur.textContent = 0;
  score1Cur.textContent = 0;
  activePlayer = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  playing = 0;
};

//
//              ++ GAME ACTIONS ++
//

// Rolling dice
btnRoll.addEventListener('click', function () {
  if (playing !== 1) {
    // 1. Generate a dice roll (1 - 6)
    let dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display Dice

    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    // 3. Check for 1
    if (dice == 1) {
      // switching player...
      setScore(0);
      console.log('1 detected! Switching sides..');
      switchPlayer();
    } else {
      currentScore += dice;
      activeCurrent().textContent = currentScore;
      console.log(`${dice} rolled`);
    }
  } else {
  }
});

// Holding
btnHold.addEventListener('click', function () {
  if (playing !== 1) {
    // 1. add current score to total
    activeScore().textContent =
      parseInt(activeScore().textContent) +
      parseInt(activeCurrent().textContent); //fix this later?
    activeCurrent().textContent = 0;

    // 2. check if win score
    if (activeScore().textContent >= 100) {
      console.log('You win!!!');
      activePlayer === 0
        ? player0El.classList.add('player--winner')
        : player1El.classList.add('player--winner');
      playing = 1;
    } else {
      // 3. switch player
      currentScore = 0;
      switchPlayer();
    }
  } else {
  }
});

// New game
btnNew.addEventListener('click', function () {
  gameReset();
});
