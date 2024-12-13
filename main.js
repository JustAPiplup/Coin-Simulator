// COIN FLIP SIMULATOR

// HTML Variables
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");
let oneEl = document.getElementById("one-out");
let twoEl = document.getElementById("two-out");
let threeEl = document.getElementById("three-out");
let fourEl = document.getElementById("four-out");
let fiveEl = document.getElementById("five-out");
let sixEl = document.getElementById("six-out");
let outputEl2 = document.getElementById("output2");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

// Count Variables
let numHeads = 0;
let numTails = 0;

function btnClicked() {
  // Generate a Random Number
  let randNum = Math.random();
  console.log(randNum);

  // Simulate the Coin Flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img width='150px' src='img/heads.png' />";
    numHeads += 1;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img width='150px' src='img/tails.png' />";
    numTails += 1;
    tailsEl.innerHTML = numTails;
  }
}

document.getElementById("dice-btn").addEventListener("click", diceRoll);

let numOne = 0;
let numTwo = 0;
let numThree = 0;
let numFour = 0;
let numFive = 0;
let numSix = 0;

function diceRoll() {
  // Generate a Random Number
  let randNum2 = Math.random() * 5 + 1;
  let round = randNum2.toFixed();

  // Simulate the Dice Roll
  if (round == 1) {
    outputEl2.innerHTML = "<img width='100px' src='img/1.png' />";
    numOne += 1;
    oneEl.innerHTML = numOne;
  } else if (round == 2) {
    outputEl2.innerHTML = "<img width='100px' src='img/2.png' />";
    numTwo += 1;
    twoEl.innerHTML = numTwo;
  } else if (round == 3) {
    outputEl2.innerHTML = "<img width='100px' src='img/3.png' />";
    numThree += 1;
    threeEl.innerHTML = numThree;
  } else if (round == 4) {
    outputEl2.innerHTML = "<img width='100px' src='img/4.png' />";
    numFour += 1;
    fourEl.innerHTML = numFour;
  } else if (round == 5) {
    outputEl2.innerHTML = "<img width=100px' src='img/5.png' />";
    numFive += 1;
    fiveEl.innerHTML = numFive;
  } else {
    outputEl2.innerHTML = "<img width='100px' src='img/6.png' />";
    numSix += 1;
    sixEl.innerHTML = numSix;
  }
}
