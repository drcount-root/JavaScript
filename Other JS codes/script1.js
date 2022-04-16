// QUESTION We have a temparature array with somthing error including with the values.
// We have to eleminate that error ('error' string in this case) and then calculate the max
// and min temparature from the array. And then the amplitude temparature (max - min).

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
