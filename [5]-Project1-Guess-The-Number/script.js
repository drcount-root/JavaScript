"use strict";

// // ----- getting elements -----

// // for multiple dot operators they executes left to right direction
// // for class
// console.log(document.querySelector(".message").textContent);
// // for id
// // console.log(document.querySelector("#message").textContent);
// // for tag
// // console.log(document.querySelector("h1").textContent);
// //
// //
// //
// //
// // ----- setting elements -----

// document.querySelector(".message").textContent = "Correct Number 🎉";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);
//
//
//
//
//
//project
document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
});
