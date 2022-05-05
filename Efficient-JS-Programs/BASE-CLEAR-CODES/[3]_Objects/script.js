"use strict";

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

// // Objects are unstructured data storage, there indexing doesn't matter during data retreival
// // here 'jonas' is the object with 5 key-value pairs
// // 5 keys are - firstName, lastName, age, job, friends
// // 5 values are - 'Jonas', 'Schmedtmann', 46, 'Teacher', ['Michael', 'Peter', 'Steven']
// // if we put expression as value of any key of an object, the expression will always produce a value and the value get assigned to that key.
// // keys are called properties of the object and values are value for that specific property
// //     key / property / variable
// //     value / variable value



// // dot notation

// console.log("\n-------------- dot notation --------------");
// console.log(jonas.firstName);
// console.log(jonas.lastName);
// console.log(jonas.age);
// console.log(jonas.job);
// console.log(jonas.friends);

// // dot is actually an operator which will go to the jonas object and then retrieve the property with the name we specified



// // brackets notation

// console.log("\n\n-------------- brackets notation --------------")
// console.log(jonas['firstName']);
// console.log(jonas['lastName']);
// console.log(jonas['age']);
// console.log(jonas['job']);
// console.log(jonas['friends']);

// // In brackets notation we use string with property-name or string with key inside the square brackets.





// // --------- dot notation vs. bracket notation ---------

// // In brackets notation we can put any expression that we like. we don't have to explicitly write the string

// console.log("\n\n--------- putting expression inside square brackets ---------");
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);



// // In dot notation

// // console.log(jonas.'first' + nameKey);    // SyntaxError: Unexpected String




// const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job, friends");


// // In dot notation

// // console.log(jonas.interestedIn);  // undefined as interestedIn in not present inside jonas object as a key or property


// // In brackets notation

// console.log(jonas[interestedIn]);  // when prompt opens, what we type inside if that matches any present property of jonas object, then it will give the value of that property as output, otherwise it will show undefind


// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// }
// else {
//     console.log("Wrong request! Choose between firstName, lastName, age, job, friends");
// }






////////////// ----------------  Adding properties ---------------- //////////////

// dot notation
jonas.location = "Portugal";

// brackets notation
jonas['twitter'] = "@jonasschmedtman";

console.log(jonas);


console.log(jonas.friends[0]);
console.log(jonas['friends'][0]);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends. And his best friend is ${jonas.friends[0]}`);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends. And his best friend is ${jonas.friends[0]} or ${jonas['friends'][0]}`);


console.log((jonas.friends)[0]);
console.log(jonas['friends'][0].split("").length);




jonas.bestie = jonas.friends[0];
console.log(jonas);





///////////////////   Object Methods   ///////////////////

"use strict";

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'Teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// // Objects are unstructured data storage, there indexing doesn't matter during data retreival
// // here 'jonas' is the object with 5 key-value pairs
// // 5 keys are - firstName, lastName, age, job, friends
// // 5 values are - 'Jonas', 'Schmedtmann', 46, 'Teacher', ['Michael', 'Peter', 'Steven']
// // if we put expression as value of any key of an object, the expression will always produce a value and the value get assigned to that key.
// // keys are called properties of the object and values are value for that specific property
// //     key / property / variable
// //     value / variable value



// // dot notation

// console.log("\n-------------- dot notation --------------");
// console.log(jonas.firstName);
// console.log(jonas.lastName);
// console.log(jonas.age);
// console.log(jonas.job);
// console.log(jonas.friends);

// // dot is actually an operator which will go to the jonas object and then retrieve the property with the name we specified



// // brackets notation

// console.log("\n\n-------------- brackets notation --------------")
// console.log(jonas['firstName']);
// console.log(jonas['lastName']);
// console.log(jonas['age']);
// console.log(jonas['job']);
// console.log(jonas['friends']);

// // In brackets notation we use string with property-name or string with key inside the square brackets.





// // --------- dot notation vs. bracket notation ---------

// // In brackets notation we can put any expression that we like. we don't have to explicitly write the string

// console.log("\n\n--------- putting expression inside square brackets ---------");
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);



// // In dot notation

// // console.log(jonas.'first' + nameKey);    // SyntaxError: Unexpected String




// const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job, friends");


// // In dot notation

// // console.log(jonas.interestedIn);  // undefined as interestedIn in not present inside jonas object as a key or property


// // In brackets notation

// console.log(jonas[interestedIn]);  // when prompt opens, what we type inside if that matches any present property of jonas object, then it will give the value of that property as output, otherwise it will show undefind


// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// }
// else {
//     console.log("Wrong request! Choose between firstName, lastName, age, job, friends");
// }






////////////// ----------------  Adding properties ---------------- //////////////

// dot notation
// jonas.location = "Portugal";

// // brackets notation
// jonas['twitter'] = "@jonasschmedtman";

// console.log(jonas);


// console.log(jonas.friends[0]);
// console.log(jonas['friends'][0]);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends. And his best friend is ${jonas.friends[0]}`);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends. And his best friend is ${jonas.friends[0]} or ${jonas['friends'][0]}`);


