// --------------------- VARIABLE HOISTING ---------------------

// console.log(me);              // undefined, as variable declaration with var are hoisted to undefined

// console.log(job);             // Ref Error, can't access from TDZ for that variable or can't access before initialization

// console.log(year);            // Ref Error, can't access from TDZ for that variable or can't access before initialization

var me = 'Jonas';
let job = 'Teacher';
const year = 1991;

// --------------------- FUNCTION HOISTING ---------------------

// console.log(addDecl);
// console.log(addDecl(2, 3));  // 5
//
//
//
//
//
// console.log(addExpr);

// undefined if declared with 'var'.

// Ref Error, can't access before initialization or can't access from TDZ for if declared with 'let' or 'const'.
//
//
//
//
//
// console.log(addExpr(2, 3));

// Declared with 'var' keyword evaluates TypeError: addExpr is not a function. Functions are variables as well, and variable declared with 'var' keyword are set to 'undefined' while hoisting. And 'undefined' is not a function.
// TypeError: addExpr is not a function
// Any variable declared with var will be hoisted and set to undefined.
// So addExpr = undefined.
// console.log(addExpr(2, 3)); here we are calling that undefined basically.
// console.log(undefined(2, 3));
// TypeError: undefined is not a function.

// Ref Error, can't access before initialization or can't access from TDZ if declared with 'let' or 'const'.
//
//
//
//
//
//
// console.log(addArrow);

// undefined if declared with 'var'.

// Ref Error, can't access before initialization or can't access from TDZ for if declared with let & const.
//
//
//
//
//
//
// console.log(addArrow(2, 3));

// Declared with 'var' keyword evaluates TypeError: addArrow is not a function. Functions are variables as well, and variable declared with 'var' keyword are set to 'undefined' while hoisting. And 'undefined' is not a function.
// TypeError: addArrow is not a function
// Any variable declared with var will be hoisted and set to undefined.
// So addArrow = undefined.
// console.log(addArrow(2, 3)); here we are calling that undefined basically.
// console.log(undefined(2, 3));
// TypeError: undefined is not a function.

// Ref Error, can't access before initialization or can't access from TDZ if declared with 'let' or 'const'.
//
//
//
//
//
//
function addDecl(a, b) {
  return a + b;
}
//
//
const addExpr = function (a, b) {
  return a + b;
};
//
//
const addArrow = (a, b) => a + b;
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
//
//
// Example of 'var' hoisting error

console.log(numProducts);
if(!numProducts) deleteShoppingCart();  // As value of 'numProducts' is hoisted to 'undefined' here, so it's falsy value.

var numProducts = 10;

function deleteShoppingCart(){
    console.log('All products deleted!');
}