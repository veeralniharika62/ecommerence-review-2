
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const loggedInUser = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (loggedInUser) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(loggedInUser)
      );

      alert("Login successful! Welcome " + loggedInUser.name);

      navigate("/");
    } else {
      setMessage("Invalid email or password!");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Welcome Back!</h2>
        <p>Login to your ShopEasy account</p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {message && <p className="error-message">{message}</p>}

        <button type="submit">Login</button>

        <p className="auth-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
