const bill = 430;

const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

console.log(`\nTotal amount: \nBill = ${bill}\nTip = ${tip}\n-------------\nTotal = ${bill + tip}`);