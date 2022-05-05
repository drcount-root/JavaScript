////////////////////--------------- Math Library ---------------////////////////////


// Math.random() generates a random pseudo-random decimal number from/including 0 to excluding 1. 0 <= num < 1. 0 including or greater than 0, but less than 1 always


// let x = Math.random();
// console.log(x);





// to get random decimal numbers from/including 0 to including 10 means excluding 11
// to get negatives we should use (-11) for this case below


// let a = Math.random() * 11;
// console.log(a);





// Math.trunc() cuts the decimal part and returns the integer part
// to get random integers from/including 0 to including 10 excluding 11


// let b = Math.trunc(a);
// console.log(b);







// Math.floor() returns the largest integer, less than or equal to the given number      LLE
// Only changes the integer part of the negative decimal numbers by -1


// console.log(Math.floor(5.95));         // 5       less than
// console.log(Math.floor(5.05));         // 5       less than
// console.log(Math.floor(5));            // 5       equal
// console.log(Math.floor(-5));           // -5      equal
// console.log(Math.floor(-5.95));        // -6      less than
// console.log(Math.floor(-5.05));        // -6      less than






// Math.ceil() returns the smallest integer, higher than or equal to the given number    SHE
// Only changes the integer part of the positive decimal numbers by +1


// console.log(Math.ceil(5.95));             // 6       higher than
// console.log(Math.ceil(5.05));             // 6       higher than
// console.log(Math.ceil(5));                // 5       equal
// console.log(Math.ceil(-5));               // -5      equal
// console.log(Math.ceil(-5.95));            // -5      higher than
// console.log(Math.ceil(-5.05));            // -5      higher than







// Math.round() returns the nearest integer


// console.log(Math.round(20.49));   //  20
// console.log(Math.round(20.5));    //  21
// console.log(Math.round(42));      //  42
// console.log(Math.round(-42));      //  -42
// console.log(Math.round(-20.50));   // -20
// console.log(Math.round(-20.51));  // -21


// console.log(Math.round(-7.51));  // -8
// console.log(Math.round(-7.50));  // -7
// console.log(Math.round(-7.49));  // -7
