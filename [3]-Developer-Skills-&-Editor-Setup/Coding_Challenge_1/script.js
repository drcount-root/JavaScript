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
