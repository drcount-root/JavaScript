"use strict";


const calcAge = birthYear => 2022 - birthYear;


const yearsUntilRetirement = (firstName, birthYear) => {
    const retirement = 60 - calcAge(birthYear);

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }
    else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement("Subham", 1997));
console.log(yearsUntilRetirement("Jarvis", 1872));


// If we did:

// const calcAge = birthYear => 2022 - birthYear;


// const yearsUntilRetirement = (firstName, birthYear) => {
//     const retirement = 60 - calcAge(birthYear);

//     if (retirement > 0) {
//         return retirement;
//         console.log(`${firstName} retires in ${retirement} years`);
//     }
//     else {
//         return -1;
//         console.log(`${firstName} has already retired`);
//     }
// }

// console.log(yearsUntilRetirement("Subham", 1997));
// console.log(yearsUntilRetirement("Jarvis", 1872));

// the return executes immediately and exits the block or function.