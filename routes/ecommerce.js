const express = require("express");
const router = express.Router();

router.get("/e-commerce", (req,res) => {
	res.render("e-commerce");
});


module.exports = router;	