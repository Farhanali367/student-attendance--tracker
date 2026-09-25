import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import Welcome from "./Welcome.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Dashboard from "./Dashboard.jsx";

import "./index.css";

function App() {
  const [page, setPage] = useState("welcome");

  if (page === "login") {
    return (
      <Login
        onLogin={() => setPage("dashboard")}
        onSignup={() => setPage("signup")}
      />
    );
  }

  if (page === "signup") {
    return (
      <Signup
        onBackToLogin={() => setPage("login")}
      />
    );
  }

  if (page === "dashboard") {
    return <Dashboard />;
  }

  return (
    <Welcome
      onLogin={() => setPage("login")}
      onSignup={() => setPage("signup")}
    />
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
