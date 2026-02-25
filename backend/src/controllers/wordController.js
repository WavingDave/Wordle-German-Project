const gameService = require("../services/gameService");
const wordService = require("../services/wordService");

function getWord(req, res) {
  gameService.startNewGame();
  res.json({ message: "New game started" });
}

function guessWord(req, res) {
  const { guess } = req.body;

  if (!guess) {
    return res.status(400).json({ valid: false, message: "Invalid word" });
  }

  if (guess.length !== 5) {
    return res.status(400).json({ valid: false, message: "Must be 5 letters" });
  }

  if (!wordService.isValidWord(guess)) {
    return res.status(400).json({ valid: false, message: "Not in dictionary" });
  }

  const result = gameService.guess(guess);

  res.json({
    valid: true,
    ...result,
  });
}
module.exports = { getWord, guessWord };
