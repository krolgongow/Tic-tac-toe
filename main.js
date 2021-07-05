"use strict";

const resetBtn = document.querySelector(".reset");
const player1Move = document.querySelector(".player1");
const player2Move = document.querySelector(".player2");
const cover = document.querySelector(".cover");
const result = document.querySelector(".result");
const winner = document.querySelector(".winner");
const newGameBtn = document.querySelector(".newGame");
const fields = [...document.querySelectorAll(".field")];

let activePlayer = 0;
let player1Choices = [];
let player2Choices = [];

//Checking which field was choosen
const checkingPlayerFields = function (e, playerChoices) {
  if (e.target.classList.contains("1")) {
    playerChoices.push(1);
  } else if (e.target.classList.contains("2")) {
    playerChoices.push(2);
  } else if (e.target.classList.contains("3")) {
    playerChoices.push(3);
  } else if (e.target.classList.contains("4")) {
    playerChoices.push(4);
  } else if (e.target.classList.contains("5")) {
    playerChoices.push(5);
  } else if (e.target.classList.contains("6")) {
    playerChoices.push(6);
  } else if (e.target.classList.contains("7")) {
    playerChoices.push(7);
  } else if (e.target.classList.contains("8")) {
    playerChoices.push(8);
  } else if (e.target.classList.contains("9")) {
    playerChoices.push(9);
  }
};

//Selecting field
const choice = function (e) {
  if (activePlayer == 0) {
    const img = document.createElement("img");
    img.classList.add("circle");
    img.setAttribute("src", "./assets/circle.png");
    e.target.appendChild(img);
    e.target.removeEventListener("click", choice);
    player1Move.classList.add("inactive");
    player2Move.classList.remove("inactive");
    checkingPlayerFields(e, player1Choices);
    showResult(player1Choices);
    activePlayer = 1;
  } else if (activePlayer == 1) {
    const img = document.createElement("img");
    img.classList.add("cross");
    img.setAttribute("src", "./assets/cross.png");
    e.target.appendChild(img);
    e.target.removeEventListener("click", choice);
    player2Move.classList.add("inactive");
    player1Move.classList.remove("inactive");
    checkingPlayerFields(e, player2Choices);
    showResult(player2Choices);
    activePlayer = 0;
  }
};

//Win conditions
const showResult = function (arr) {
  if (
    (arr.includes(1) && arr.includes(2) && arr.includes(3)) ||
    (arr.includes(1) && arr.includes(4) && arr.includes(7)) ||
    (arr.includes(1) && arr.includes(5) && arr.includes(9)) ||
    (arr.includes(2) && arr.includes(5) && arr.includes(8)) ||
    (arr.includes(3) && arr.includes(6) && arr.includes(9)) ||
    (arr.includes(3) && arr.includes(5) && arr.includes(7)) ||
    (arr.includes(4) && arr.includes(5) && arr.includes(6)) ||
    (arr.includes(7) && arr.includes(8) && arr.includes(9))
  ) {
    cover.classList.remove("off");
    result.classList.remove("off");
    if (activePlayer == 0) {
      winner.textContent = "Player 1 won!";
    } else {
      winner.textContent = "Player 2 won!";
    }
  }
};

const initialization = function () {
  for (const field of fields) {
    field.addEventListener("click", choice);
  }
};

const reset = function () {
  // window.location.reload(true);
  activePlayer = 0;
  player1Choices = [];
  player2Choices = [];
  cover.classList.add("off");
  result.classList.add("off");
  const images = [...document.querySelectorAll("img")];
  for (let i = 0; i < images.length; i++) {
    images[i].remove();
  }
  player2Move.classList.add("inactive");
  player1Move.classList.remove("inactive");
  initialization();
};

resetBtn.addEventListener("click", reset);
newGameBtn.addEventListener("click", reset);

initialization();
