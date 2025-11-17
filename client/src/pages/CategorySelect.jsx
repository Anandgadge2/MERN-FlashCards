import React from "react";
import { useNavigate } from "react-router-dom";

export default function CategorySelect() {
  const navigate = useNavigate();

  const categories = [
    { label: "Beginner", value: "beginner", color: "from-green-300 to-green-500" },
    { label: "Intermediate", value: "intermediate", color: "from-yellow-300 to-yellow-500" },
    { label: "Advance", value: "advance", color: "from-red-300 to-red-500" },
  ];

  return (
    <div className="flex flex-col items-center mt-24">
      <h2 className="text-4xl font-bold text-white mb-10 drop-shadow-md">
        Choose Your Level
      </h2>

      <div className="grid gap-6 w-full max-w-md">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => navigate(`/flashcards?cat=${cat.value}`)}
            className={`w-full p-6 rounded-2xl shadow-xl bg-gradient-to-br ${cat.color}
            text-white font-semibold text-xl transition hover:scale-105`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
