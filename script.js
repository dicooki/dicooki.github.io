"use strict";
// console.log(document.querySelector(".secretNumber").textContent);
// document.querySelector(".message").textContent = "Correct secretNumber";
// 3) document.querySelector("body").style.backgroundColor =("#60b347");________ alternate background color for guess==secretNumber
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (guess <= score) {
    if (score > 1) {
      if (!guess) {
        document.querySelector(".message").textContent = "No Number";
        document.querySelector(".guess").style.border =
          "4px solid rgb(255, 0, 0)";
        score--;
        document.querySelector(".score").textContent = score;
      } else if (guess == secretNumber) {
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".message").textContent = "Congratulations";
        document.querySelector(".guess").style.border =
          "4px solid rgb(255, 255, 255)";
        document.querySelector(".number").style.width = "20rem";
        document.querySelector("body").style.backgroundColor = "#60b347";
        if (score > highscore) {
          highscore = score;
          document.querySelector(".highscore").textContent = highscore;
        }
      } else if (guess > secretNumber) {
        document.querySelector(".guess").style.border =
          "4px solid rgb(255, 255, 255)";
        document.querySelector(".message").textContent = "Too high";
        score--;
        document.querySelector(".score").textContent = score;
      } else if (guess < secretNumber) {
        document.querySelector(".guess").style.border =
          "4px solid rgb(255, 255, 255)";
        document.querySelector(".message").textContent = "Too low";
        score--;
        document.querySelector(".score").textContent = score;
      }
    } else if (score <= 1 && score > 0) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "you lost";
      console.log("Score reached 0 you're an idiot");
    }
  } else if (guess > 20) {
    document.querySelector(".message").textContent =
      "guess must be between 0 and 20";
    score--;
    document.querySelector(".score").textContent = score;
    console.log("guess is above 20");
  }
});
document.querySelector(".again").addEventListener("click", function () {
  console.log("Again pressed");
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").style.border =
    "4px solid rgb(255, 255, 255)";
});
