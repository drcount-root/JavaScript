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
// this -> jonas object

// Here calcAgeMethod() method is written inside of jonas object.
// We might think that is the reason why this keyword points to jonas, but it's not true.

// The reason that the this keyword will point to jonas, in this case is because jonas was the object calling that method.
//
//
//
//
const honas = {
  year: 1997,
  calcAge: function () {
    return 2022 - this.year;
  },
};

console.log(honas.calcAge()); // 25

//

const matilda = {
  year: 1998,
};

matilda.calcAge = honas.calcAge; // method borrowing (coping method of an object to another object)

console.log(matilda); // matilda object with 'year' variable & calcAge() method

console.log(matilda.calcAge()); // 24
//
//
//
//
//
//

const f = honas.calcAge; // calcAge() method from honas object copied to f variable as calcAge() function.

// f(); // f() function here is a regular function call, it is not attached to any object. So no owner of f() function.

// calcAge: function () {return 2022 - this.year;}  Here this keyword holds value undefined as it comes from global. And for strict mode global this = undefined.

// undefined.year() doesn't make any sense. So TypeError.

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
//
// this keyword for both (Regular Function vs Arrow Function)
console.log(
  `-------------------- this keyword for both (Regular Function vs Arrow Function) --------------------`
);

const jonas1 = {
  firstNam: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => {
    console.log(this); // Window object
    console.log(`Hey ${this.firstNam}`);
  },
};

// jonas1 is not a code block, it is an object literal. And object literal can't create it's own scope. jonas1 object is in global scope.

jonas1.greet(); // An arrow function doesn't get it's own this keyword, instead it uses the this keyword from it's surroundings.

// So in greet() method the value of this keyword = parent's this keyword. Parent scope of greet() method is global scope.

console.log(this.firstNam); // If we try to access a property that doesn't exists on a certain object, we do not get an error, but simply undefined.
//
//
//
// this thing can become preety dangerous, in case we use var to declare variables.

// As variables declared with var, actually create properties on global object.

var firstNam = "Matilda";

const jonas2 = {
  firstNam: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => {
    console.log(this); // Window object
    console.log(`Hey ${this.firstNam}`);
  },
};

jonas2.greet(); // Now in this case Window object have a property named firstNam = 'Matilda';

//
//
//
//
// Regular function inside a method

const jonas3 = {
  firstNam: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // -------- function inside a method --------

    // Sol 1
    //
    // const self = this; // Preserving this keyword (self or that) to use inside the function bellow using scope chain.

    // const isMillenial = function () {
    //   // console.log(this);
    //   console.log(self);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial(); // this is a regular function call, even though it happens inside of a method. The rule said that, inside a function call the this keyword must be undefined.
    //
    //
    //
    //
    // Sol 2
    //
    const isMillenial = () => {
      console.log(this); // jonas3 object itself
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this); // Window object
    console.log(`Hey ${this.firstNam}`);
  },
};

jonas3.greet();

jonas3.calcAge();
//
//
//
// arguments keyword
//
// Arguments keyword for regular function
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12); // completely leagal to add more arguments and they will be visible in arguments array.
//
//
// Arguments keyword for arrow function
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8); // ReferenceError, 'arguments' is not defined. 'arguments' keyword doesn't exists for arrow functions.
//
//
//
// * 'arguments' keyword presents for function declarations & expressions.
