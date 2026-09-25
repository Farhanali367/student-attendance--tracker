import { useEffect, useState } from "react";
import {
  getStudents,
  addStudent as createStudent,
} from "./services/api";

function Attendance() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [loading, setLoading] = useState(true);

  // Load students from database
  useEffect(() => {
    getStudents()
      .then((data) => {
        setStudents(data);
      })
      .catch((error) => {
        console.error("Error loading students:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Toggle attendance
  const toggleStatus = (id) => {
    setStudents((current) =>
      current.map((student) =>
        student.id === id
          ? {
              ...student,
              status:
                student.status === "Present"
                  ? "Absent"
                  : "Present",
            }
          : student
      )
    );
  };

  // Add student
  const addStudent = async (e) => {
    e.preventDefault();

    if (!name.trim() || !roll.trim()) {
      alert("Enter student name and roll number");
      return;
    }

    try {
      const newStudent = await createStudent({
        name: name.trim(),
        roll: roll.trim(),
        status: "Present",
      });

      setStudents((current) => [...current, newStudent]);

      setName("");
      setRoll("");

      alert("Student added successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to add student");
    }
  };

  const presentCount = students.filter(
    (student) => student.status === "Present"
  ).length;

  const absentCount = students.filter(
    (student) => student.status === "Absent"
  ).length;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "25px",
            marginBottom: "25px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "32px",
              color: "#172033",
            }}
          >
            🎓 Student Attendance Tracker
          </h1>

          <p
            style={{
              color: "#687386",
              marginTop: "8px",
            }}
          >
            Manage students and track daily attendance
          </p>
        </div>

        {/* Statistics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "18px",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              padding: "22px",
              borderRadius: "16px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ color: "#687386" }}>Total Students</div>
            <h2 style={{ margin: "8px 0 0", color: "#172033" }}>
              {students.length}
            </h2>
          </div>

          <div
            style={{
              background: "#ffffff",
              padding: "22px",
              borderRadius: "16px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ color: "#687386" }}>Present</div>
            <h2 style={{ margin: "8px 0 0", color: "#16a34a" }}>
              {presentCount}
            </h2>
          </div>

          <div
            style={{
              background: "#ffffff",
              padding: "22px",
              borderRadius: "16px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ color: "#687386" }}>Absent</div>
            <h2 style={{ margin: "8px 0 0", color: "#dc2626" }}>
              {absentCount}
            </h2>
          </div>
        </div>

        {/* Add Student */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "25px",
            marginBottom: "25px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ marginTop: 0, color: "#172033" }}>
            Add Student
          </h2>

          <form
            onSubmit={addStudent}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr auto",
              gap: "12px",
            }}
          >
            <input
              type="text"
              placeholder="Student name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                padding: "13px",
                border: "1px solid #d7dce5",
                borderRadius: "10px",
                fontSize: "15px",
              }}
            />

            <input
              type="text"
              placeholder="Roll number"
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
              style={{
                padding: "13px",
                border: "1px solid #d7dce5",
                borderRadius: "10px",
                fontSize: "15px",
              }}
            />

            <button
              type="submit"
              style={{
                padding: "13px 22px",
                border: "none",
                borderRadius: "10px",
                background: "#2563eb",
                color: "#ffffff",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              + Add Student
            </button>
          </form>
        </div>

        {/* Attendance Table */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "25px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              color: "#172033",
            }}
          >
            Attendance
          </h2>

          {loading ? (
            <p style={{ color: "#687386" }}>
              Loading students...
            </p>
          ) : students.length === 0 ? (
            <p style={{ color: "#687386" }}>
              No students found. Add a student above.
            </p>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <tr
                    style={{
                      background: "#f5f7fb",
                      textAlign: "left",
                    }}
                  >
                    <th style={{ padding: "14px" }}>#</th>
                    <th style={{ padding: "14px" }}>Student Name</th>
                    <th style={{ padding: "14px" }}>Roll Number</th>
                    <th style={{ padding: "14px" }}>Status</th>
                    <th style={{ padding: "14px" }}>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {students.map((student, index) => (
                    <tr
                      key={student.id}
                      style={{
                        borderBottom: "1px solid #edf0f4",
                      }}
                    >
                      <td style={{ padding: "14px" }}>
                        {index + 1}
                      </td>

                      <td
                        style={{
                          padding: "14px",
                          fontWeight: "600",
                        }}
                      >
                        {student.name}
                      </td>

                      <td style={{ padding: "14px" }}>
                        {student.roll}
                      </td>

                      <td style={{ padding: "14px" }}>
                        <span
                          style={{
                            padding: "7px 12px",
                            borderRadius: "20px",
                            background:
                              student.status === "Present"
                                ? "#dcfce7"
                                : "#fee2e2",
                            color:
                              student.status === "Present"
                                ? "#15803d"
                                : "#b91c1c",
                            fontWeight: "600",
                          }}
                        >
                          {student.status}
                        </span>
                      </td>

                      <td style={{ padding: "14px" }}>
                        <button
                          onClick={() =>
                            toggleStatus(student.id)
                          }
                          style={{
                            padding: "9px 15px",
                            border: "none",
                            borderRadius: "8px",
                            background:
                              student.status === "Present"
                                ? "#dc2626"
                                : "#16a34a",
                            color: "#ffffff",
                            cursor: "pointer",
                            fontWeight: "600",
                          }}
                        >
                          {student.status === "Present"
                            ? "Mark Absent"
                            : "Mark Present"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Attendance;
