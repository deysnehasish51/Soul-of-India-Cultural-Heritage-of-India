const express = require("express");
const router = express.Router();

router.get("/games", (req,res) => {
	res.render("games");
});

router.get("/puzzle", (req,res) => {
	res.render("puzzle");
});

router.get("/quiz", (req,res) => {
	res.render("quiz");
});

module.exports = router;	