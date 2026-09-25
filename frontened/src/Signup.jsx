import { useState } from "react";

function Signup({ onBackToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    alert("Account created successfully!");
    onBackToLogin();
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-icon">
          📝
        </div>

        <h1>Create Account</h1>
        <p>Register for Student Attendance Tracker</p>

        <form className="login-form" onSubmit={handleSignup}>

          <div>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-button">
            Create Account
          </button>

        </form>

        <div className="signup-link" onClick={onBackToLogin}>
          Already have an account? Login
        </div>

      </div>
    </div>
  );
}

export default Signup;
