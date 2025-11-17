import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CategorySelect from "./pages/CategorySelect";
import Flashcards from "./pages/Flashcards";
import Register from "./pages/Register";
import Login from "./pages/Login";

function Navbar() {
  return (
    <nav className="w-full bg-white/30 backdrop-blur-md shadow-lg px-8 py-4 flex justify-between items-center border-b border-white/40 fixed top-0 left-0 z-50">
      <h1 className="text-2xl font-extrabold text-white drop-shadow-sm tracking-wide">
        MERN Flashes
      </h1>

      <div className="flex gap-6 text-white font-medium">
        <a href="/login" className="hover:text-yellow-300 transition">Login</a>
        <a href="/register" className="hover:text-yellow-300 transition">Register</a>
      </div>
    </nav>
  );
}


export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20 px-6">
        <Routes>
          <Route path="/" element={<Navigate to="/category" />} />
          <Route path="/category" element={<CategorySelect />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
