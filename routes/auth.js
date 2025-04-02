const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const User = require("../models/user");
const authController = require("../controller/authController");

// Signup Page
router.get("/signup", (req, res) => {
  res.render("signup", {
    errors: [],
    firstName: "",
    lastName: "",
    email: "",
  });
});

// Signup Logic
router.post(
  "/signup",
  [
    body("firstName").notEmpty().withMessage("First name is required"),
    body("lastName").notEmpty().withMessage("Last name is required"),
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password1")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("password2")
      .custom((value, { req }) => value === req.body.password1)
      .withMessage("Passwords do not match"),
  ],
  async (req, res) => {
    const { firstName, lastName, email, password1 } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("signup", {
        errors: errors.array(),
        firstName,
        lastName,
        email,
      });
    }

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.render("signup", {
          errors: [{ msg: "Email is already registered" }],
          firstName,
          lastName,
          email,
        });
      }

      const hashedPassword = await bcrypt.hash(password1, 10);
      const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
      await newUser.save();

      req.flash("success", "Signup successful! Please login.");
      res.redirect("/auth/login");
    } catch (error) {
      console.error("Signup error:", error);
      res.render("signup", {
        errors: [{ msg: "Something went wrong, please try again" }],
        firstName,
        lastName,
        email,
      });
    }
  }
);

// Login Page
router.get("/login", (req, res) => {
  res.render("login", {
    error_msg: req.flash("error")[0] || null,
    success_msg: req.flash("success")[0] || null,
  });
});

// Login Logic
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/login",
    failureFlash: "Invalid email or password.",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

// Forgot Passwordform
router.get("/forgot-password", authController.forgotPasswordForm);
router.post("/forgot-password", authController.forgotPassword);

// Reset Password
router.get("/reset-password/:token", authController.resetPasswordForm);
router.post("/reset-password", authController.updatePassword);

// Logout
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error(err);
      return res.redirect("/auth/login");
    }
    req.flash("success", "You have logged out successfully.");
    res.redirect("/");
  });
});

module.exports = router;
