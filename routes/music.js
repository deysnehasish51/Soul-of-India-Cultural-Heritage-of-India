const express = require("express");
const router = express.Router();

router.get("/music", (req,res) => {
	res.render("music");
});

router.get("/musicexp",(req,res)=>{
	res.render("musicexp")
})

router.get("/musiclearn",(req,res)=>{
	res.render("musiclearn")
})

module.exports = router;	