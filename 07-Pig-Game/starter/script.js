'use strict';

// selecting elements

const player0Elem = document.querySelector('.player--0');
const player1Elem = document.querySelector('.player--1');

const score0Elem = document.getElementById('score--0');
const score1Elem = document.getElementById('score--1');

const curr0Elem = document.getElementById('current--0');
const curr1Elem = document.getElementById('current--1');

const diceElem = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

// Starting conditions
let currentScore, activePlayer, scores, isGameFinished;

const init = function () {
  diceElem.classList.add('hidden');

  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  isGameFinished = false;

  score0Elem.textContent = 0;
  score1Elem.textContent = 0;
  curr0Elem.textContent = 0;
  curr1Elem.textContent = 0;

  player0Elem.classList.add('player--active');
  player1Elem.classList.remove('player--active');

  player0Elem.classList.remove('player--winner');
  player1Elem.classList.remove('player--winner');
};

init();

// rolling functionality
btnRoll.addEventListener('click', function () {
  if (!isGameFinished) {
    // 1. generating randim dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. display dice
    diceElem.classList.remove('hidden');
    diceElem.src = `dice-${dice}.png`;

    // 3. check for rolled 1:
    if (dice !== 1) {
      // add dice to the curr score
      currentScore += dice;

      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // if true, switch to the next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (!isGameFinished) {
    // 1. add current score to active player score
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. check if players score is equal or above 100
    if (scores[activePlayer] >= 100) {
      // finish the game
      isGameFinished = true;
      diceElem.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 3. switch to the next player
      switchPlayer();
    }
  }
});

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Elem.classList.toggle('player--active');
  player1Elem.classList.toggle('player--active');
}

btnNew.addEventListener('click', function () {
  init();
});
