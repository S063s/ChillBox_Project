import { useState } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function SignUpPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
    <div className="flex flex-col items-center">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center mb-4 bg-gray-200 p-2 rounded text-black">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex justify-center mb-4 bg-gray-200 p-2 rounded text-black">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-center mb-4 bg-gray-200 p-2 rounded text-black">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <button onClick={handleSubmit}>Sign Up</button>
        <p className="cursor-pointer">Already have an account?  <Link to="/" className="hover:text-gray-200">Home</Link></p>
      </form>
    </div>
  );
}

export default SignUpPage;
