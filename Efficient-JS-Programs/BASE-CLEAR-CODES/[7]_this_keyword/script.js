// "use strict";

console.log(this); // returns the global 'Window' object in sloppy mode

// In strict mode, it will return 'undefined'
//
//
//
//
// lexical this keyword

console.log(`-------------- The 'lexical this keyword' --------------`);

const theFunc = () => {
  console.log(this);
};

theFunc();

// Arrow functions don't have their own 'this' keeyword. Instead for the arrow function, it will simply be the 'this' keyword of the surrounding function or parent function. This is 'lexical this keyword'.

// As the theFunc() function is globally expressed, so the global 'Window' object will become the value of 'this' keyword.
