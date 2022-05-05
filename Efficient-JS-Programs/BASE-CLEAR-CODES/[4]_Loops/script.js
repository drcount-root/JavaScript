//////////////////////////////////////   for loop   //////////////////////////////////////

// for() loop is another control structure like if...else...

// for( ; ; ) loop has 3 parts seperated by semicolons.     for( first_part; second_part; third_part) { block which will execute or not, depending on the loop conditions }

// for(let i = 0; ; )           first_part will be initializing the value of a counter like 'let i = 0'. The starting point. And declared with let coz it's gonna be change

// for(let i = 0; i < 10; )     second_part will be the logical condition part, which will evaluate before each iteration of the loop. If the condition it true the block will execute otherwise for false the loop will stop

// for(let i = 0; i < 10; i++)  third_part will be the increment / decrement part. i++ is i = i + 1 or i += 1

// after first iteration for i = 0 the condition satisfies, so the block inside the loop execute and then the value of i increases by 1 and so on until the condition reaches its highest limit

// logs 10 times to the console. For 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
//  1  2  3  4  5  6  7  8  9 10

// for (let i = 0; true; i++) {
//     console.log(`Value of i = ${i}`);
// }

// if the condition is always true, the loop will be a infinity loop

// for (let i = 0; false; i++) {
//     console.log(`Value of i = ${i}`);
// }

// if the condition is always false, the loop block will not execute

// for (let i = 0; i <= 9; i++) {
//     console.log(`Value of i = ${i}`);
// }

// logs 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 to the console. Total 10 times it executes.

// for (let i = 0; i <= 9; i = i + 2) {
//     console.log(`Value of i = ${i}`);
// }

// logs 0, 2, 4, 6, 8 to the console. Total 5 times it executes. Coz here i is increasing by 2 each time.

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//     let result = `at i = ${i} is typeof ${typeof (jonas[i])}`;
//     console.log(jonas[i], result);

//     // types[i] = typeof (jonas[i]);

//     types.push(typeof (jonas[i]));
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];

// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

// continue & break statement, these are keywords

// continue : it is used to immediately exit the current iteration of the loop & continue to the next one

// break : it is used to completely terminate the whole loop

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     ['Michael', 'Peter', 'Steven'],
//     'teacher',
//     true
// ];

// use of continue keyword
// we want to print elements that are of string types
// console.log("--------------- Use of continue keyword ---------------");
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof (jonas[i]) !== 'string') continue;
//     // if the element is not a string then, skip it and continue the if block
//     console.log(jonas[i], typeof (jonas[i]));
// }

// use of break keyword
// we want to terminate the loop after the loop reaches a number
// console.log("--------------- Use of break keyword ---------------");
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof (jonas[i]) === 'number') break;
//     // if the element is a number then, the loop is terminated completely.
//     // not even the number will log to console
//     console.log(jonas[i], typeof (jonas[i]));
// }

// console.log("Getting numbers from 0 to 10 but breaks when it reaches 9");

// for (let i = 0; i <= 10; i++) {
//     if (i === 9) break;
//     console.log(i);
// }

// console.log("Getting all even numbers from 0 to 10");

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 !== 0) continue;
//     console.log(i);
// }

// Looping backward

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

////////////////////  Loop inside loop  ////////////////////

// first forward loop & second forward loop

// for (let i = 1; i < 4; i++) {
//     console.log(`Season ${i}`);
//     for (let j = 0; j < 5; j++) {
//         console.log(`S${i} Episode ${j}`);
//     }
// }

// first forward loop & second backward loop

// for (let i = 0; i < 6; i++) {
//     console.log(`--------- When ${i} ---------`);

//     for (let j = 5; j >= 0; j--) {
//         console.log(`i = ${i} & j = ${j}`);
//     }
// }

// first backward loop & second forward loop

// for (let i = 6; i > 0; i--) {
//     console.log(`--------- When ${i} ---------`);

//     for (let j = 0; j < 5; j++) {
//         console.log(`i = ${i} & j = ${j}`);
//     }
// }

// first backward loop & second backward loop

// for (let i = 6; i > 0; i--) {
//     console.log(`--------- When ${i} ---------`);

//     for (let j = 5; j >= 0; j--) {
//         console.log(`i = ${i} & j = ${j}`);
//     }
// }

////////////////--------    while loop    --------////////////////

// for loop

// console.log("----------- The for loop -----------");
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// while loop

// console.log("----------- The while loop -----------");

// let i = 0;           // counter initialization
// while (i <= 10) {    // till condition is true
//     console.log(i);
//     i++;             // counter value modified after each iteration / repeatation
// }

// while loop dice code (without counter modification (increment or decrement))

console.log("----------- Roll the dice until we have a 6 -----------");

let j = Math.trunc(Math.random() * 7); // Math.random(); generates a decimal number which is like 0 <= num in decimal < 1
// So Math.random() * 7; generates a decimal number which is like 0 <= num in decimal < 7
// Math.trunc(); cuts / truncate the decimal part and returns the integer part only

while (j !== 6) {
  // until we get 6, j !== 6 condition is true
  console.log(j); // logs the dice roll values for each iteration until we get 6.
  // Actually this line gonna run forever until we re-assign j with another random number
  j = Math.trunc(Math.random() * 7); // value re-assignment and for this value, the loop gonna iterate again the console to log the value if it is not 6
  if (j === 6) console.log("Loop is about to end ...");
}

// QUESTION We have a temparature array with somthing error including with the values.
// We have to eleminate that error ('error' string in this case) and then calculate the max
// and min temparature from the array. And then the amplitude temparature (max - min).

const temp = [12, false, -5, "red", 9, -7, "error"];

const calcVTemp = (t) => {
  let maxT = t[0];
  let minT = t[0];
  for (let i = 0; i < t.length; i++) {
    if (typeof t[i] !== "number") continue; // NOTE if typeof(t[i]) is not a number then skip that t[i] and move forward
    if (t[i] > maxT) maxT = t[i];
    if (t[i] < minT) minT = t[i];
  }
  return `\t\tMaxTemp = ${maxT} 
        MinTemp = ${minT}
        Amplitude Temp = ${maxT - minT}`;
};
console.log(calcVTemp(temp));
