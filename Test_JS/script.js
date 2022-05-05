//QUESTION To remove the numbers from the arr which are present in without

const arr = [1, 2, 2, 3, 1, 2];
const without = [2, 3];

// const removeListedValues = function (arr, without) {
//   const resultArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let arrNum = arr[i];
//     let isEqual = false;
//     for (let j = 0; j < without.length; j++) {
//       let withoutNum = without[j];
//       if (arrNum === withoutNum) isEqual = true;
//     }
//     if (isEqual === false) {
//       resultArr.push(arrNum);
//     }
//   }
//   return resultArr;
// };

// console.log(removeListedValues(arr, without));
//
//
//
// ------------------------ using filter ------------------------
//
const withoutNumsSet = new Set(without);
const newArr = arr.filter(num => {
  return !withoutNumsSet.has(num);
});
console.log(newArr);
