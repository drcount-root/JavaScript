'use strict';

console.log(
  '\n---------------- Effect of hoisting on variable declarations with let & const keywords ----------------'
);

// Effect of hoisting on let & const keywords

// Variables declared with 'let' & 'const' keywords are hoisted or not? =>

// No, But technically Yes they're hoisted, but their values are set to uninitialized. So we don't get any value to work with, instead we get 'Reference Error'. These variables are placed in Temporal Dead Zone (TDZ). Means we can only access them after declarations.

// Initial value => <uninitialized> TDZ (Temporal Dead Zone)

// Scope => block scoped. For this code it's global scoped variable.

console.log('\n---------------- Before initialization ----------------\n\n');

console.log(age); // Before initialization we get 'Reference Error' instead of the assigned value later (20).

const age = 20; // let age = 20;

console.log('\n---------------- After initialization ----------------\n\n');

console.log(age); // We can get the value only when we log after variable declaration

// ***** So variable declarations with let & const keywords are not hoisted as the variables are placed in TDZ.
