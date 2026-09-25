function Dashboard() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div>
          <h2 style={styles.logo}>Student Attendance</h2>
          <p style={styles.welcome}>Welcome back 👋</p>
        </div>

        <button style={styles.logout}>Logout</button>
      </header>

      <main style={styles.main}>
        <div style={styles.stats}>
          <div style={styles.card}>
            <h3>Total Students</h3>
            <strong>120</strong>
          </div>

          <div style={styles.card}>
            <h3>Present Today</h3>
            <strong>105</strong>
          </div>

          <div style={styles.card}>
            <h3>Absent Today</h3>
            <strong>15</strong>
          </div>

          <div style={styles.card}>
            <h3>Attendance</h3>
            <strong>87.5%</strong>
          </div>
        </div>

        <section style={styles.tableCard}>
          <h2>Today's Attendance</h2>

          <table style={styles.table}>
            <thead>
              <tr>
                <th>Student</th>
                <th>Roll No.</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Rahul Sharma</td>
                <td>101</td>
                <td style={styles.present}>Present</td>
              </tr>

              <tr>
                <td>Arjun Patel</td>
                <td>102</td>
                <td style={styles.absent}>Absent</td>
              </tr>

              <tr>
                <td>Farhan Ali</td>
                <td>103</td>
                <td style={styles.present}>Present</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f8fafc",
    fontFamily: "Arial, sans-serif",
  },

  header: {
    background: "#ffffff",
    padding: "20px 6%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #e5e7eb",
  },

  logo: {
    margin: 0,
    color: "#2563eb",
  },

  welcome: {
    margin: "5px 0 0",
    color: "#64748b",
  },

  logout: {
    border: "none",
    background: "#ef4444",
    color: "white",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  main: {
    padding: "35px 6%",
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "#ffffff",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
  },

  tableCard: {
    background: "#ffffff",
    padding: "25px",
    marginTop: "30px",
    borderRadius: "15px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
    overflowX: "auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },

  present: {
    color: "#16a34a",
    fontWeight: "bold",
  },

  absent: {
    color: "#dc2626",
    fontWeight: "bold",
  },
};

export default Dashboard;
