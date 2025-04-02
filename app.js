const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
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
const gameRoutes = require('./routes/game.js');
const ecommRoutes = require('./routes/ecommerce.js');
const galleryRouter = require('./routes/gallery');
const bcrypt = require('bcrypt');
const middleware = require('./middleware/middleware.js');
const User = require('./models/user.js');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const authController = require("./controller/authController");

require('dotenv').config();
require('./config/dbConnection.js');
require('./config/passport.js')(passport);

// MongoDB Connection
mongoose
  .connect('mongodb://localhost:27017/cultureHeritage', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

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

// Flash Messages Middleware
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success');
  res.locals.error_msg = req.flash('error');
  res.locals.currentUser = req.user;
  next();
});

// Serve static files
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// Routes
app.use(mapRoutes);
app.use(culRoutes);
app.use(danceRoutes);
app.use(musicRoutes);
app.use(storyRoutes);
app.use(gamesRoutes);
app.use(gameRoutes);
app.use(ecommRoutes);
app.use('/auth', authRoutes); // Ensure correct route registration
app.use('/', galleryRouter);

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
    failureFlash: 'Invalid username or password.',
  }),
  (req, res) => {
    res.redirect('/map');
  }
);

app.post('/auth/signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      req.flash('error', 'Email is already registered.');
      return res.redirect('/auth/signup');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await user.save();
    req.flash('success', 'Signup successful! Please log in.');
    res.redirect('/auth/login');
  } catch (err) {
    console.error(err);
    req.flash('error', 'Something went wrong. Please try again.');
    res.redirect('/auth/signup');
  }
});

// Forgot Password Check Route
app.get('/auth/forgot-password', (req, res) => {
  res.send('Forgot password route is working!');
});

//Folklores Routes
app.get('/folklores', (req, res) => {
  res.render('folklores'); // Render the folklores.ejs file
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
