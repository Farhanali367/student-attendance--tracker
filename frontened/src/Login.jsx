import { useState } from "react";
import "./Login.css";

function Login({ onLogin, onSignup }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!userId || !password) {
      alert("Please enter User ID and Password");
      return;
    }

    onLogin();
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-icon">🎓</div>

        <h1>Welcome back</h1>

        <p>Log in to track your attendance</p>

        <form onSubmit={handleLogin}>
          <label>User ID</label>

          <input
            type="text"
            placeholder="Enter your User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Log in
          </button>
        </form>

        <div className="signup-text">
          Don't have an account?
          <button
            type="button"
            onClick={onSignup}
            className="signup-button"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
