const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");
const jwt = require("jsonwebtoken");

// generate JWT
function createToken(user) {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
}

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ msg: "Email already exists" });

    const user = await User.create({ name, email, password });

    const token = createToken(user);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
    });

    res.json({ msg: "Registered", user });
  } catch (err) {
    res.status(500).json({ msg: "Error", err });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  if (!user) return res.status(400).json({ msg: "Invalid credentials" });

  const token = createToken(user);

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
  });

  res.json({ msg: "Logged in", user });
});

// GOOGLE LOGIN
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const token = createToken(req.user);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
    });

    res.redirect("http://localhost:5173/category");
  }
);

module.exports = router;
