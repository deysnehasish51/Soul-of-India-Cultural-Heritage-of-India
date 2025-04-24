const express = require("express");
const router = express.Router();

// Route to render the main places page
router.get("/places", (req, res) => {
    res.render("places"); // Ensure "places.ejs" exists in the views directory
});

// Route to handle specific state-based places
router.get("/placesexp", (req, res) => {
    const state = req.query.state || "Unknown"; // Default to "Unknown" if no state is provided
    res.render("placesexp", { state }); // Pass state dynamically to "hplaces.ejs"
});

router.get("/artexp", (req, res) => {
    const state = req.query.state || "Unknown"; // Default to "Unknown" if no state is provided
    res.render("artexp", { state }); // Pass state dynamically to "hplaces.ejs"
});


module.exports = router;
