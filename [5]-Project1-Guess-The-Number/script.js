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
// The number entered into the input is logged into the console when we click the button
// document.querySelector(".check").addEventListener("click", function () {
//   console.log(document.querySelector(".guess").value);
// });
//
//
// This is to show 🎉 Correct Guess 🎉 message in the right side and the number entered into the input is logged into the console when we click the button
// document.querySelector(".check").addEventListener("click", function () {
//   console.log(document.querySelector(".guess").value);
//   document.querySelector(".message").textContent = "🎉 Correct Guess 🎉";
// });
//
//
//project-code
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  // console.log(typeof guess); // String type coz we are getting that value from an input section of the UI, until we convert it to number

  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  }
});
