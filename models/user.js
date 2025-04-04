const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  resetPasswordToken: {
    type: String, // Stores the hashed reset token
  },
  resetPasswordExpires: {
    type: Date, // Stores the expiration time for the reset token
  },
});

module.exports = mongoose.model("User", UserSchema);
