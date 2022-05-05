"use strict";

function fruitProcessor(apples, oranges) {
    const juice = `Juice containing ${apples} apples & ${oranges} oranges.`;
    return juice;
}

const theCall = fruitProcessor(5, 0);
console.log(theCall);

console.log(fruitProcessor(5, 0));