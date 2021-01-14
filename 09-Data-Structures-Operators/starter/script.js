'use strict';

const weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [`${weekDays[2 - 1]}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starter, main) {
    return [this.starterMenu[starter], this.mainMenu[main]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(starterIndex, mainIndex, address, time);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(ing1, ing2, ing3);
  },

  orderPizza(mainIngredient, ...otherIng) {
    console.log(mainIngredient);
    console.log(otherIng);
  },
};

// optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  const close = restaurant.openingHours[day]?.close ?? 'closed';
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'not there');
console.log(restaurant.orderSkap?.(0, 1) ?? 'not there');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'empty');

// looping objects

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// property values
const values = Object.values(openingHours);
console.log(values);

// entire object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 1,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating vars
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;

// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 3, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default Values
// const [p = 1, g = 1, r = 1] = [8, 9];
// console.log(p, g, r);

// SPREAD OPERATOR

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];

// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // join 2 array or more
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const str = 'Jonas';
// const letters = [...str, ' ', 'S'];

// console.log(letters);
// console.log(...str);

// // const ingredients = [
// //   prompt('Lets make pasta! 1'),
// //   prompt('Lets make pasta! 2'),
// //   prompt('Lets make pasta! 3'),
// // ];
// // restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { ...restaurant, founder: 'Giusseppe', foundedIn: 1998 };
// console.log(newRestaurant);

// newRestaurant.name = 'Verdi Italiano';

// console.log(newRestaurant.name);
// console.log(restaurant.name);

// const anotherArr = [1, 2, ...[3, 4, 5]];

// // REST operator is when ... are on left handside
// const [f, g, ...others] = anotherArr;

// console.log(f, g, others);

// // objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// // functions
// const addNumbers = function (...numbers) {
//   let sum = 0;

//   for (const number of numbers) {
//     sum += number;
//   }

//   return sum;
// };

// console.log(addNumbers(1, 2));

// const x = [1, 2, 3, 4, 5];
// console.log(addNumbers(...x));

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// && || operators
// || return first true value
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(undefined || 0);

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('-----AND-----');
// // && return first false value or last true value
// console.log(0 && 'Jonas');
// console.log(1 && 'Jonas');
// console.log('Hello' && 1 && null && 'jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('kokotko', 'nani');

// nullish coalescing operator skip to the next value only when null or undefined
// console.log('---nullish---');
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// CODING CHALLENGE

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;

const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;

const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

function printGoals(...players) {
  console.log(players.length);
  for (const [goal, player] of players.entries()) {
    console.log(`Goal ${goal + 1}: ${player}`);
  }
}

// printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
printGoals(...game.scored);

const score = game.score.split(':');

// team1 < team2 && console.log('More likely to win: ' + game.team1);
// team1 > team2 && console.log('More likely to win: ' + game.team2);

// for (const [index, value] of allPlayers.entries()) {
//   console.log(`${index + 1} : ${value}`);
// }

// console.log(...allPlayers.entries());

const oddValues = Object.values(game.odds);
let aveg = 0;
for (const odd of oddValues) {
  aveg += odd;
}
aveg /= oddValues.length;

console.log(aveg);

for (const [team, value] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${game[team] ? 'victory' : 'draw'} ${game[team] ?? ''}: ${value}`
  );
}

const scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);
