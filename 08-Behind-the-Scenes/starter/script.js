'use strict';

// function calcAge(birthYear) {
//   const age = 2021 - birthYear;

//   function printAge() {
//     let output = `${firstName} you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const firstName = 'Steven';
//       output = 'NEW OUTPUT!';
//       const str = `Oh, and you are a millenial also, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       // console.log(add(1, 2));
//     }
//     console.log(output);
//   }

//   printAge();
//   return age;
// }

// const firstName = 'Marco';

// calcAge(1994);

// var me = 'Marco';
// let job = 'student';
// const year = 1999;

// console.log(me, job, year);

// console.log(addDecl(1, 2));
// // console.log(addExpr(1, 2));
// // console.log(addArrow(1, 2));

// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };
// var addArrow = (a, b) => a + b;

// // Example

// if (!numProducts) {
//   deleteShoppingCart();
// }

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1999);
// calcAgeArrow(1999);
var firstName = 'Matilda';

const jonas = {
  year: 1991,
  firstName: 'Jonas',
  calcAge: function () {
    console.log(this);
    console.log(2038 - this.year);

    // const self = this;
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};
// jonas.greet(); // prints Matilda
// jonas.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

// addExpr(2, 5);

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

let age = 30;
let oldAge = age;
age = 31;

// console.log(age);
// console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = Object.create(me);
friend.age = 27;

// console.log(friend);
// console.log(me);

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

// console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
// console.log('married', marriedJessica.lastName);
// console.log('single', jessica.lastName);

// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopied = Object.assign({}, jessica2);
jessicaCopied.lastName = 'Davis';

console.log('married', jessica2);
console.log('single', jessicaCopied);

jessicaCopied.family.push('Mary');

console.log(jessicaCopied);
