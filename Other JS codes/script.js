// 'use strict';

// const x = 23;
// const newStr = 'This is what prettier extension do';

// const calcAge = birthYear => 2037 - birthYear;

// // QUESTION
// // FIXME
// // NOTE
// // BUG
// // LEC
// // TODO

// console.log(calcAge(1991));
//
//
//
//
//
//
//
//
// QUESTION We have a temparature array with somthing error including with the values.
// We have to eleminate that error ('error' string in this case) and then calculate the max
// and min temparature from the array. And then the amplitude temparature (max - min).

const temp = [12, false, -5, 'red', 9, -7, 'error'];

const calcVTemp = t => {
  let maxT = t[0];
  let minT = t[0];
  for (let i = 0; i < t.length; i++) {
    if (typeof t[i] !== 'number') continue; // NOTE if typeof(t[i]) is not a number then skip that t[i] and move forward
    if (t[i] > maxT) maxT = t[i];
    if (t[i] < minT) minT = t[i];
  }
  return `\t\tMaxTemp = ${maxT} 
        MinTemp = ${minT}
        Amplitude Temp = ${maxT - minT}`;
};
console.log(calcVTemp(temp));
//
//
//
//
//
//
//
//
// QUESTION Now device modified to take two temperature arrays

const temparatures_1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temparatures_2 = [false, 26, 0, 'ERR', 0, -5, 'error', -10];

const clacValidAmpTemp = (temp1, temp2) => {
  const finalInputTemp = temp1.concat(temp2);
  let maxTemp = finalInputTemp[0];
  let minTemp = finalInputTemp[0];
  for (let i = 0; i < finalInputTemp.length; i++) {
    if (typeof finalInputTemp[i] !== 'number') continue;
    if (maxTemp < finalInputTemp[i]) maxTemp = finalInputTemp[i];
    if (minTemp > finalInputTemp[i]) minTemp = finalInputTemp[i];
  }
  return `MaxTemp = ${maxTemp}  |  MinTemp = ${minTemp}  |  Amplitude temparature = ${
    maxTemp - minTemp
  }`;
};
console.log(clacValidAmpTemp(temparatures_1, temparatures_2));
//
//
//
//
//
//
//
//
