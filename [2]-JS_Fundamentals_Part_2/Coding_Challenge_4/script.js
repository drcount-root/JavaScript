// JS-F-2 CC#4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// console.log("----------- Bills -----------");
// console.log(bills);

const tips = [];

const total = [];





// const calcTip = function (bills) {
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

// console.log("----------- Tips -----------");
// console.log(calcTip(bills));






// const calcTotal = function (bills, tips) {
//     for (let j = 0; j < bills.length; j++) {
//         total.push(bills[j] + tips[j]);
//     }
//     return total;
// }

// console.log("----------- Totals -----------");
// console.log(calcTotal(bills, tips));






// const calcAverage = (arr) => {
//     let sum = 0;
//     // for (let x = 0; x < arr.length; x++) {
//     //     sum += arr[x];
//     // }
//     let x = 0;
//     while (x < arr.length) {
//         sum += arr[x];
//         x++;
//     }
//     const avg = sum / arr.length;
//     return avg;
// }

// console.log(`\n${calcAverage(total)} INR Per head`);



















// Efficient way

const calcTip = cost => {
    return (cost >= 50 && cost <= 300) ? ((15 / 100) * cost) : ((20 / 100) * cost);
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);         // we are not changing the value of tip. In each iteration a new tip variable is created. That's why we can declare tip using const
    tips.push(tip);
    total.push(tip + bills[i]);
}

console.log(bills, tips, total);

const calcAverage = (arr) => {
    let sum = 0;
    for (let x = 0; x < arr.length; x++) {
        sum += arr[x];
    }
    const avg = sum / arr.length;
    return avg;
}

console.log(`\n${calcAverage(total)} INR Per head`);