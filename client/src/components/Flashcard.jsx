import React from "react";

export default function Flashcard({ card, onSeen, onNext }) {
  return (
    <div
      className="max-w-2xl w-full mt-10 bg-white/30 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/40 animate-fadeIn"
      style={{ animationDuration: "0.5s" }}
    >
      {/* Question */}
      <h3 className="text-2xl font-bold text-white drop-shadow mb-4">
        {card.question}
      </h3>

      {/* Solution */}
      <p className="text-white/90 whitespace-pre-line text-lg mb-6 leading-relaxed drop-shadow">
        {card.solution}
      </p>

      {/* Code Section */}
      {card.code && (
        <pre className="bg-gray-900/90 text-white p-5 rounded-xl mb-6 overflow-auto text-sm shadow-inner">
          <code>{card.code}</code>
        </pre>
      )}

      {/* Buttons */}
      <div className="flex justify-end gap-4">
        <button
          onClick={() => onSeen(card)}
          className="px-6 py-3 bg-green-400 hover:bg-green-500 text-gray-900 rounded-full font-semibold shadow-lg transition"
        >
          Mark Seen
        </button>

        <button
          onClick={onNext}
          className="px-6 py-3 bg-white/80 hover:bg-white text-gray-900 rounded-full font-semibold shadow-md transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
