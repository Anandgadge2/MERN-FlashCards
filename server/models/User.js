const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: { type: String },
  name: String,
  email: String,
  password: String, // for normal register/login
});

module.exports = mongoose.model("User", userSchema);
