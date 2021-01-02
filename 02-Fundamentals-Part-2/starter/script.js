'use strict';

const cutPieces = function (fruit) {
    return fruit * 4;
};

function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangesPieces = cutPieces(oranges);

    const juice = `juice with ${applePieces} and ${orangesPieces}`;

    return juice;
}

console.log( fruitProcessor(2, 6) );

let mark = {
    name: "Mark",
    weight: 78,
    height: 1.69,

    calcBMI: function() {
        return this.weight / this.height ** 2;
    }
};

let john = {
    name: "John",
    weight: 92,
    height: 1.95,

    calcBMI: function() {
        return this.weight / this.height ** 2;
    }
};

function compareBMI(person1, person2) {
    return person1.calcBMI() > person2.calcBMI() ? person1 : person2;
}

console.log( `Higher BMI has ${compareBMI(john, mark).name} with ${compareBMI(john, mark).calcBMI()} bmi` );

let bills = [22, 195, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

// tip is 15% of bill
// total = bill + tip

function calcTotal(bill, tip) {
    return bill + tip;
}

function calcTip(bill) {
    return bill / 100 * 15;
}

for (const bill of bills) {
    tips.push(calcTip(bill));
}

for (let i = 0; i < bills.length; i++) {
    totals.push( calcTotal(bills[i], tips[i]) );
}

console.log( totals );
console.log( tips );
