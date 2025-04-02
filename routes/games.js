const express = require("express");
const router = express.Router();

router.get("/games", (req,res) => {
	res.render("games");
});

router.get("/puzzle", (req,res) => {
	res.render("puzzle");
});

router.get("/crossword", (req,res) => {
	res.render("crossword");
});

module.exports = router;	