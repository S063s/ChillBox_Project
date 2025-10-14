import { useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const useNavigate = useNavigate();
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");
  const { confirmPassword, setConfirmPassword } = useState("");
  const { error, setError } = useState("");
  const { success, setSuccess } = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null)

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");

      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("/api/signup", {
        email,
        password,
      });
      setSuccess("Account created successfully");
      navigate("/login");
    } catch (error) {
      setError("Failed to create account");
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;
