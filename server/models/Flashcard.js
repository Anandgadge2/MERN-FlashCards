const mongoose = require("mongoose");

const flashcardSchema = new mongoose.Schema({
  question: String,
  answer: String,
  category: String,
});

module.exports = mongoose.model("Flashcard", flashcardSchema);
