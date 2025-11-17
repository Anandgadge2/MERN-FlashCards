require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const initPassport = require("./config/passport");

const authRoutes = require("./routes/auth");
const openaiRoutes = require("./routes/openai");
const flashcardRoutes = require("./routes/flashcard");
app.use("/api/flashcards", flashcardRoutes);


const app = express();

app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

initPassport(passport);
app.use(passport.initialize());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"));

app.use("/auth", authRoutes);
app.use("/api/openai", openaiRoutes);
app.use("/api/flashcards", flashcardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
