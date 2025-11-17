const mongoose = require("mongoose");

const seenFlashcardSchema = new mongoose.Schema({
  userId: String,
  question: String,
  solution: String,
  code: String,
  category: String,
});

module.exports = mongoose.model("SeenFlashcard", seenFlashcardSchema);
