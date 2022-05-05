"use strict";

// Function declaration

function newFunc(value) {
    const res = value + 10;
    return res;
}

const answer = newFunc(10);
console.log("\nFunction Declaration: After evalution the value: " + answer);



// Function expression

const myFunc = function (birthYear) {
    const res1 = 2022 - birthYear;
    return res1;
}

const answer1 = myFunc(1997);
console.log("\nFunction Expression: My current age is: " + answer1);



// Arrow function single-line

const newFunction = birthYear => 2022 - birthYear;

const answer2 = newFunction(1997);
console.log("\nSingle-line arrow function expression with single parameter: My current age with single-line arrow function: " + answer2);



// Arrow function with multiple-lines or with code-block

const newFunction1 = birthYear => {
    const age = 2022 - birthYear;
    const retirement = 60 - age;
    return retirement;
}

const answer3 = newFunction1(1997);
console.log("\nMulti-line arrow function expression with single parameter: My current age with multi-line or code block arrow function: " + answer3);



// Arrow function with multiple parameters

const details = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 60 - age;
    const conclution = `\nMulti-line arrow function expression with multiple parameters: Hi I'm ${firstName}. I have more ${retirement} years till retiremrnt!`;
    return conclution;
}

const answer4 = details(1997, 'Subham');
console.log(answer4);