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
//
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  // console.log(typeof guess); // String type coz we are getting that value from an input section of the UI, until we convert it to number

  // when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  }
  // when the player wins
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Guess! 🎉";

    // css manipulation
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }
  // guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game Over!";
      document.querySelector(".score").textContent = 0;
    }
  }
  // when guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game Over!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
