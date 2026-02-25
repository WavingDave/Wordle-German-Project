const express = require("express");
const router = express.Router();
const wordController = require("../controllers/wordController");

router.get("/word", wordController.getWord);
router.post("/guess", wordController.guessWord);

module.exports = router;
