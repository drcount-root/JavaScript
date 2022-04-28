let massMark = 95, heightMark = 1.88, massJohn = 85, heightJohn = 1.76;

let BMI_Mark = massMark / heightMark ** 2;
let BMI_John = massJohn / heightJohn ** 2;

let markHigherBMI = BMI_Mark > BMI_John;  // markHigherBMI holding boolean value

console.log("\n" + markHigherBMI);