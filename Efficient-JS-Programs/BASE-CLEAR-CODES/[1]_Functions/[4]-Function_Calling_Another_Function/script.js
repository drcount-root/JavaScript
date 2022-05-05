"use strict";


const cutFruitPieces = fruit => fruit * 4;


const fruitProcessor = (apples, oranges) => {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `\nJuice with ${applePieces} pieces of apple & ${orangePieces} pieces of orange`;
    return juice;
}

console.log(fruitProcessor(2, 3));




const calcAge = birthYear => 2022 - birthYear;


const yearsUntilRetirement = (firstName, birthYear) => {
    const retirement = 60 - calcAge(birthYear);
    const result = `I'm ${firstName}. I've more ${retirement} years till retirement`;
    return result;
}

console.log(yearsUntilRetirement("Subham", 1997));