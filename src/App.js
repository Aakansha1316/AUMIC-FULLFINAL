import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Home from "./Home"; // Placeholder for the home page after sign-in
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* SignUp page as the default route */}
          <Route path="/" element={<SignUp />} />
          {/* Placeholder home page after sign-in */}
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
