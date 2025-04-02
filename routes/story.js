const express = require("express");
const router = express.Router();

router.get("/story", (req,res) => {
	res.render("story");
});

router.get("/monuments",(req,res)=>{
	res.render("monuments")
})

router.get("/mahabharat", (req,res) => {
	res.render("mahabharat");
});


module.exports = router;	