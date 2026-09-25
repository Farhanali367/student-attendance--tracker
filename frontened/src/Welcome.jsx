function Welcome({ onLogin, onSignup }) {
  return (
    <div className="welcome-page">
      <div className="welcome-card">

        <div className="welcome-icon">
          🎓
        </div>

        <h1>Student Attendance Tracker</h1>

        <p>
          Manage student attendance easily and efficiently.
        </p>

        <div className="welcome-buttons">
          <button onClick={onLogin} className="login-btn">
            Login
          </button>

          <button onClick={onSignup} className="signup-btn">
            Create Account
          </button>
        </div>

      </div>
    </div>
  );
}

export default Welcome;
