// Bills

const bills = [125, 555, 44];
console.log("\nBills");
console.log(bills);

const tips = [];

/*
for (let i = 0; i < bills.length; i++) {
    let tip = 0;
    (bills[i] >= 50 && bills[i] <= 300) ? tip = (15 / 100) * bills[i] : tip = (20 / 100) * bills[i];
    tips.push(tip);
}

console.log("\nTips");
console.log(tips);
*/


// Tips

const calcTips = bills => {
    for (let i = 0; i < bills.length; i++) {
        let tip = 0;
        (bills[i] >= 50 && bills[i] <= 300) ? tip = (15 / 100) * bills[i] : tip = (20 / 100) * bills[i];
        tips.push(tip);
    }
    return tips;
}

console.log("\nTips");
console.log(calcTips(bills));


// Total

const total = [];

const totalArrFunc = (bills, tips) => {
    for (let i = 0; i < bills.length; i++) {
        total.push(bills[i] + tips[i]);
    }
    return total;
}

console.log("\nTotals");
console.log(totalArrFunc(bills, tips));











// const bills = [125, 555, 44];
// console.log("\n```` Bills ````\n");
// console.log(bills);

// const tips = [];
// const total = [];

// const calcTips = function (bills) {
//     for (let i = 0; i < bills.length; i++) {
//         let tip = 0;
//         if (bills[i] >= 50 && bills[i] <= 300) {
//             tip = (15 / 100) * bills[i];
//         }
//         else {
//             tip = (20 / 100) * bills[i];
//         }
//         tips.push(tip);
//     }
//     return tips;
// }

// console.log("\n```` Tips ````\n");
// console.log(calcTips(bills));

// const calcTotal = function (bills, tips) {
//     for (let j = 0; j < bills.length; j++) {
//         total.push(bills[j] + tips[j]);
//     }
//     return total;
// }

// console.log("\n```` Total ````\n");
// console.log(calcTotal(bills, tips));


// console.log("\n```` Breakdowns ````\n");
// for (let x = 0; x < bills.length; x++) {
//     console.log(`Bill amount = ${bills[x]} & Tips = ${tips[x]}. Total amount = ${bills[x] + tips[x]}`);
//     if (x === bills.length - 1) console.log("\n\nThanks You! & See you soon!");
// }