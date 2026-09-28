const API_URL = "https://student-attendance-tracker-1-xe56.onrender.com";

// Get all students
export const getStudents = async () => {
  const response = await fetch(`${API_URL}/students`);

  if (!response.ok) {
    throw new Error("Failed to fetch students");
  }

  return response.json();
};

// Add student
export const addStudent = async (student) => {
  const response = await fetch(`${API_URL}/students`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });

  if (!response.ok) {
    throw new Error("Failed to add student");
  }

  return response.json();
};

// Mark attendance
export const markAttendance = async (attendance) => {
  const response = await fetch(`${API_URL}/attendance`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(attendance),
  });

  if (!response.ok) {
    throw new Error("Failed to mark attendance");
  }

  return response.json();
};

// Get student attendance
export const getAttendance = async (studentId) => {
  const response = await fetch(`${API_URL}/attendance/${studentId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch attendance");
  }

  return response.json();
};

// Get attendance percentage
export const getAttendancePercentage = async (
  studentId,
  subject
) => {
  const response = await fetch(
    `${API_URL}/attendance/${studentId}/percentage?subject=${encodeURIComponent(subject)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch attendance percentage");
  }

  return response.json();
};