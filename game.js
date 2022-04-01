"use strict";

// Some variables
let randomNumber = Math.trunc(Math.random() * 50 + 1);
let score = 20;
let highscore = 0;
const btnCheck = document.querySelector(".check");

// Function to display feedback to user
const DISPLAYFEEDBACK = function (message) {
  document.querySelector(".message").textContent = message;
};

// Function to change backgroundColor
const CHANGEBACKCOLOR = function (color) {
  document.body.style.backgroundColor = color;
};

// Function to start playing the game
const PLAYGAME = function (event) {
  const guess = Number(document.querySelector(".guess").value);

  // no number on input
  if (!guess) {
    DISPLAYFEEDBACK("🛑 No number.");

    // if player hits the number
  } else if (guess === randomNumber) {
    document.querySelector(".secret-number").textContent = randomNumber;
    DISPLAYFEEDBACK("🥳 That's the correct number!");
    CHANGEBACKCOLOR("#CBE896");

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      DISPLAYFEEDBACK(guess > randomNumber ? "Too high!" : "Too low!");
      document.querySelector(".score").textContent = score;
      score--;
    } else {
      DISPLAYFEEDBACK("You lost the game!");
      CHANGEBACKCOLOR("#FD5D5D");
      document.querySelector(".score").textContent = "0";
    }
  }
};

btnCheck.addEventListener("click", PLAYGAME);

// Reseting the game

const changescore = function (number) {
  document.querySelector(".score").textContent = number;
};

let btnAgain = document.querySelector(".restart");

const restartGame = function (event) {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 50 + 1);

  document.querySelector(".secret-number").textContent = "?";
  changescore(0);
  CHANGEBACKCOLOR("#BEB7A4");
  DISPLAYFEEDBACK("Start guessing...");
  document.querySelector(".guess").value = "";
};

btnAgain.addEventListener("click", restartGame);
