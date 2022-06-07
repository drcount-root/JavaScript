'use strict';

console.log(
  '\n---------------- Effect of hoisting on variable declarations with var keyword ----------------'
);

// Effect of hoisting on var keyword

// Variables declared with 'var' keyword are hoisted or not? => Yes, they're hoisted.

// Initial value => undefined

// Scope => function scoped. For this code it's global scoped variable.

console.log('\n---------------- Before initialization ----------------\n\n');

console.log(age); // Before initialization we get 'undefined' instead of the assigned value later (20).

var age = 20;

console.log('\n---------------- After initialization ----------------\n\n');

console.log(age); // We can get the value only when we log after variable declaration

// ***** So variable declarations with var keyword are hoisted.
