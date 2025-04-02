const crypto = require("crypto");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const User = require("../models/user"); // Ensure this points to your actual User model

// Forgot Password Form
exports.forgotPasswordForm = (req, res) => {
  res.render("forgot-password", {
    error_msg: "",
    success_msg: "",
  });
};

// Forgot Password Logic
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.render("forgot-password", {
        error_msg: "If the email exists, a reset link will be sent shortly.",
        success_msg: "",
      });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    user.resetPasswordExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
    await user.save();

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const resetURL = `http://${req.headers.host}/auth/reset-password/${resetToken}`;
    const message = `
      <h1>Password Reset</h1>
      <p>You have requested to reset your password. Click the link below:</p>
      <a href="${resetURL}" target="_blank">Reset Password</a>
    `;

    await transporter.sendMail({
      to: user.email,
      subject: "Password Reset Request",
      html: message,
    });

    res.render("forgot-password", {
      error_msg: "",
      success_msg: "A password reset link has been sent to your email.",
    });
  } catch (error) {
    console.error("Error in forgotPassword:", error);
    res.render("forgot-password", {
      error_msg: "An error occurred. Please try again later.",
      success_msg: "",
    });
  }
};

// Reset Password Form
exports.resetPasswordForm = async (req, res) => {
  const resetToken = req.params.token;

  try {
    const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.render("reset-password", {
        error_msg: "Invalid or expired reset link.",
        success_msg: "",
      });
    }

    res.render("reset-password", {
      userId: user._id,
      error_msg: "",
      success_msg: "",
    });
  } catch (error) {
    console.error("Error in resetPasswordForm:", error);
    res.render("reset-password", {
      error_msg: "An error occurred. Please try again.",
      success_msg: "",
    });
  }
};

// Update Password Logic
exports.updatePassword = async (req, res) => {
  const { userId, password1, password2 } = req.body;

  try {
    if (password1 !== password2) {
      return res.render("reset-password", {
        userId,
        error_msg: "Passwords do not match.",
        success_msg: "",
      });
    }

    if (password1.length < 6) {
      return res.render("reset-password", {
        userId,
        error_msg: "Password must be at least 6 characters long.",
        success_msg: "",
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.render("reset-password", {
        error_msg: "Invalid or expired reset link.",
        success_msg: "",
      });
    }

    user.password = await bcrypt.hash(password1, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    req.flash("success", "Your password has been successfully updated.");
    res.redirect("/auth/login");
  } catch (error) {
    console.error("Error in updatePassword:", error);
    res.render("reset-password", {
      userId,
      error_msg: "An error occurred. Please try again.",
      success_msg: "",
    });
  }
};
