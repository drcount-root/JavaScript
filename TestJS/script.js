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

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear}`;
//     // can access the 'age' value of variable as declared in it's parent/outer scope & can access the 'birthYear' parameter's argument (real-time value passed to a function) as that is also given in it's parent function's scope
//     console.log(output);
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Jonas';

// console.log(calcAge(1991));

// console.log(age); // Reference Error as 'age' is block scoped to calcAge(). So it can only be accessible inside the calcAge() function.

// printAge(); // Reference Error as we are calling this function globally although we can't access it globally. As only inner/child function can access it's outer/parent function scope. But not the vice-versa.
//
//
//
//
//

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;

    // 'firstName' is globally declared variable, and have access inside calcAge() so inside parentAge()

    // can access the 'age' value of variable as declared in it's parent/outer scope & can access the 'birthYear' parameter's argument (real-time value passed to a function) as that is also given in it's parent function's scope
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;

      // 'firstName' variable is accessible as it is globally declared variable & also the parent scope of this block have the access

      console.log(str);
    }

    // console.log(str); // Reference Error as 'str' can't accessible by printAge(). As parent/outer scope don't have the access of child/inner scope varibale. This is block-scoped variable.

    console.log(millenial); // 'millenial' is accessible here as variable declared with var keyword are function scoped. So it can be accessible inside the printAge() function.
  }

  printAge();

  return age;
}

const firstName = 'Jonas';

console.log(calcAge(1991));
