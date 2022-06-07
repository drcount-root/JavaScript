'use strict';

// Effect of hoisting on function declaration

// Func declarations are hoisted or not? => Yes, they're hoisted.

// Initial value => Actual function

// Scope => Only in 'use strict' mode they are block scoped. And in 'sloppy mode' the func declarations are function scoped

// 'use strict' came with ES5

console.log(calcAge); // Initial value => the actual function

console.log(calcAge(20)); // Accessible before initialization

// They are stored inside the variable environment object, even before the code starts executing

function calcAge(age) {
  return age + 5;
}

// ***** So function declarations are hoisted.
