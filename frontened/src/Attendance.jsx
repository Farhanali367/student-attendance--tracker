import { useEffect, useState } from "react";
import { getStudents, addStudent } from "./services/api";

function Attendance() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul Sharma", roll: "101", status: "Present" },
    { id: 2, name: "Arjun Patel", roll: "102", status: "Absent" },
    { id: 3, name: "Farhan Ali", roll: "103", status: "Present" },
  ]);

  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  
useEffect(() => {
  getStudents()
    .then((data) => {
      setStudents(data);
    })
    .catch((error) => {
      console.error("Error loading students:", error);
    });
}, []);
  
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

  const addStudent = (e) => {
    e.preventDefault();

    if (!name || !roll) {
      alert("Enter student name and roll number");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name,
      roll,
      status: "Present",
    };

    setStudents([...students, newStudent]);

    setName("");
    setRoll("");
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <h1>Attendance Management</h1>

        <p style={styles.subtitle}>
          Manage today's student attendance
        </p>

        <form onSubmit={addStudent} style={styles.form}>
          <input
            type="text"
            placeholder="Student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <input
            type="text"
            placeholder="Roll number"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.addButton}>
            + Add Student
          </button>
        </form>

        <div style={styles.tableBox}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Student</th>
                <th>Roll No.</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.roll}</td>

                  <td
                    style={{
                      color:
                        student.status === "Present"
                          ? "#16a34a"
                          : "#dc2626",
                      fontWeight: "bold",
                    }}
                  >
                    {student.status}
                  </td>

                  <td>
                    <button
                      onClick={() => toggleStatus(student.id)}
                      style={styles.button}
                    >
                      Mark{" "}
                      {student.status === "Present"
                        ? "Absent"
                        : "Present"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f8fafc",
    padding: "40px 6%",
    fontFamily: "Arial, sans-serif",
  },

  container: {
    maxWidth: "1100px",
    margin: "auto",
  },

  subtitle: {
    color: "#64748b",
  },

  form: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    background: "#ffffff",
    padding: "20px",
    borderRadius: "15px",
    marginTop: "25px",
  },

  input: {
    flex: "1",
    minWidth: "200px",
    padding: "12px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
  },

  addButton: {
    background: "#16a34a",
    color: "#ffffff",
    border: "none",
    padding: "12px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  tableBox: {
    background: "#ffffff",
    padding: "25px",
    borderRadius: "15px",
    marginTop: "25px",
    overflowX: "auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  button: {
    border: "none",
    background: "#2563eb",
    color: "#ffffff",
    padding: "9px 14px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Attendance;
