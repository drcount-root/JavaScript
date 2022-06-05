'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName); // It can access the "firstName" variable as that variable declared globally
//   //   console.log(lastName); // Reference Error as "lastName" variable is not declared in the calcAge() scope and not in the global scope
//   return age;
// }

// const firstName = 'Jonas';
// console.log(calcAge(1991));
//
//
//
//
//
//
//
//
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    // can access the 'age' value of variable as declared in it's parent/outer scope & can access the 'birthYear' parameter's argument (real-time value passed to a function) as that is also given in it's parent function's scope
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Jonas';

console.log(calcAge(1991));

// console.log(age); // Reference Error as 'age' is block scoped to calcAge(). So it can only be accessible inside the calcAge() function.

// printAge(); // Reference Error as we are calling this function globally although we can't access it globally. As only inner/child function can access it's outer/parent function scope. But not the vice-versa.
