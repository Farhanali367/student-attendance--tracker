import { useState } from "react";

function Attendance() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul Sharma", roll: "101", status: "Present" },
    { id: 2, name: "Arjun Patel", roll: "102", status: "Absent" },
    { id: 3, name: "Farhan Ali", roll: "103", status: "Present" },
  ]);

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

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1>Attendance</h1>
        <p style={styles.subtitle}>
          Mark today's student attendance
        </p>

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
                      Mark {student.status === "Present"
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

  tableBox: {
    background: "#ffffff",
    padding: "25px",
    borderRadius: "15px",
    marginTop: "25px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
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
