"use strict";

// ----- getting elements -----

// for multiple dot operators they executes left to right direction
// for class
console.log(document.querySelector(".message").textContent);
// for id
// console.log(document.querySelector("#message"));
// for tag
// console.log(document.querySelector("h1").textContent);
//
//
//
//
// ----- setting elements -----

document.querySelector(".message").textContent = "Correct Number 🎉";
console.log(document.querySelector(".message").textContent);
