const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const fs = require('fs');
const helmet = require('helmet');
const crypto = require('crypto');
const { GridFsBucket } = require('mongodb');
const { MongoClient } = require('mongodb'); // Import MongoClient for GridFS
const { GridFsStorage } = require('multer-gridfs-storage'); // Import GridFsStorage for file uploads
const { GridFSBucket } = require('mongodb'); // Import GridFSBucket for file streaming
const cors = require('cors');
const multer = require('multer');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const authRoutes = require('./routes/auth');
const mapRoutes = require('./routes/map.js');
const culRoutes = require('./routes/culinary.js');
const danceRoutes = require('./routes/dance.js');
const musicRoutes = require('./routes/music.js');
const storyRoutes = require('./routes/story.js');
const gamesRoutes = require('./routes/games.js');
const ecommRoutes = require('./routes/ecommerce.js');
const galleryRouter = require('./routes/gallery');
const heritageRoutes = require("./routes/heritage");
const bcrypt = require('bcrypt');
const middleware = require('./middleware/middleware.js');
const User = require('./models/user.js');
const nodemailer = require('nodemailer');
const authController = require("./controller/authController");

const uploadRoutes = require('./routes/upload');
app.use('/api', uploadRoutes);
app.use('/uploads', express.static('uploads'));

require('dotenv').config();
require('./config/dbConnection.js');
require('./config/passport.js')(passport);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Flash Messages Middleware
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success');
  res.locals.error_msg = req.flash('error');
  res.locals.currentUser = req.user;
  next();
});

// MongoDB Connection Setup
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/cultureHeritage';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const conn = mongoose.connection;

// Initialize GridFSBucket
let gfs;
let gridFSBucket;

conn.once('open', () => {
  console.log('✅ Connected to MongoDB');
  gridFSBucket = new GridFSBucket(conn.db, {
    bucketName: 'uploads',
  });
  gfs = gridFSBucket;
});

// Configure Storage Engine for multer-gridfs-storage
const storage = new GridFsStorage({
  url: mongoURI,
  options: { useUnifiedTopology: true },
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads', // Collection name
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });

// Upload Schema for Metadata
const UploadSchema = new mongoose.Schema({
  filename: String,
  description: String,
  stateName: String, // Added field for state name
  uploadDate: {
    type: Date,
    default: Date.now,
  },
});
const Upload = mongoose.model('Upload', UploadSchema);

// Routes
app.get('/upload', (req, res) => {
  res.render('upload'); // Render the upload.ejs file
});

app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    const { description, stateName } = req.body;

    if (!req.file || !description || !stateName) {
      return res.status(400).json({ message: 'File, description, and state name are required.' });
    }

    // Save metadata to MongoDB
    const newUpload = new Upload({
      filename: req.file.filename,
      description: description,
      stateName: stateName, // Store the state name
    });

    await newUpload.save();

    res.status(200).json({
      message: 'File uploaded successfully to the database',
      file: req.file.filename,
      description: description,
      stateName: stateName,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Fetch File by Filename
app.get('/api/file/:filename', async (req, res) => {
  try {
    const file = await gfs.find({ filename: req.params.filename }).toArray();

    if (!file || file.length === 0) {
      return res.status(404).json({ message: 'File not found' });
    }

    gfs.openDownloadStreamByName(req.params.filename).pipe(res);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete File by Filename
app.delete('/api/file/:filename', async (req, res) => {
  try {
    const file = await gfs.find({ filename: req.params.filename }).toArray();

    if (!file || file.length === 0) {
      return res.status(404).json({ message: 'File not found' });
    }

    await gfs.delete(file[0]._id);
    res.status(200).json({ message: 'File deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Serve static files
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/uploads', express.static('uploads')); // Serve uploaded files

// Routes
app.use(mapRoutes);
app.use(culRoutes);
app.use(danceRoutes);
app.use(musicRoutes);
app.use(storyRoutes);
app.use(gamesRoutes);
app.use(ecommRoutes);
app.use("/", heritageRoutes);
app.use(helmet());
app.use('/auth', authRoutes); // Ensure correct route registration
app.use('/', galleryRouter);
app.use(cors());

// Forgot Password Route
app.post('/auth/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      req.flash('error', 'Email not found.');
      return res.redirect('/auth/forgot-password');
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    user.resetPasswordExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
    await user.save();

    const resetURL = `http://${req.headers.host}/auth/reset-password/${resetToken}`;
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const message = `
      <h1>Password Reset</h1>
      <p>You have requested to reset your password. Click the link below:</p>
      <a href="${resetURL}" target="_blank">Reset Password</a>
    `;

    await transporter.sendMail({
      to: user.email,
      subject: 'Password Reset Request',
      html: message,
    });

    req.flash('success', 'Reset link sent to your email.');
    res.redirect('/auth/forgot-password');
  } catch (err) {
    console.error(err);
    req.flash('error', 'An error occurred. Please try again.');
    res.redirect('/auth/forgot-password');
  }
});

// Reset Password Route
app.get('/auth/reset-password/:token', async (req, res) => {
  const resetToken = req.params.token;
  const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');

  try {
    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      req.flash('error', 'Invalid or expired token.');
      return res.redirect('/auth/forgot-password');
    }

    res.render('reset-password', { userId: user.id });
  } catch (err) {
    console.error(err);
    req.flash('error', 'An error occurred. Please try again.');
    res.redirect('/auth/forgot-password');
  }
});

app.post('/auth/reset-password', async (req, res) => {
  const { userId, newPassword, confirmPassword } = req.body;

  if (newPassword !== confirmPassword) {
    req.flash('error', 'Passwords do not match.');
    return res.redirect(`/auth/reset-password/${userId}`);
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      req.flash('error', 'User not found.');
      return res.redirect('/auth/forgot-password');
    }

    user.password = await bcrypt.hash(newPassword, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    req.flash('success', 'Password updated successfully!');
    res.redirect('/auth/login');
  } catch (err) {
    console.error(err);
    req.flash('error', 'An error occurred. Please try again.');
    res.redirect('/auth/forgot-password');
  }
});

// Login and Signup Routes
app.post(
  '/auth/login',
  passport.authenticate('local', {
    failureRedirect: '/auth/login',
    failureFlash: true,
  }),
  (req, res) => {
    res.redirect('/');
  }
);

//Folklores Routes
app.get('/folklores', (req, res) => {
  res.render('folklores'); // Render the folklores.ejs file
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
