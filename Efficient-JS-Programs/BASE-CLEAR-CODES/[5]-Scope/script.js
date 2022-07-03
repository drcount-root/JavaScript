"use strict";

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
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;

    // 'firstName' is globally declared variable, and have access inside calcAge() so inside parentAge()

    // can access the 'age' value of variable as declared in it's parent/outer scope & can access the 'birthYear' parameter's argument (real-time value passed to a function) as that is also given in it's parent function's scope
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      const firstName = "Steven"; // if we add this line of code, then in 'str' variable, the value of 'firstName' will be 'Steven' as the variable lookup happens inside the current scope first, and if find then it will not look anywhere else.

      const str = `Oh, and you're a millenial, ${firstName}`;

      // 'firstName' variable is accessible as it is globally declared variable & also the parent scope of this block have the access

      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = "NEW OUTPUT";

      // let output = 'NEW OUTPUT'; // If we did this, it will not effect. As it will be treated as a completely new variable & would not at all affect the output from the outer scope.
    }

    // console.log(str); // Reference Error as 'str' can't accessible by printAge(). As parent/outer scope don't have the access of child/inner scope varibale. This is block-scoped variable.

    console.log(millenial); // 'millenial' is accessible here as variable declared with var keyword are function scoped. So it can be accessible inside the printAge() function.

    // console.log(add(2, 3)); // Reference Error as add() function is accessible only inside the if block. So this function is block scoped is this 'use strict' mode only.

    // If 'use strict' mode is turned off, then it returns value 5. Accessible inside printAge().

    console.log(output); // logs 'NEW OUTPUT' as, we manipulated (reassigned) an existing variable of parent scope/outer scope (printAge()) inside of a child scope/inner scope (if block).
  }

  printAge();

  return age;
}

const firstName = "Jonas";

console.log(calcAge(1991));

//
//
//
//
//
//
//
//
//
//

// lexical-scope example

//
//

function showLastName() {
  const lastName = "Sahu";
  return lastName;
}

function displayFullName() {
  const fullName = "Subham " + lastName;
  return fullName;
}

// console.log(displayFullName()); // ReferenceError: lastName is not defined at displayFullName

// Here inside displayFullName() func we can't access the lastName variable because of "Lexical Scoping"

// Both functions are globally declared & they are also siblings to each other.

//
//

function displayFullName1() {
  const fullName = "Subham " + showLastName(); // Calling showLastName() func returns the value of lastName.
  return fullName;
}

console.log(displayFullName1());
