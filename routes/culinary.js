const express = require("express");
const router = express.Router();

router.get("/explore", (req,res) => {
	res.render("explore");
});

router.get("/index", (req,res) => {
	res.render("index");
});

router.get("/learn", (req,res) => {
	res.render("learn");
});


module.exports = router;	