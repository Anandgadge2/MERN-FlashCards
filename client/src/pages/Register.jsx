import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const nav = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  async function register(e) {
    e.preventDefault();
    try {
      await api.post("/auth/register", form);
      nav("/category");
    } catch {
      alert("Registration failed");
    }
  }

  return (
    <div className="flex justify-center mt-32">
      <div className="bg-white/30 backdrop-blur-lg p-10 rounded-3xl shadow-xl max-w-md w-full border border-white/40">
        
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/906/906334.png"
            className="w-20 drop-shadow-lg"
          />
        </div>

        <h2 className="text-center text-3xl font-bold text-white mb-8">
          Create Account
        </h2>

        <form className="flex flex-col gap-4" onSubmit={register}>
          <input
            className="w-full p-3 rounded-full bg-white/80 border shadow-sm text-gray-800"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="w-full p-3 rounded-full bg-white/80 border shadow-sm text-gray-800"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            className="w-full p-3 rounded-full bg-white/80 border shadow-sm text-gray-800"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button className="w-full py-3 rounded-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold transition shadow-md">
            Register
          </button>

          <button
            type="button"
            onClick={() => (window.location.href = "http://localhost:5000/auth/google")}
            className="w-full py-3 rounded-full bg-red-500 hover:bg-red-600 text-white font-bold transition shadow-md mt-3"
          >
            Continue with Google
          </button>
        </form>

      </div>
    </div>
  );
}
