import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate("/"); // Redirect to SignIn after logout
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <h1>AUMIC</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className="welcome-section">
        <h2>Welcome to AUMIC</h2>
        <p>Your AI companion for self-discovery and growth.</p>
        <button className="chat-btn" onClick={() => alert("Chat feature coming soon!")}>
          Start Chatting
        </button>
      </div>
    </div>
  );
}

export default Home;
