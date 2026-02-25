function checkGuess(guess, solution) {
  const letters = guess.toUpperCase().split("");
  const solutionLetters = solution.toUpperCase().split("");
  const status = Array(5).fill("absent");

  for (let i = 0; i < 5; i++) {
    if (letters[i] === solutionLetters[i]) {
      status[i] = "correct";
      letters[i] = null;
      solutionLetters[i] = null;
    }
  }

  for (let i = 0; i < 5; i++) {
    if (letters[i] && solutionLetters.includes(letters[i])) {
      status[i] = "present";
      solutionLetters[solutionLetters.indexOf(letters[i])] = null;
    }
  }

  return status;
}

module.exports = { checkGuess };
