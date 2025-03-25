import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./SignUp.css";

function SignUp() {
  const [user, setUser] = useState(null); // ✅ Fix: Define user state
  const [extraDetails, setExtraDetails] = useState({
    username: "",
    bio: "",
  }); // ✅ Fix: Define extra details state

  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const signedInUser = result.user;
      setUser(signedInUser);
      setExtraDetails((prev) => ({ ...prev, username: signedInUser.displayName || "" }));
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleExtraDetailsChange = (e) => {
    const { name, value } = e.target;
    setExtraDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Extra profile details submitted:", extraDetails);
    alert("Profile updated!");
    navigate("/home"); // ✅ Fix: Proper navigation
  };

  return (
    <div className="signup-container">
      <h1>Welcome to AUMIC</h1>
      <p>Sign up to begin your journey of Awakening, Understanding, Motivating, and Inspiring Consciousness.</p>
      
      {!user ? (
        <div className="google-signin">
          <button onClick={handleGoogleSignIn}>Sign In with Google</button>
        </div>
      ) : (
        <div className="extra-details-form">
          <h2>Complete Your Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Name:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={extraDetails.username}
                onChange={handleExtraDetailsChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="bio">Bio:</label>
              <textarea
                id="bio"
                name="bio"
                value={extraDetails.bio}
                onChange={handleExtraDetailsChange}
                placeholder="Tell us a bit about yourself..."
              ></textarea>
            </div>
            <button type="submit">Submit Profile</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignUp;