// console.log((jonas.friends)[0]);
// console.log(jonas['friends'][0].split("").length);




// jonas.bestie = jonas.friends[0];
// console.log(jonas);








///////////////////////////////    Object Methods    ///////////////////////////////


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'Teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     calcAge: function (birthYear) {
//         return 2037 - birthYear;
//     }
// };

// console.log(jonas);
// console.log(jonas.calcAge(1991));

// console.log(jonas['calcAge'](1991));

// console.log(jonas.calcAge(1999));

// console.log(jonas['calcAge'](1999));

// we've birthYear property value 1991 inside the jonas object, then why we are repeating. We shouldn't! As per DRY - Don't Repeat Yourself philosophy




// const jonas = {
//     birthYear: 1991,
//     calcAge: function (birthYear) {
//         return 2037 - jonas.birthYear;
//     }
// };

// console.log(jonas.calcAge(1999));

// console.log(jonas['calcAge'](1999));

// console.log(jonas.calcAge());  // don't need parameter as it doesn't matter coz the calcAge is taking the value of birthYear inside the jonas object

// console.log(jonas['calcAge']());  // don't need parameter as it doesn't matter coz the calcAge is taking the value of birthYear inside the jonas object

// we could've use jonas.birthYear to access that, but if the object name changed, then it will give error




// use of 'this' keyword

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'Teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     calcAge: function () {                // no need to add parameters as we are accessing using this keyword
//         console.log(this);                // 'this' is like equal to the object on which the method is called, so 'this' refers 'jonas' object here
//         return 2037 - this.birthYear;     // here this.birthYear = 1991, which is specified to the value of birthYear inside jonas object
//     }
// };


// console.log(jonas.calcAge());         // no need to add parameters as we are accessing using this keyword, if we put something also doesn't matter

// console.log(jonas['calcAge']());      // no need to add parameters as we are accessing using this keyword, if we put something also doesn't matter


// jonas.birthYear = 1997;            // updating the birthYear value

// console.log(jonas.calcAge());      // evaluates as per the updated value

// console.log(jonas['calcAge']());   // evaluates as per the updated value




// now suppose we want age of jonas multiple times, but everytime if we call the calcAge() method, it effects(delay) during the execution of the program.

// Then it's applicable. So we'll call the calcAge() method once and then store age property inside jonas object

// const jonas = {
//     birthYear: 1991,

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     }
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);





// Code challenge : use getSummary() method to generate Jonas is a 46 years old Teacher and he has a/no drivers license

// const jonas = {
//     firstName: 'Jonas',
//     birthYear: 1991,
//     job: 'Teacher',
//     hasDriversLicense: false,

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         const result = `${this.firstName} is a ${this.calcAge()} years old ${this.job} and he has ${(this.hasDriversLicense) ? 'a' : 'no'} drivers license`;    // calcAge() method is called inside jonas object, thats why we use this.calcAge() which returns age value on reference to jonas object
//         return result;
//     }
// };


// console.log(jonas.getSummary());
// console.log(jonas['getSummary']());

// jonas.hasDriversLicense = true;

// console.log(jonas.getSummary());
// console.log(jonas['getSummary']());








// const John = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 78,
//     height: 1.69,

//     caclBMI: function () {
//         this.BMI = this.mass / (this.height ** 2);
//         return this.BMI;
//     }
// };

// const Mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     mass: 92,
//     height: 1.95,

//     caclBMI: function () {
//         this.BMI = this.mass / (this.height ** 2);
//         return this.BMI;
//     }
// };


// (John.caclBMI() > Mark.caclBMI()) ? console.log(`${John.firstName + " " + John.lastName}'s BMI (${John.caclBMI()}) is higher than ${Mark.firstName + " " + Mark.lastName}'s BMI (${Mark.caclBMI()})`) : console.log(`${Mark.firstName + " " + Mark.lastName}'s BMI (${Mark.caclBMI()}) is higher than ${John.firstName + " " + John.lastName}'s BMI (${John.caclBMI()})`);


// (John.caclBMI() > Mark.caclBMI()) ? console.log(`${John.firstName + " " + John.lastName}'s BMI (${John.BMI}) is higher than ${Mark.firstName + " " + Mark.lastName}'s BMI (${Mark.BMI})`) : console.log(`${Mark.firstName + " " + Mark.lastName}'s BMI (${Mark.BMI}) is higher than ${John.firstName + " " + John.lastName}'s BMI (${John.BMI})`);         // we can access BMI from the both objects coz calcBMI() method evaluates the value during comparison


// John.caclBMI();
// Mark.caclBMI();    // both generates BMI for their respective objects

// (John.BMI > Mark.BMI) ? console.log(`${John.firstName + " " + John.lastName}'s BMI (${John.BMI}) is higher than ${Mark.firstName + " " + Mark.lastName}'s BMI (${Mark.BMI})`) : console.log(`${Mark.firstName + " " + Mark.lastName}'s BMI (${Mark.BMI}) is higher than ${John.firstName + " " + John.lastName}'s BMI (${John.BMI})`);













// ****** Arrays are also objects, but they are of some special kinds. So that arrays have also functions or methods like objects have.
// eg. push(), pop(), unshift(), shift() etc.