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

        <div className="login-icon">
          👤
        </div>

        <h1>Welcome Back</h1>
        <p>Login to Student Attendance Tracker</p>

        <form className="login-form" onSubmit={handleLogin}>

          <div>
            <label>User ID</label>
            <input
              type="text"
              placeholder="Enter your User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>

        </form>

        <div className="signup-link" onClick={onSignup}>
          Don't have an account? Sign Up
        </div>

      </div>
    </div>
  );
}

export default Login;
