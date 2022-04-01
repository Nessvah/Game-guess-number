"use strict";

// Some variables
let randomNumber = Math.trunc(Math.random() * 50 + 1);
let score = 20;
let highscore = 0;
const btnCheck = document.querySelector(".check");

// Function to display feedback to user

const displayFeedback = function (message) {
  document.querySelector(".message").textContent = message;
};

// Function to get input of the user on click

btnCheck.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // no number on input
  if (!guess) {
    displayFeedback("🛑 No number.");

    // if player hits the number
  } else if (guess === randomNumber) {
    displayFeedback("🥳 That's the correct number!");
    document.querySelector(".secret-number").textContent = randomNumber;
    document.body.style.backgroundColor = "#CBE896";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayFeedback(guess > randomNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayFeedback("You lost the game!");
      document.querySelector(".score").textContent = 0;
      document.body.style.backgroundColor = "#FD5D5D";
    }
  }
});

// Reseting the game

let btnAgain = document.querySelector(".restart");

const restartGame = function (event) {
  document.querySelector(".secret-number").textContent = "?";
  document.querySelector(".score").textContent = "0";
  document.body.style.backgroundColor = "#BEB7A4";
  document.querySelector(".message").textContent = "Start guessing...";
};

btnAgain.addEventListener("click", restartGame);
