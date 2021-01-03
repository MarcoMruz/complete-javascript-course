'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 15;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let guessedNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } else if (guess === guessedNumber) {
    // user wins
    changeTextContentOfElement('.message', 'Correct number');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    changeTextContentOfElement('.number', guessedNumber);
  } else if (guess !== guessedNumber) {
    // when user is wrong

    if (score > 0) {
      changeTextContentOfElement(
        '.message',
        guess > guessedNumber ? 'TOO HIGH' : 'TOO LOW'
      );
      score--;
      changeTextContentOfElement('.score', score);
    } else {
      changeTextContentOfElement('.message', 'You lost the game');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // reseting score and setting highscore
  if (score > highscore) {
    highscore = score;
  }
  score = 20;

  guessedNumber = Math.trunc(Math.random() * 20 + 1);

  changeTextContentOfElement('.highscore', highscore);

  // reset styling
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  // reset text
  changeTextContentOfElement('.score', score);
  changeTextContentOfElement('.message', 'Start guessing...');
  changeTextContentOfElement('.number', '?');
  document.querySelector('.guess').value = '';
});

function changeTextContentOfElement(selector, str) {
  document.querySelector(selector).textContent = str;
}
