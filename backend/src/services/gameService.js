const wordService = require("./wordService");
const { checkGuess } = require("./checkService");

let currentSolution = "";
let currentAttempts = [];
let keyboardStatus = {};

function startNewGame() {
  currentSolution = wordService.getRandomWord();
  currentAttempts = [];
  keyboardStatus = {};
}

function updateKeaboard(guessWord, statusArray) {
  const priority = {
    correct: 3,
    present: 2,
    absent: 1,
  };

  const letter = guessWord.toUpperCase().split("");

  letter.forEach((letter, i) => {
    const newState = statusArray[i];
    const currentState = keyboardStatus[letter];

    if (!currentState || priority[newState] > priority[currentState]) {
      keyboardStatus[letter] = newState;
    }
  });
}

function guess(guessWord) {
  const status = checkGuess(guessWord, currentSolution);
  updateKeaboard(guessWord, status);

  currentAttempts.push({
    guess: guessWord.toUpperCase(),
    status,
  });

  let gameState = "playing";

  if (guessWord.toUpperCase() === currentSolution.toUpperCase()) {
    gameState = "won";
  } else if (currentAttempts.length >= 6) {
    gameState = "lost";
  }

  return {
    status,
    gameState,
    attempts: currentAttempts,
    keyboardStatus,
    solution: gameState === "lost" ? currentSolution : null,
  };
}

module.exports = {
  startNewGame,
  guess,
};
