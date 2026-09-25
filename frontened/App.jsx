import { useState } from "react";
import Login from "./Login.jsx";
import Attendance from "./Attendance.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
      <Login
        onLogin={() => setLoggedIn(true)}
        onSignup={() => alert("Signup page coming soon")}
      />
    );
  }

  return <Attendance />;
}

export default App;
