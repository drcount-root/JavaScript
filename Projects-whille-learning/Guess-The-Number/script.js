// "use strict";

// // // ----- getting elements -----

// // // for multiple dot operators they executes left to right direction
// // // for class
// // console.log(document.querySelector(".message").textContent);
// // // for id
// // // console.log(document.querySelector("#message").textContent);
// // // for tag
// // // console.log(document.querySelector("h1").textContent);
// // //
// // //
// // //
// // //
// // // ----- setting elements -----

// // document.querySelector(".message").textContent = "Correct Number 🎉";
// // console.log(document.querySelector(".message").textContent);

// // document.querySelector(".number").textContent = 13;
// // document.querySelector(".score").textContent = 10;

// // document.querySelector(".guess").value = 23;
// // console.log(document.querySelector(".guess").value);
// //
// //
// //
// //
// // The number entered into the input is logged into the console when we click the button
// // document.querySelector(".check").addEventListener("click", function () {
// //   console.log(document.querySelector(".guess").value);
// // });
// //
// //
// // This is to show 🎉 Correct Guess 🎉 message in the right side and the number entered into the input is logged into the console when we click the button
// // document.querySelector(".check").addEventListener("click", function () {
// //   console.log(document.querySelector(".guess").value);
// //   document.querySelector(".message").textContent = "🎉 Correct Guess 🎉";
// // });
// //
// //
// //project-code
// //
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;
// const displayMessage = function (msg) {
//   document.querySelector(".message").textContent = msg;
// };
// //
// //
// //
// // Check! button functionalities
// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   console.log(guess);
//   // console.log(typeof guess); // String type coz we are getting that value from an input section of the UI, until we convert it to number

//   // when there is no input
//   if (!guess) {
//     // document.querySelector(".message").textContent = "No number!";
//     displayMessage("No number!");
//   }
//   // when the player wins
//   else if (guess === secretNumber) {
//     // document.querySelector(".message").textContent = "🎉 Correct Guess! 🎉";
//     displayMessage("🎉 Correct Guess! 🎉");
//     document.querySelector(".number").textContent = secretNumber;

//     // css manipulation
//     document.querySelector("body").style.backgroundColor = "#60b347";
//     document.querySelector(".number").style.width = "30rem";

//     // chech for highscore
//     if (score > highscore) {
//       highscore = score;
//     }
//     document.querySelector(".highscore").textContent = highscore;
//   }
//   // when guess is wrong
//   else if (guess !== secretNumber) {
//     if (score > 1) {
//       // document.querySelector(".message").textContent =
//       //   guess > secretNumber ? "Too high!" : "Too low!";
//       displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       // document.querySelector(".message").textContent = "Game Over!";
//       displayMessage("Game Over!");
//       document.querySelector(".score").textContent = 0;
//     }
//   }

//   // guess is too high
//   // else if (guess > secretNumber) {
//   //   if (score > 1) {
//   //     document.querySelector(".message").textContent = "Too high!";
//   //     score--;
//   //     document.querySelector(".score").textContent = score;
//   //   } else {
//   //     document.querySelector(".message").textContent = "Game Over!";
//   //     document.querySelector(".score").textContent = 0;
//   //   }
//   // }
//   // // when guess is too low
//   // else if (guess < secretNumber) {
//   //   if (score > 1) {
//   //     document.querySelector(".message").textContent = "Too low!";
//   //     score--;
//   //     document.querySelector(".score").textContent = score;
//   //   } else {
//   //     document.querySelector(".message").textContent = "Game Over!";
//   //     document.querySelector(".score").textContent = 0;
//   //   }
//   // }
// });
// //
// //
// //
// // Again button functionalities
// document.querySelector(".again").addEventListener("click", function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   // document.querySelector(".message").textContent = "Start guessing...";
//   displayMessage("Start guessing...");
//   document.querySelector(".score").textContent = score;
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".guess").value = "";
//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".number").style.width = "15rem";
// });

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (msg) {
  document.querySelector(".message").textContent = msg;
};

// Check! button functionalities
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // when there is no input
  if (!guess) {
    displayMessage("No number!");
  }

  // when the player wins
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Guess! 🎉");
    document.querySelector(".number").textContent = secretNumber;

    // css manipulation
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // chech for highscore
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector(".highscore").textContent = highscore;
  }
  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Game Over!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Again button functionalities
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
