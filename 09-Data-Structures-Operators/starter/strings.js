'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats

  const s = seat.slice(-1);

  if (s === 'B' || s === 'E') {
    console.log('It is middle seat');
  } else {
    console.log('You lucky');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('11C');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'JoNaS'; // Jonas
const lowerPass = passenger.toLowerCase();
const passCorrect = lowerPass[0].toUpperCase() + lowerPass.slice(1);

console.log(passCorrect);

const email = 'marcomruz@gmail.com';
const loginEmail = '    MarcoMruz@gmail.com \n';

const correctEmail = loginEmail.toLowerCase().trim();

console.log(correctEmail === email);

const priceGB = '288,97L';
const priceUS = priceGB.replace('L', 'USD').replace(',', '.');

console.log(priceGB, priceUS);

console.log('ahoj ako sa mi mas ahoj'.replaceAll('ahoj', 'hi'));
console.log('ahoj ako sa mi mas ahoj'.replace(/ahoj/g, 'hi'));

const checkBaggage = function (items) {
  items = items.toLowerCase();

  return items.includes('knife') || items.includes('gun');
};

console.log(checkBaggage('I have a laptop, some Food and a pocket Knife'));
console.log(checkBaggage('Socks and camera'));
console.log(checkBaggage('Got some snacks and a gun for protection'));

const [firstName, lastName] = 'Marco Mruz'.split(' ');

const newName = ['Mr.', firstName, lastName].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const word of names) {
    namesUpper.push(word[0].toUpperCase() + word.slice(1));
  }

  console.log(namesUpper.join(' '));
};

capitalizeName('marco mruz');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '-').padEnd(35, '-'));

const maskCreditCard = function (number) {
  const str = number + '';
  const lastFour = str.slice(-4);

  console.log(lastFour.padStart(str.length, '*'));
};

maskCreditCard(1234567890);

// Repeat
const message2 = 'Bad weather... All departures delayed';

console.log(message2.repeat(5));

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const textFromTextarea = document.querySelector('textarea').value;
  const arr = textFromTextarea.split('\n');
  let checkMark = '';

  for (let [i, word] of arr.entries()) {
    let [first, second] = word.trim().toLowerCase().split('_');
    second = second[0].toUpperCase() + second.slice(1);
    checkMark += '✅';
    console.log(first.concat(second).padEnd(20) + checkMark);
  }
});
