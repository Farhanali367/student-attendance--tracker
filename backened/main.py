from datetime import date, timedelta

from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

import models
from database import engine, get_db
from schemas import (
    StudentCreate,
    StudentResponse,
    AttendanceCreate,
    AttendanceResponse,
)
from auth import hash_password


# ==========================================
# CREATE DATABASE TABLES
# ==========================================

models.Base.metadata.create_all(bind=engine)


# ==========================================
# CREATE SAMPLE DATA
# ==========================================

def create_sample_data():

    db = next(get_db())

    try:

        # --------------------------------------
        # Create student if not available
        # --------------------------------------

        student = (
            db.query(models.Student)
            .filter(models.Student.id == 1)
            .first()
        )

        if not student:

            student = models.Student(
                name="Student",
                email="student@example.com",
                password=hash_password("12345678")
            )

            db.add(student)
            db.commit()
            db.refresh(student)


        # --------------------------------------
        # Check whether attendance already exists
        # --------------------------------------

        existing_attendance = (
            db.query(models.Attendance)
            .filter(
                models.Attendance.student_id == student.id
            )
            .count()
        )

        if existing_attendance > 0:
            return


        # --------------------------------------
        # Sample subjects
        # --------------------------------------

        subjects = [

            ("Data Structures", 12, 10),

            ("Database Management", 10, 8),

            ("Computer Networks", 10, 7),

            ("Operating System", 8, 5),

        ]


        # --------------------------------------
        # Create 40 attendance records
        # --------------------------------------

        start_date = date(2026, 1, 1)

        day_number = 0


        for subject, total_classes, attended_classes in subjects:

            for class_number in range(total_classes):

                attendance_date = (
                    start_date +
                    timedelta(days=day_number)
                )

                present = (
                    class_number < attended_classes
                )


                attendance = models.Attendance(

                    student_id=student.id,

                    subject=subject,

                    date=attendance_date,

                    present=present

                )

                db.add(attendance)

                day_number += 1


        db.commit()

        print(
            "Sample attendance data created successfully!"
        )

    finally:

        db.close()


# ==========================================
# INSERT SAMPLE DATA
# ==========================================

create_sample_data()


# ==========================================
# FASTAPI APP
# ==========================================

app = FastAPI(

    title="Smart Attendance Tracker API",

    description="Backend API for student attendance management",

    version="1.0.0"

)


# ==========================================
# CORS
# ==========================================

app.add_middleware(

    CORSMiddleware,

    allow_origins=["*"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],

)


# ==========================================
# HOME
# ==========================================

@app.get("/")
def home():

    return {

        "message":
        "Smart Attendance Tracker API is running!"

    }


# ==========================================
# HEALTH
# ==========================================

@app.get("/health")
def health_check():

    return {

        "status": "healthy"

    }


# ==========================================
# CREATE STUDENT
# ==========================================

@app.post(
    "/students",
    response_model=StudentResponse
)
def create_student(

    student: StudentCreate,

    db: Session = Depends(get_db)

):

    existing_student = (

        db.query(models.Student)

        .filter(
            models.Student.email ==
            student.email
        )

        .first()

    )


    if existing_student:

        raise HTTPException(

            status_code=400,

            detail="Email already registered"

        )


    new_student = models.Student(

        name=student.name,

        email=student.email,

        password=hash_password(
            student.password
        ),

    )


    db.add(new_student)

    db.commit()

    db.refresh(new_student)


    return new_student


# ==========================================
# GET STUDENTS
# ==========================================

@app.get(
    "/students",
    response_model=list[StudentResponse]
)
def get_students(

    db: Session = Depends(get_db)

):

    return db.query(
        models.Student
    ).all()


# ==========================================
# MARK ATTENDANCE
# ==========================================

@app.post(
    "/attendance",
    response_model=AttendanceResponse
)
def mark_attendance(

    attendance: AttendanceCreate,

    db: Session = Depends(get_db)

):

    # --------------------------------------
    # CHECK STUDENT
    # --------------------------------------

    student = (

        db.query(models.Student)

        .filter(
            models.Student.id ==
            attendance.student_id
        )

        .first()

    )


    if not student:

        raise HTTPException(

            status_code=404,

            detail="Student not found"

        )


    # --------------------------------------
    # CHECK DUPLICATE ATTENDANCE
    # --------------------------------------

    existing_attendance = (

        db.query(models.Attendance)

        .filter(

            models.Attendance.student_id ==
            attendance.student_id,

            models.Attendance.subject ==
            attendance.subject,

            models.Attendance.date ==
            attendance.date

        )

        .first()

    )


    if existing_attendance:

        raise HTTPException(

            status_code=400,

            detail=(
                "Attendance already marked "
                "for this subject and date."
            )

        )


    # --------------------------------------
    # CREATE ATTENDANCE
    # --------------------------------------

    new_attendance = models.Attendance(

        student_id=attendance.student_id,

        subject=attendance.subject,

        date=attendance.date,

        present=attendance.present,

    )


    db.add(new_attendance)

    db.commit()

    db.refresh(new_attendance)


    return new_attendance


# ==========================================
# GET STUDENT ATTENDANCE
# ==========================================

@app.get(
    "/attendance/{student_id}",
    response_model=list[AttendanceResponse]
)
def get_attendance(

    student_id: int,

    db: Session = Depends(get_db)

):

    student = (

        db.query(models.Student)

        .filter(
            models.Student.id ==
            student_id
        )

        .first()

    )


    if not student:

        raise HTTPException(

            status_code=404,

            detail="Student not found"

        )


    return (

        db.query(models.Attendance)

        .filter(
            models.Attendance.student_id ==
            student_id
        )

        .all()

    )


# ==========================================
# ATTENDANCE PERCENTAGE
# ==========================================

@app.get(
    "/attendance/{student_id}/percentage"
)
def attendance_percentage(

    student_id: int,

    subject: str,

    db: Session = Depends(get_db)

):

    records = (

        db.query(models.Attendance)

        .filter(

            models.Attendance.student_id ==
            student_id,

            models.Attendance.subject ==
            subject,

        )

        .all()

    )


    total_classes = len(records)


    if total_classes == 0:

        return {

            "student_id": student_id,

            "subject": subject,

            "total_classes": 0,

            "attended_classes": 0,

            "percentage": 0,

        }


    attended_classes = sum(

        1

        for record in records

        if record.present

    )


    percentage = (

        attended_classes /
        total_classes

    ) * 100


    return {

        "student_id": student_id,

        "subject": subject,

        "total_classes": total_classes,

        "attended_classes": attended_classes,

        "percentage": round(
            percentage,
            2
        ),

    }