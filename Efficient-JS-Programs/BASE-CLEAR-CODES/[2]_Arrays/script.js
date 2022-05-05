"use strict";

//////// Creating an array ////////

const friends = ['Mike', 'Jon', 'Peter'];  // friends is the array. Length of friends array is 3
// 0th element = friends[0] = 'Mike'     1st element = friends[1] = 'Jon'    2nd element = friends[2] = 'Peter'
console.log("");


/*

const years = new Array(1997, 'I am', false);  // Another way to declare an array, using new keyword. Array() is a function.
// Here years is the array. Length = 3.   years[0] = 1997   years[1] = 'I am'   years[2] = false
console.log(years);

*/


//////// Reading an array ////////

console.log(friends);


// Reading each elements of the array with index

console.log(`\n0th element : ${friends[0]}`);   // 'Mike'
console.log(`1st element : ${friends[1]}`);   // 'Jon'
console.log(`2nd element : ${friends[2]}`);   // 'Peter'


// Length of the array

console.log(`\nfriends array length : ${friends.length}`);


// Get the last element of the array

console.log(`\nLast element of friends array : ${friends[friends.length - 1]}`);


//////// Updating an element of the array using index ////////

friends[1] = 'Berlin';
console.log("");
console.log(friends);

/*  But how can elements of the array can be updated while the array is declared with const ?

=>  Only premetives are immutable.
    This is because array is not a premetive data type. They are reference types and falls under objects.
    So, we can update every items/elements of an array while the array is declared with const.

    But...But...But...

    we can't re-assign the array if declared with const
    Eg.    const friends = ['Berlin', 'Rio', 'Tokyo'];
                friends = ['Jonas', 'Schmedthmann', 'Vouri'];

    This will give TypeError: Assignment to constant variable


    But with let declaration its absolutely fine
    Eg.    let friends = ['Berlin', 'Rio', 'Tokyo'];
              friends = ['Jonas', 'Schmedthmann', 'Vouri'];


    let friends = [];
    friends = ['Oslo'];
    const jonas = ['Jonas', 'Schmedthmann', 2037 - 1991, friends];

    console.log(jonas);     o/p:  ["Jonas", 'Schmedtmann', 46, ['Oslo']]

*/



////////// Array length when there are another sub-arrays

// const arrX = [1, [2, 3], [4, 5, 6], 7, 8, 9];
// console.log(arrX.length);         // 6. As sub-arrays are just like single items to the main array.



//////////  To access the depth / level of array

// const arrX = [1, [2, 3], [4, 5, 6], 7, 8, 9];

// to log the 2nd element of the 3rd sub-array
// const secondEleThirdSubArr = arrX[2][1];           // arrX => [1, [2, 3], [4, 5, 6], 7, 8, 9]
// console.log(secondEleThirdSubArr);                 // arrX[2] => [4, 5, 6]
// arrX[2][1] => 5

// console.log(arrX[2].length);



////////// Some basic exercise using array //////////

// const calcAge = birthYears => 2037 - birthYears;


// const years = [1990, 1967, 2002, 2010, 2018];

/*
const resultArray = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3]), calcAge(years[years.length - 1])];

console.log(resultArray);
*/

// OR

/*
for (let i = 0; i < years.length; i++) {
    birthYears = years[i];
    console.log(calcAge(birthYears));
}
*/

















/////////////////////  Array Methods  /////////////////////


// MUTABLE ARRAY METHODS //

/////////////////////  arr_name.push()  /////////////////////
/////////// Add elements at last of the array | Mutates the original array ///////////

// const friends = ["Michael", "Steven", "Peter"];

// friends.push("Jay");

// console.log(friends);    // Mutates the 'friends' array

// console.log(friends.push("Jay"));   // returns the length of the mutated array. In this case 5, coz "Jay" added two times.

// const arr = new Array(1997, "Hi");
// console.log(arr);


// arr.push("Sh", 2008);   // pushing multiple items into the array

// console.log(arr);


// arr.push([2000, "Nabhan"]);    // pushing another array into the array

// console.log(arr);


// arr.push([1967, "Shriya"], [5, 69, "Bikas"]);    // pushing multiple arrays into the array
// newArr = [1967, "Shriya"]; arr.push(newArr);

// console.log(arr);


// console.log(arr.length);






/////////////////////  arr_name.unshift()  /////////////////////
/////////// Add elements at first index of the array | Mutates the original array ///////////

// const arr = ["Jay", "Roy", "Bob"];
// arr.unshift("Asley");
// console.log(arr);  // Mutates the 'arr' array

// console.log(arr.unshift("Nox"));  // Length of the mutated array after adding "Nox"



// const arr = ["Jay", "Roy", "Bob"];

// arr.unshift("Sh", 2008);   // unshifting multiple items into the array

// console.log(arr);



// const arr = ["Jay", "Roy", "Bob"];

// arr.unshift([2000, "Nabhan"]);    // unshifting another array into the array

// console.log(arr);



// const arr = ["Jay", "Roy", "Bob"];

// arr.unshift([1967, "Shriya"], [5, 69, "Bikas"]);    // unshifting multiple arrays into the array

// console.log(arr);
// console.log(arr.length);





/////////////////////  arr_name.pop()  /////////////////////
/////////// Remove last element of the array | Mutates the array ///////////


// const arr = [1, "Hi", 2, "Hey", 3, "Hello"];

// const removedElement = arr.pop();
// console.log(removedElement);         // returns removed element

// console.log(arr);       // mutate the original array by removing the last element


// const arr = [];
// console.log(arr.pop());  // undefined
// console.log(arr);          // original array not modified as it is empty





/////////////////////  arr_name.shift()  /////////////////////
/////////// Remove first element of the array | Mutates the array ///////////


// const arr = [1, "Hi", 2, "Hey", 3, "Hello"];

// const removedElement = arr.shift();
// console.log(removedElement);         // returns removed element

// console.log(arr);       // mutate the original array by removing the fast element

// const arr = [];
// console.log(arr.shift());  // undefined
// console.log(arr);          // original array not modified as it is empty




/////////////////////  arr_name.indexOf()  /////////////////////
/////////// To get the position of a certain element in the array | does not mutates the array ///////////


// const arr = ["Michael", "Steven", "Jamse"];
// console.log(arr.indexOf("Jamse"));       // returns the index of "Jamse" = 2

//If the element doesn't exists in the array
// console.log(arr.indexOf("Rahul")); // returns -1





/////////////////////  arr_name.includes()  /////////////////////
/////////// To find if a certain element presents in the array or not | does not mutates the array ///////////


// const arr = ["Michael", "Steven", "Jamse"];

// console.log(arr.includes("Bob"));          // strict equality check of this method returns false

// console.log(arr.includes("Steven"));       // strict equality check of this method returns true


// const arr = [1, "34", "78", 23, 56];
// console.log(arr.includes(78));       // strict equality check of this method returns false as 78 === "78" evalutes false

// console.log(arr.includes("78"));    // strict equality check of this method returns true as 78 === "78" evalutes true

// ***** Doesn't happen type-coercion in includes() method







//////// Mutable array methods ////////
/////// Mutates the original array ///////
// push()   unshift()   pop()   shift()   reverse()   sort()   splice()


//////// Immutable array methods ////////
/////// Returns new array ///////
// slice()    concat()    map()    filter()