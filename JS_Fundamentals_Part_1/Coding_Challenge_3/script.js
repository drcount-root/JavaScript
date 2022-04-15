const sD = (96 + 108 + 189) / 3;
const sK = (188 + 121 + 110) / 3;

console.log(`avg(sD)=${sD} & avg(sK)=${sK}`);

if (sD > sK && sD >= 100) {
    console.log("D 🏆");
}
else if (sK > sD && sK >= 100) {
    console.log("K 🏆");
}
else if (sD === sK && sD >= 100 && sK >= 100) {
    console.log("Draw");
}
else {
    console.log("No one wins");
}