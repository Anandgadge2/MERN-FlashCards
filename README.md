# ⚡ MERN Flashes – Flashcard Learning App

MERN Flashes is a clean, modern flashcard learning platform built using the **MERN stack**, designed to help users learn concepts quickly through interactive flashcards.

This application allows users to:
- View important MERN interview questions.
- Reveal solutions only when ready (Show Solution button).
- Navigate flashcards using Next/Prev controls.
- Store flashcards in **MongoDB** for reusability.
- Login using Google Authentication.
- Enjoy a fully responsive dark-themed UI with glass-morphism effects.

---

## 🚀 Features

### 🔐 Authentication
- Google login via OAuth 2.0  
- JWT stored in HttpOnly cookies  
- Protected API routes

### 📚 Flashcards System
- Flashcards stored in MongoDB  
- Category-based structure  
- Show/Hide solution feature  
- Next/Previous navigation  
- Fully responsive and mobile-friendly

### 🎨 Modern UI
- Dark mode  
- Glassmorphism design  
- TailwindCSS for styling  
- Clean layout built with React  
- Smooth animations  

### ⚙️ Backend (Node.js + Express)
- Protected routes using JWT  
- Flashcards fetched from database  
- Mongoose models  
- User session management  

---

## 🛠 Tech Stack

### **Frontend**
- React.js (Vite)
- Tailwind CSS
- Axios
- React Router

### **Backend**
- Node.js
- Express.js
- Passport.js (Google OAuth Strategy)
- JWT Authentication
- Cookie Parser

### **Database**
- MongoDB
- Mongoose ODM

---

## 📁 Project Structure
MERN Flashes/
│
├── client/ # React frontend
│ ├── src/
│ │ ├── pages/
│ │ │ └── Flashcards.jsx
│ │ ├── api.js
│ │ └── index.css
│ └── ...
│
├── server/ # Node backend
│ ├── models/
│ │ └── Flashcard.js
│ ├── routes/
│ │ ├── auth.js
│ │ └── flashcard.js
│ ├── seedFlashcards.js
│ └── index.js
│
└── README.md

---

## ⚙️ Installation & Setup

### 🔧 Prerequisites
- Node.js installed  
- MongoDB Atlas or local MongoDB  
- Google Developer OAuth credentials  

---

## 1️⃣ Clone the project

```bash
git clone https://github.com/<your-username>/MERN-Flashes.git
cd "MERN Flashes"
2️⃣ Install Server Dependencies
bash
Copy code
cd server
npm install
3️⃣ Install Client Dependencies
bash
Copy code
cd ../client
npm install
4️⃣ Create .env file for backend (server/.env)
env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string

# JWT Secret
JWT_SECRET=your_jwt_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
BASE_URL=http://localhost:5000
5️⃣ Seed Flashcards
bash
Copy code
cd server
node seedFlashcards.js
6️⃣ Start Backend
bash
Copy code
npm run dev
or

bash
Copy code
nodemon index.js
7️⃣ Start Frontend
bash
Copy code
cd ../client
npm run dev
Your application will be available at:

➡️ http://localhost:5173

🧪 Testing the App
Login →
Click Sign in with Google

View Flashcards →
Click Show Solution

Use Prev/Next buttons to navigate

📸 Screenshot Section (Add later)
scss
Copy code
![Home Page](screenshots/home.png)
![Flashcard](screenshots/flashcard.png)
🚀 Deployment Guide
🖥 Frontend → Vercel
Build: npm run build

Output: dist/

🌐 Backend → Render
Start command: node index.js

Environment variables: same as .env

🗄 Database → MongoDB Atlas
🤝 Contributing
Feel free to submit issues or pull requests.

