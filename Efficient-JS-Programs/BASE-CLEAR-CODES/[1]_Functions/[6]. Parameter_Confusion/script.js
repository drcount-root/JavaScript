"use strict";


const calcAverage = (a, b, c) => (a + b + c) / 3;


const checkWinner = (avgDolphins, avgKoalas) => {
    let winner = "";
    if (avgDolphins >= 2 * avgKoalas) {
        winner = `\nDolphins win (${avgDolphins} vs. ${avgKoalas})`;
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        winner = `\nKoalas win (${avgDolphins} vs. ${avgKoalas})`;
    }
    else {
        winner = `\nNo one wins! (${avgDolphins} vs. ${avgKoalas})`;
    }
    return winner;
}


let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));


scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));


scoreKoalas = calcAverage(85, 54, 41);
scoreDolphins = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// parameter avgDolphins takes the value of scoreDolphins and avgKoalas takes the value of scoreKoalas (just re-assignment)


// "use strict";


// const avgScore = (first, second, third) => (first + second + third) / 3;

// const avgDolphins = Math.floor(avgScore(1, 0, 45));
// const avgKoalas = Math.floor(avgScore(47, 30, 63));

// console.log(`Dolphins = ${avgDolphins} & Koalas = ${avgKoalas}`);

// const checkWinner = (avgDolphins, avgKoalas) => {
//     let winner = "";
//     if (avgDolphins >= 2 * avgKoalas) {
//         winner = `🏆 Dolphins Wins! 🏆 (${avgDolphins} vs ${avgKoalas})`;
//     }
//     else if (avgKoalas >= 2 * avgDolphins) {
//         winner = `🏆 Koalas Wins! 🏆 (${avgDolphins} vs ${avgKoalas})`;
//     }
//     else {
//         winner = "No One Wins!";
//     }

//     return winner;
// }

// console.log(checkWinner(avgDolphins, avgKoalas));