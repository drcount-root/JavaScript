console.log(
  '\n---------------- Effect of hoisting on function expressions & arrow functions ----------------'
);

// // Effect of hoisting on function expressions & arrow functions

// // Func expressions & arrow functions are hoisted or not? =>

// Depends.
// As functions are smiply variables.
// A func exp or arrow func created with 'var' keyword is hoisted to 'undefined'.
// While created with let or const it's not usable ('Ref Error') before it's declared in code, because of 'Temporal Dead Zone'.

// // Initial value => depends on, with which keyword it declared (either undefined or Ref Error).

// // Scope => Only in 'use strict' mode they are block scoped. And in 'sloppy mode' the func declarations are function scoped

// console.log(calcAge); // Initial value => for var => undefined, for let or const => Ref Error

console.log(calcAge(20)); // Ref Error. Not Accessible before initialization (for var, let & const)

const calcAge = function (age) {
  return age + 5;
};

// // ***** So function declarations are hoisted.
