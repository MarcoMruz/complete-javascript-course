// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// create function to return amplitude from sent data of thermometer

const temperatures = [3, 2, -6, 1, "error", 3, 13, 17, 15, 14, 9, 5];
const temperatures2 = [3, -2, 0, -1, "error", 3, 23, 7, 10, 14, 9, 5];

// PROBLEM 1

// 1) Understanding the problem
// - What is temp amplitude? - difference between min and max temperature
// - How to compute max and min temp?
// - What's sensor error? And what to do with it?

// 2) Breaking it up to subproblems
// - How to ignore errors
// - Find max from array
// - Find min from array
// Subtract min and max (amplitude) and return it

const calcAmplitude = function (temps) {
  let min = temps[0];
  let max = temps[0];

  for (const temp of temps) {
    if (typeof temp !== "number") continue;

    if (temp > max) max = temp;

    if (temp < min) min = temp;
  }

  return max - min;
};

console.log(calcAmplitude(temperatures));

// PROBLEM 1
// Function should now receive 2 arrays of temp

// 1) Understanding the problem
// - With 2 array should I implement logic twice? - no only need to merge into 1 array

// 2) Breaking it up to subproblems
// - merge 2 arrays

const calcAmplitudeForTwoArrays = function (temps, temps2) {
  const temperatures = temps.concat(temps2);

  let min = temperatures[0];
  let max = temperatures[0];

  for (const temp of temperatures) {
    if (typeof temp !== "number") continue;

    if (temp > max) max = temp;

    if (temp < min) min = temp;
  }

  return max - min;
};

console.log(calcAmplitudeForTwoArrays(temperatures, temperatures2));

// PROBLEM 3:
// given an array of forecasted maximum temperatures, the thermo meter displays a string with these temperatures

// Example : [17, 21, 23] will print "... 17 C in 1 day, ...21 C in 2 days, ...23 C in 3 days"

// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console

// 1) Understanding the problem
// - What to do with undefined, null or errors in array? - ignore those values

// Subproblems
// - read values from array
// - format values to awaited result
// - how to ignore errors

function printForecast(arr) {
  for (let i = 1; i <= arr.length; i++) {
    if (!arr[i - 1] || arr[i - 1] === "error") continue;

    console.log(`...${arr[i - 1]} C in ${i} ${formatDays(i)}`);
  }
}

function formatDays(number) {
  if (number === 1) {
    return "day";
  } else {
    return "days";
  }
}

printForecast(temperatures2);
