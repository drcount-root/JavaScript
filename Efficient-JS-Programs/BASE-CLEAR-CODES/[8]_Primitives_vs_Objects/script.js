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

//
//
//
//
//

// Primitives vs. Objects In Practice

let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";

console.log(lastName);

console.log(oldLastName);

//
//
//
//
//
//

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica; // marriedJessica is not a new obj in heap, it's simply another variable in the stack, which holds the referene of the original jessica obj.

marriedJessica.lastName = "Davis";

console.log("Before marriage:", jessica);

console.log("After marriage:", marriedJessica);

// marriedJessica = {};   // This new obj will be stored in different position in  memory, therefore the reference to that position in memory will have to change in that varibale. And now as it is in the stack and so, since it is a constant, we can't change that value in the stack.
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
// Copying objects (Shallow Copy)

const jessica1 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica1); // New obj is created in heap & jessicaCopy is now pointing to that object (jessicaCopy has a reference to that new object).

//  Essentially merge two objects, then return a new obj, where all properties are really copied.

jessicaCopy.lastName = "Davis";

// NOTE :  Object.assign({}, {}); only works on the first level.
// If we have an obj inside the obj, then the inner obj will actually still be the same. Still point to the same place in memory.
// Thats why we say the Object.assign({}, {}); only creates a shallow copy. Shallow copy only copies the properties of first level.

jessicaCopy.family.push("Mary");

console.log("After mmarriage: ", jessicaCopy);

console.log("Before mmarriage: ", jessica1);

// If we change anything in the family array, it will reflect changes in both objects.
