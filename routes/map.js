const express = require("express");
const router = express.Router();


// Import your Mongoose model
const model = require('../models/model');

router.get("/", (req,res) => {
	res.render("map");
});
router.get('/statePage/:stateName', async (req, res) => {
    const stateName = req.params.stateName.trim();
    try {
        // Retrieve data for the given stateName from your MongoDB database
        const stateData = await model.findOne({ stateName });

        if (stateData) {
            // Render the single 'statePage.ejs' template with the 'stateData' for the specific state
            res.render('statePage', { stateData });
        } else {
            // Handle the case where the state is not found in your database
            res.status(404).send('State not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

router.get("/calendar", (req,res) => {
	res.render("calendar");
});

router.get("/login", (req,res) => {
	res.render("login");
});


module.exports = router;	
