import { useState } from "react";
import Attendance from "./Attendance.jsx";

function Dashboard() {
  const [showAttendance, setShowAttendance] = useState(false);

  if (showAttendance) {
    return (
      <div>
        <button
          className="backButton"
          onClick={() => setShowAttendance(false)}
        >
          ← Back to Dashboard
        </button>

        <Attendance />
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Student Attendance Tracker</h1>
          <p>Manage and monitor student attendance</p>
        </div>

        <button
          className="login-button"
          onClick={() => setShowAttendance(true)}
        >
          Open Attendance
        </button>
      </div>

      <div className="cards">
        <div className="card">
          <h3>Total Students</h3>
          <h2>120</h2>
        </div>

        <div className="card">
          <h3>Present Today</h3>
          <h2 style={{ color: "#16a34a" }}>105</h2>
        </div>

        <div className="card">
          <h3>Absent Today</h3>
          <h2 style={{ color: "#dc2626" }}>15</h2>
        </div>
      </div>

      <div className="dashboard-card">
        <h2>Attendance Overview</h2>

        <p>
          Today's attendance is being tracked from the Attendance
          Management section.
        </p>

        <button
          className="attendance-btn"
          onClick={() => setShowAttendance(true)}
        >
          Manage Attendance
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
