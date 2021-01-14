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

const orderSet = new Set([
  'pasta',
  'pizza',
  'risotto',
  'pasta',
  'risotto',
  'pizza',
]);
console.log(orderSet);
console.log(new Set('Jonas'));

console.log(orderSet.size);
console.log(orderSet.has('pizza'));
console.log(orderSet.has('bread'));

orderSet.add('bread');
orderSet.add('bread');

console.log(orderSet);
orderSet.delete('risotto');
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(staff).size);

console.log(new Set('marcomruz').size);

// MAPS

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Fiorence');
rest.set(2, 'Roma');

console.log(rest);

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we opened')
  .set(false, 'we closed');

console.log(rest);

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 24;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);

console.log(rest.size);

rest.set([1, 2], 'Test');
console.log(rest.get([1, 2])); // not the same keys because do not have the same address in memory

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

const question = new Map([
  ['question', 'Da best language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'absolutely correct'],
  [false, 'Noob'],
]);

console.log(question);

// Convert from object to map
const hours = new Map(Object.entries(openingHours));
console.log(hours);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer is ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(`You are ${question.get(question.get('correct') === answer)}`);

// Convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time2 = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time2 / gameEvents.size} minutes`
);

for (const [minutes, event] of gameEvents) {
  console.log(
    `[${minutes <= 45 ? 'FIRST HALF' : 'SECOND HALF'}] ${minutes}: ${event}`
  );
}
