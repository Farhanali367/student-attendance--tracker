# 📚 Student Attendance Tracker

A simple web-based Student Attendance Tracker with a frontend dashboard and FastAPI backend.

## 📁 Project Structure

```text
student-attendance--tracker/
│
├── Frontend/
│   └── index.html
│
├── backend/
│   ├── main.py
│   ├── models.py
│   ├── schemas.py
│   ├── database.py
│   ├── auth.py
│   └── requirements.txt
│
└── .gitignore
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Farhanali367/student-attendance--tracker.git
```

### 2. Open the project

```bash
cd student-attendance--tracker
```

### 3. Install backend dependencies

```bash
cd backend
pip install -r requirements.txt
```

### 4. Start the backend

```bash
uvicorn main:app --reload
```

The API will be available at:

`http://127.0.0.1:8000`

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check API status |
| GET | `/health` | Health check |
| GET | `/students` | Get all students |
| POST | `/students` | Create a student |
| POST | `/attendance` | Mark attendance |
| GET | `/attendance/{student_id}` | Get student attendance |
| GET | `/attendance/percentage/{student_id}` | Calculate attendance percentage |

## ✨ Features

- Student attendance tracking
- Subject-wise attendance
- Automatic attendance percentage calculation
- FastAPI backend
- SQLite database
- Simple frontend dashboard
- Present/Absent attendance marking

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript
- Python
- FastAPI
- SQLite

## ⚙️ How It Works

1. Student opens the attendance dashboard.
2. Subject and attendance details are displayed.
3. Attendance can be marked as Present or Absent.
4. The backend stores attendance records in the database.
5. Attendance percentages are calculated automatically.

## 📌 Backend

The backend provides APIs for:

- Creating students
- Getting students
- Marking attendance
- Getting student attendance
- Calculating subject-wise attendance percentage

## 📊 Project Status

Completed basic attendance tracking functionality with frontend and FastAPI backend.

## 👨‍💻 Author

**Farhanali367**
