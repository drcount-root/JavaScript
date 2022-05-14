// 'use strict';

// const x = 23;
// const newStr = 'This is what prettier extension do';

// const calcAge = birthYear => 2037 - birthYear;

// // QUESTION
// // FIX
// // NOTE
// // BUG
// // LECTURE
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
console.log(
  "--------------------- temp calc on single array ---------------------"
);

const temp = [12, false, -5, "red", 9, -7, "error"];

const calcVTemp = (t) => {
  let maxT = t[0];
  let minT = t[0];
  for (let i = 0; i < t.length; i++) {
    if (typeof t[i] !== "number") continue; // NOTE if typeof(t[i]) is not a number then skip that t[i] and move forward
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

//Using filter

console.log("\n---------- Using filter() ----------\n");

const filteredTemparatures = temp.filter((a) => typeof a === "number");
console.log(filteredTemparatures);
// a is the parameter of the anonymous function
console.log(
  `\nAmplitude Temparature = Max-Temp (${Math.max(
    ...filteredTemparatures
  )}) - Min-Temp (${Math.min(...filteredTemparatures)}) = ${
    Math.max(...filteredTemparatures) - Math.min(...filteredTemparatures)
  }`
);

//
//
//
//
//
// QUESTION Now device modified to take two temperature arrays
console.log(
  "--------------------- temp calc on two arrays at once ---------------------"
);

const temparatures_1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temparatures_2 = [false, 26, 0, "ERR", 0, -5, "error", -10];

const clacValidAmpTemp = (temp1, temp2) => {
  const finalInputTemp = temp1.concat(temp2);
  let maxTemp = finalInputTemp[0];
  let minTemp = finalInputTemp[0];
  for (let i = 0; i < finalInputTemp.length; i++) {
    if (typeof finalInputTemp[i] !== "number") continue;
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
console.log("\n---------- Using filter() ----------\n");
const theF = (arr) => {
  const filteredTemparatures = arr.filter((a) => typeof a === "number");
  console.log(filteredTemparatures);
  return `\nAmplitude Temparature = Max-Temp (${Math.max(
    ...filteredTemparatures
  )}) - Min-Temp (${Math.min(...filteredTemparatures)}) = ${
    Math.max(...filteredTemparatures) - Math.min(...filteredTemparatures)
  }\n`;
};

console.log(theF(temparatures_1));
console.log(theF(temparatures_2));
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
//QUESTION Grading
console.log("--------------------- grading ---------------------");

const gradeArr = [73, 67, 38, 33];

const gradingStuds = (grade) => {
  let final;
  if (grade >= 0 && grade <= 100) {
    if (grade > 37) {
      if (3 > (Math.trunc(grade / 5) + 1) * 5 - grade) {
        final = grade + ((Math.trunc(grade / 5) + 1) * 5 - grade);
      } else {
        final = grade;
      }
    } else {
      final = grade;
    }
  }
  return final;
};

for (let i = 0; i < gradeArr.length; i++) {
  console.log(gradingStuds(gradeArr[i]));
}
//
//
//
//
//
//
//
//
//QUESTION Grading
console.log("--------------------- grading using map() ---------------------");

function gradingStudents(grades) {
  // Used map high order array method to single out each element in array
  return grades.map((n) => {
    // find the difference after division with 5
    let diff = 5 - (n % 5);
    // make our test cases and add the diff if condition is true
    if (diff < 3 && n >= 38) {
      n += diff;
    }
    return n;
  });
}
let gRades = [4, 73, 67, 38, 33];
console.log(gradingStudents(gRades)); // Outputs:  [4,75,67,40,33]
//
//
//
//
//
//
//
//
//QUESTION Staircase
console.log(
  "--------------------- use of repeat() method ---------------------"
);

const staircase = function (n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
};

console.log(staircase(5));
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
//QUESTION To align the arr-items in descending order
console.log(
  "--------------------- align array items in descending order ---------------------"
);

const arr = [2, 1, 10, 0, -3];
function alignArr(arr) {
  let sortedArr = arr.sort((a, b) => b - a);
  return sortedArr;
}

console.log(alignArr(arr));
//
//
//
//
//
//
//
//
//
//QUESTION Mini-Max Sum
console.log("--------------------- Mini-Max Sum ---------------------");
const miniMaxSum = (arra) => {
  let sum = arra.reduce((a, b) => a + b);
  let maxValue = Math.max(...arra);
  let minValue = Math.min(...arra);
  return `${sum - maxValue} ${sum - minValue}`;
};

const arra = [5, -4, 0, 2, 3];
console.log(miniMaxSum(arra));
//
//
//
//
//
//
// BUG & FIX LECTURE
//
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsius:")),
    // The bug was that the value variable here takes input as string from the prompt. We have converted that to number using Number()
  };

  console.table(measurement); // Shows in the format of table

  const inKelvin = measurement.value + 273;
  return inKelvin;
};

console.log(measureKelvin());
//
//
//
//
// BUG & FIX LECTURE
//
// Here it shows 0 as minimum temp
//
const t1 = [3, 5, 1];
const t2 = [9, 4, 5];

const calValidAmpTemp = (temp1, temp2) => {
  const finalInTemp = temp1.concat(temp2);
  let maxTemp = 0;
  let minTemp = 0;
  for (let i = 0; i < finalInTemp.length; i++) {
    if (typeof finalInTemp[i] !== "number") continue;
    // debugger; // opens debugger automatically when execution reaches at the point. It's not necessary to put this keyword, we can open it in Chrome Dev Tool => Sources manually.
    /*breakpoint*/ if (maxTemp < finalInTemp[i])
      /*breakpoint*/ maxTemp = finalInTemp[i];
    /*breakpoint*/ if (minTemp > finalInTemp[i])
      /*breakpoint*/ minTemp = finalInTemp[i];
    // If we put breakpoints using CDT(Chrome Dev Tool) at these points we can see what happens
  }
  return `MaxTemp = ${maxTemp}  |  MinTemp = ${minTemp}  |  Amplitude temparature = ${
    maxTemp - minTemp
  }`;
};
console.log(calValidAmpTemp(t1, t2));
// We can fix this easily using let maxTemp = finalInTemp[0]; & let minTemp = finalInTemp[0];
// The bug was,
// let minTemp = 0;
// if (minTemp > finalInTemp[i]) minTemp = finalInTemp[i];
// So 0 is not bigger than any of the items of the finalInTemp array. That's the bug
//
//
//
//
//
//
//Coding Challenge: DevSkills
const printForecast = function (arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += ` ...${arr[i]}°C in ${arr.indexOf(arr[i]) + 1} days`;
  }
  return result;
};

const test1 = [17, 21, 23];
console.log(printForecast(test1));
const test2 = [12, 5, -5, 0, 4];
console.log(printForecast(test2));
