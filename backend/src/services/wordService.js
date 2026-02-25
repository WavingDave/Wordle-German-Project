const words = require("../data/words");

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function isValidWord(word) {
  return words.includes(word.toLowerCase());
}

module.exports= { getRandomWord, isValidWord};