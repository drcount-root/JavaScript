let age = 30;
let oldAge = age; // preserving

age = 31;

console.log(age);

console.log(oldAge);

//
//
//
//
//
//
//
//
//

const me = {
  name: "Jonas",
  age: 30,
};

const friend = me;

friend.age = 27;

console.log("Friend: ", friend);

console.log("Me: ", me);
//
//
//
//
//
//

// JavaScript Primitive data-types

// Number
// String
// Boolean
// Undefined
// Null
// Symbol
// BigInt
//
//

// Objects

// Object literal
// Arrays
// Functions
//
//


//
//

// Now, when we're talking about memory and memory management, it's usual to call primitives, 'primitive types' and objects 'reference types' because of the different way in which they are stored in memory.

// JS Engine have 2 components - 1. Call Stack (Where the functions are executed), 2. Heap (Where the obejcts are stored in memory).

// All the Objects or Reference types are stored right in the memory heap.
// Primitive or Primitive types are stored in call stack. They are stored in the execution contexts in which they are declared.
