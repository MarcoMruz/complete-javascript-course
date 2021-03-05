// 'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH1234', 3);
// createBooking('LH4321', 2, 300);

// const flight = 'LH23';
// const jonas = {
//   name: 'Marco Mruz',
//   passport: 9208012381,
// };

// const checkIn = function (flightNum, passenger) {
//   (flightNum = 'LH999'), (passenger.name = 'MR.' + passenger.name);

//   if (passenger.passport === 9208012381) {
//     console.log('good to go');
//   } else {
//     console.log('nah you cannot go');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const oneWord = str => {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = str => {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = (str, fn) => {
//   return fn(str);
// };

// console.log(transformer('Javascript is da best!', oneWord));
// console.log(transformer('Javascript is da best!', upperFirstWord));

// const greet = greeting => {
//   return name => {
//     console.log(name + ' ' + greeting);
//   };
// };

// greet('yo')('Marco');

// const greetings = greet => name => console.log(`${greet} ${name}`);

// greetings('Yo')('Justin');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//   },
// };

// lufthansa.book(239, 'Marco Mruz');

// const book = lufthansa.book;

// const eurowings = {
//   airline: 'EuroWings',
//   iataCode: 'EW',
//   bookings: [],
//   book,
// };

// book.call(eurowings, 23, 'Jozko Mrkvicka');

// const arrFlight = [583, 'Debilko Maly'];

// book.apply(eurowings, arrFlight);
// book.call(lufthansa, ...arrFlight);

// // BIND method

// const bookEW = book.bind(eurowings);

// bookEW(23412, 'Steve Jobs');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Marco Mruz');

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   this.planes++;
//   console.log(lufthansa.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// // const addVAT = addTax.bind(null, 0.23);

// const addVAT = value => addTax(0.23, value);

// console.log(addVAT(200));

// // console.clear();

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     const answer = +prompt(
//       `${this.question}\n
//       ${this.options.join('\n')}
//       (Write option number)`
//     );

//     if (answer < 4 && answer >= 0) {
//       const copiedAnswers = [...this.answers];

//       copiedAnswers[answer]++;

//       this.answers = copiedAnswers;
//     }

//     const result = displayResult.bind(this);
//     result('string');
//   },
// };

// function displayResult(type = 'array') {
//   if (type === 'array') {
//     console.log(`Poll results are ${this.answers}`);
//   } else {
//     console.log(`Poll results are ${this.answers.join(', ')}`);
//   }
// }

// const button = document.querySelector('.poll');
// button.addEventListener('click', () => {
//   poll.registerNewAnswer();
// });

// function runOnce() {
//   console.log('yo');
// }

// (function () {
//   console.log('geno');
// })();

// // Closures

// const secureBooking = function () {
//   let passengers = 0;
//   return function () {
//     passengers++;
//     console.log(`${passengers} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

let f;

const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

g();
f(); // 46

function h() {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
}

// Re-assigning f function
h();
f(); // 1554

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(() => {
    console.log(`We are now boarding all ${n} passengers`);
  }, 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();
