const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const axios = require("axios");

// Auth middleware
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

router.post("/generate", requireAuth, async (req, res) => {
  const { category } = req.body;

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: "Gemini API key missing" });
  }

  const prompt = `
Generate a flashcard in EXACT JSON format:
{
  "question": "",
  "solution": "",
  "code": ""
}

Topic: ${category}

Rules:
- Keep question short.
- Give detailed solution.
- Put code ONLY inside "code".
- Use valid JSON format.
- No text outside the JSON.
  `;

  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
      {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      },
      {
        params: { key: process.env.GEMINI_API_KEY },
        headers: { "Content-Type": "application/json" },
      }
    );

    // Extract AI text result
    const aiText =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    if (!aiText) {
      return res.status(500).json({ error: "No response from Gemini" });
    }

    // Parse JSON safely
    let card;
    try {
      card = JSON.parse(aiText);
    } catch {
      const jsonMatch = aiText.match(/\{[\s\S]*?\}/);
      card = JSON.parse(jsonMatch[0]);
    }

    res.json({ ok: true, card });
  } catch (err) {
    console.error("Gemini REST Error:", err.response?.data || err.message);
    res.status(500).json({
      error: "Gemini API request failed",
      detail: err.response?.data || err.message,
    });
  }
});

module.exports = router;
