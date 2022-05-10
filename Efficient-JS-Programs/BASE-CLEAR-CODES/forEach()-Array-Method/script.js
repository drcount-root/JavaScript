// QUESTION  Use of forEach() to find sum of the elements of an array
//
// const numbers = [7, 5, 1, 9, 2];

// let sum = 0;
// numbers.forEach((elem) => (sum += elem));
// console.log(sum);
//
//
//
// QUESTION  Use of forEach() to find how many times a letter appears in an array
//
// const letters = ["a", "e", "b", "a", "c", "e", "b", "d", "e"];

// const count = {};

// letters.forEach((item) => {
//   if (count[item]) {
//     count[item]++;
//   } else {
//     count[item] = 1;
//   }
// });

// console.log(count);
//
//
//
//
// QUESTION Log all the elements of an array using forEach() & a callback function

const numbers = [7, 5, 1, 9, 2];

// numbers.forEach(consoleItem);

// // consoleItem() is the callback function here
// function consoleItem(item, index, arr) {
//   console.log("numbers[" + index + "] = " + item);
// }

numbers.forEach((item, index, arr) => {
  console.log("numbers[" + index + "] = " + item);
});

// The forEach() method executes a provided function once for each array element.
//
// here our callback function is an anonymous function
//
// callback function is the function to execute on each element.
//
// 'item' refers the current element being processed in the array
//
// the parameter 'index' is the index of the element in that array
