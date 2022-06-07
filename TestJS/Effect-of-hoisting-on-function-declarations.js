console.log(
  '\n---------------- Effect of hoisting on function declarations ----------------'
);

// // Effect of hoisting on function declaration

// // Func declarations are hoisted or not? => Yes, they're hoisted.

// // Initial value => Actual function

// // Scope => Only in 'use strict' mode they are block scoped. And in 'sloppy mode' the func declarations are function scoped

// // 'use strict' came with ES5

// console.log('\n-------- Sloppy Mode --------\n\n');

// console.log(calcAge); // Initial value => the actual function

// console.log(calcAge(20)); // Accessible before initialization

// // They are stored inside the variable environment object, even before the code starts executing

// // This calcAge() func is now function scoped as the code is written in 'Sloppy mode'.

// function calcAge(age) {
//   return age + 5;
// }

// // ***** So function declarations are hoisted.
//
//
//
//
//
//
//
console.log('\n-------- Strict Mode --------\n\n');

'use strict';

console.log(calcAge);

console.log(calcAge(20));

// This calcAge() func is now block scoped as the code is written in 'Strict mode'.

function calcAge(age) {
  return age + 5;
}
