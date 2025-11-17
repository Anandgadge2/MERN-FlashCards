const express = require("express");
const router = express.Router();
const Flashcard = require("../models/Flashcard");
const jwt = require("jsonwebtoken");

function requireAuth(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
}

// Get all flashcards
router.get("/", requireAuth, async (req, res) => {
  const cards = await Flashcard.find({});
  res.json(cards);
});

// Get flashcards by category
router.get("/:category", requireAuth, async (req, res) => {
  const cards = await Flashcard.find({ category: req.params.category });
  res.json(cards);
});

module.exports = router;
