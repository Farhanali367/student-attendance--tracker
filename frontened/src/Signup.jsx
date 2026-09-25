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
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.logo}>SA</div>

        <h1 style={styles.title}>Create Account</h1>

        <p style={styles.subtitle}>
          Join Student Attendance Tracker
        </p>

        <form onSubmit={handleSignup}>
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Create Account
          </button>
        </form>

        <p style={styles.back}>
          Already have an account?{" "}
          <span onClick={onBackToLogin}>Login</span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },

  card: {
    width: "100%",
    maxWidth: "420px",
    background: "#fff",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
  },

  logo: {
    width: "60px",
    height: "60px",
    borderRadius: "16px",
    background: "#2563eb",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    fontWeight: "bold",
    margin: "0 auto 20px",
  },

  title: {
    textAlign: "center",
    color: "#111827",
    margin: 0,
  },

  subtitle: {
    textAlign: "center",
    color: "#6b7280",
    marginBottom: "25px",
  },

  label: {
    display: "block",
    marginTop: "15px",
    marginBottom: "7px",
    fontWeight: "600",
    color: "#374151",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "13px",
    border: "1px solid #d1d5db",
    borderRadius: "10px",
    fontSize: "15px",
  },

  button: {
    width: "100%",
    marginTop: "25px",
    padding: "14px",
    border: "none",
    borderRadius: "10px",
    background: "#2563eb",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  back: {
    textAlign: "center",
    color: "#6b7280",
    marginTop: "22px",
  },
};

export default Signup;
