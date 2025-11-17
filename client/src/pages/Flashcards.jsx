import React, { useEffect, useState } from "react";
import axios from "../api";

export default function Flashcards() {
  const [cards, setCards] = useState([]);
  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    axios
      .get("/flashcards")
      .then((res) => setCards(res.data))
      .catch((error) => {
        console.error(error);
        alert("Failed to load flashcards");
      });
  }, []);

  if (!cards.length)
    return (
      <p className="text-center text-gray-300 mt-20 text-xl">Loading...</p>
    );

  const card = cards[current];

  const nextCard = () => {
    setShowAnswer(false);
    setCurrent((c) => Math.min(cards.length - 1, c + 1));
  };

  const prevCard = () => {
    setShowAnswer(false);
    setCurrent((c) => Math.max(0, c - 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center pt-16 px-4">

      {/* MAIN CARD */}
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-8">

        {/* QUESTION */}
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-400 mb-4 text-center">
          {card.question}
        </h2>

        {/* ANSWER (HIDDEN until button click) */}
        {showAnswer ? (
          <p className="text-gray-200 text-lg text-center leading-relaxed">
            {card.answer}
          </p>
        ) : (
          <p className="text-gray-400 text-center mb-4 text-sm">
            Click the button below to see the solution
          </p>
        )}

        {/* SHOW SOLUTION BUTTON */}
        {!showAnswer && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setShowAnswer(true)}
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white shadow-md"
            >
              Show Solution
            </button>
          </div>
        )}
      </div>

      {/* NAVIGATION BUTTONS */}
      <div className="flex justify-between w-full max-w-md mt-8 px-4">
        <button
          onClick={prevCard}
          disabled={current === 0}
          className="px-5 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white disabled:bg-gray-600/40"
        >
          Prev
        </button>

        <button
          onClick={nextCard}
          disabled={current === cards.length - 1}
          className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white disabled:bg-indigo-600/40"
        >
          Next
        </button>
      </div>

      {/* COUNTER */}
      <p className="mt-5 text-gray-400 text-sm">
        {current + 1} / {cards.length}
      </p>
    </div>
  );
}
