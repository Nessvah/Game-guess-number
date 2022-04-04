"use strict";

// Some variables
let randomNumber = Math.trunc(Math.random() * 50 + 1);
let score = 20;
let highscore = 0;
let btnAgain = document.querySelector(".restart");
const btnCheck = document.querySelector(".check");

// Function to display feedback to user
const DISPLAYFEEDBACK = function (message) {
  document.querySelector(".message").textContent = message;
};

// Function to change backgroundColor
const CHANGEBACKCOLOR = function (color) {
  document.body.style.backgroundColor = color;
};

//Function to change score
const CHANGESCORE = function (number) {
  document.querySelector(".score").textContent = number;
};

const SHOWSECRETNUMBER = function (number) {
  document.querySelector(".secret-number").textContent = number;
};

// Function to start playing the game
const PLAYGAME = function (event) {
  //get the user input
  const guess = Number(document.querySelector(".guess").value);
  // no number on input
  if (!guess) {
    DISPLAYFEEDBACK("🛑 No number.");

    // if player guesses the number correctly
  } else if (guess === randomNumber) {
    SHOWSECRETNUMBER(randomNumber);
    DISPLAYFEEDBACK("🥳 That's the correct number!");
    CHANGEBACKCOLOR("#CBE896");

    //Updating the highscore
    if (score >= highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // if the user doesnt't guesses the number correctly
  } else if (guess !== randomNumber) {
    // If the score is higher than 1
    if (score > 1) {
      DISPLAYFEEDBACK(guess > randomNumber ? "Too high! 📈" : "Too low! 📉");
      score--;
      CHANGESCORE(score);
    } else {
      //If the user runs out of guesses
      DISPLAYFEEDBACK("You lost the game! 😢");
      SHOWSECRETNUMBER(randomNumber);
      CHANGEBACKCOLOR("#EB5D4E");
      CHANGESCORE(0);
    }
  }
};

btnCheck.addEventListener("click", PLAYGAME);

// Function to reset the game and start over

btnAgain.addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 50 + 1);
  score = 20;
  console.log(score);

  CHANGEBACKCOLOR("#BEB7A4");
  DISPLAYFEEDBACK("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".secret-number").textContent = "?";
  document.querySelector(".guess").value = "";
});
