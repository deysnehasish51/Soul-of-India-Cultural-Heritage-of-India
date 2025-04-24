// routes/upload.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const StateInfo = require('../models/model'); // Import your model

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage });

// Upload endpoint
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const fileUrl = `/uploads/${req.file.filename}`;

    const state = await StateInfo.findOne({ stateName: req.body.stateName });

    if (state) {
      state.imageURL.push(fileUrl); // Or use .videoURL = ... depending on the type
      await state.save();
      res.status(200).json({ message: 'File uploaded and saved to MongoDB!', fileUrl });
    } else {
      res.status(404).json({ error: 'State not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Upload failed' });
  }
});

module.exports = router;
