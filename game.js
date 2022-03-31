"use strict";

// Some variables
let secretNumber = Math.trunc(Math.random() * 50 + 1);
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
  } else if (guess === secretNumber) {
    displayFeedback("🥳 That's the correct number!");
    document.querySelector(".secret-number").textContent = secretNumber;
    document.body.style.backgroundColor = "#CBE896";
  }
});
