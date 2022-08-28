"use strict";

// >> Value Initialization!
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const currentScorePlayer1 = document.getElementById("current--0");
const currentScorePlayer2 = document.getElementById("current--1");

// >> Starting Condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// >> New Game
btnNew.addEventListener("click", function () {
  //    Reloading the the page.
  window.location.reload();
});

// >> Rolling the Dice
btnRoll.addEventListener("click", function () {
  if (playing) {
    //  1. Generating a random dice.
    const dice = Math.trunc(Math.random() * 6) + 1;

    //  2. Display the Dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    //  3. If rolled 1: switch to next player
    if (dice !== 1) {
      //  If not rolled 1
      currentScore = currentScore + dice;
      // Displaying current score in payer 1
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// >> Hold Button
btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Hold the Current Score in main score of active player
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    // 2. check 100
    if (score[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");

      // Ends the game
      playing = false;
      diceEl.classList.remove("hidden");
    }
    // switch player
    switchPlayer();
  }
});

// >> Switch player function
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  document;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}
