let massMark = 95, heightMark = 1.88, massJohn = 85, heightJohn = 1.76;

let BMI_Mark = massMark / heightMark ** 2;
let BMI_John = massJohn / heightJohn ** 2;

if (BMI_Mark > BMI_John) {
    console.log(`Mark's BMI ${BMI_Mark} is higher than John's! ${BMI_John}`);
}
else {
    console.log(`John's BMI ${BMI_John} is higher than Mark's! ${BMI_Mark}`);
}