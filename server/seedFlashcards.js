require("dotenv").config();
const mongoose = require("mongoose");
const Flashcard = require("./models/Flashcard");

const data = [
  { question: "What does MERN stand for?", answer: "MongoDB, Express, React, Node.js.", category: "core" },
  { question: "What is Node.js?", answer: "A JavaScript runtime environment that runs JS on the server.", category: "node" },
  { question: "What is the purpose of package.json?", answer: "It lists project dependencies, scripts, and metadata.", category: "node" },
  { question: "How do you import a module in Node.js?", answer: "Using require(), e.g., const express = require('express')", category: "node" },
  { question: "What is NPM?", answer: "Node Package Manager used to install and manage JS packages.", category: "node" },
  { question: "Why use module.exports?", answer: "To export functions/objects for use in other files.", category: "node" },

  // Express
  { question: "What is Express.js?", answer: "A minimal and flexible Node.js web framework.", category: "express" },
  { question: "How to start an Express server?", answer: "app.listen(port, callback)", category: "express" },
  { question: "What is middleware?", answer: "Functions that run between request and response.", category: "express" },
  { question: "How to handle GET /users?", answer: "app.get('/users', (req,res)=>{})", category: "express" },
  { question: "What is body-parser?", answer: "Middleware to parse incoming request bodies.", category: "express" },
  { question: "How to send JSON in Express?", answer: "res.json(object)", category: "express" },
  { question: "What is CORS?", answer: "Mechanism enabling cross-origin resource sharing.", category: "express" },

  // MongoDB
  { question: "What type of DB is MongoDB?", answer: "A NoSQL document-based database.", category: "mongo" },
  { question: "What is a MongoDB document?", answer: "A record stored in BSON format.", category: "mongo" },
  { question: "What is Mongoose?", answer: "An ODM library for MongoDB.", category: "mongo" },
  { question: "What is a Mongoose Schema?", answer: "Defines structure of MongoDB documents.", category: "mongo" },
  { question: "How to create a Mongoose model?", answer: "mongoose.model('Name', schema)", category: "mongo" },
  { question: "Which method saves a document?", answer: ".save()", category: "mongo" },
  { question: "How to find all documents?", answer: "Model.find({})", category: "mongo" },
  { question: "Role of mongoose.connect()?", answer: "Opens a connection to MongoDB.", category: "mongo" },

  // React
  { question: "What is React?", answer: "A JS UI library for building SPAs.", category: "react" },
  { question: "What is JSX?", answer: "HTML-like syntax inside JavaScript.", category: "react" },
  { question: "What is a functional component?", answer: "A function that returns JSX.", category: "react" },
  { question: "useState is used for?", answer: "Managing state in components.", category: "react" },
  { question: "useEffect is used for?", answer: "Side effects (fetching, events).", category: "react" },
  { question: "How does parent send data to child?", answer: "Via props.", category: "react" },
  { question: "Purpose of key prop in lists?", answer: "Helps React optimize re-renders.", category: "react" },

  // Connecting MERN
  { question: "How does React talk to Express?", answer: "Through HTTP API calls.", category: "connect" },
  { question: "Role of Node/Express in MERN?", answer: "Handles API logic and DB connection.", category: "connect" },
];

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("DB connected");

  await Flashcard.deleteMany({});
  await Flashcard.insertMany(data);

  console.log("Flashcards inserted");
  process.exit();
}

seed();
