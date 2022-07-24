'use strict';

const honas = {
  year: 1997,
  calcAge: function () {
    return 2022 - this.year;
  },
};

console.log(honas.calcAge());

//

const matilda = {
  year: 1998,
};

matilda.calcAge = honas.calcAge;

console.log(matilda);

console.log(matilda.calcAge());
