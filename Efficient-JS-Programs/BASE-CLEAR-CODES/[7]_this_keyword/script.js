"use strict";

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

// Arrow functions don't have their own 'this' keeyword. Instead for the arrow function, it will simply be the 'this' keyword of the surrounding function or parent function. This is 'lexical this keyword'. Because it simply get picked up from the outer lexical scope of the arrow function.

// As the theFunc() function is globally expressed, so the global 'Window' object will become the value of 'this' keyword.

//
//
//
// this keyword inside a regular function

console.log(
  `-------------- this keyword inside a regular function --------------`
);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991); // this -> undefined in strict mode & window object in sloppy mode
//
//
//
//
console.log(
  `-------------- this keyword inside an arrow function --------------`
);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1991);
// this -> global Windoow object
//
//
//
//
console.log(`-------------- this keyword inside a method --------------`);

const jonas = {
  year: 1991,
  calcAgeMethod: function () {
    console.log(2037 - this.year);
    console.log(this);
  },
};

jonas.calcAgeMethod();
//
// jonas is the owner of the calcAgeMethod() method
// this -> global Windoow object

// Here calcAgeMethod() method is written inside of jonas object.
// We might think that is the reason why this keyword points to jonas, but it's not true.

// The reason that the this keyword will point to jonas, in this case is because jonas was the object calling debt method.
//

const matilda = {
  year: 2017,
};

matilda.calcAgeMethod = jonas.calcAgeMethod; // method borrowing (coping method of an object to another object)

console.log(matilda);

console.log(matilda.calcAgeMethod());
