from sqlalchemy import Column, Integer, String, Date, Boolean, ForeignKey
from sqlalchemy.orm import relationship

from database import Base


class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False, index=True)
    password = Column(String, nullable=False)

    attendance = relationship(
        "Attendance",
        back_populates="student",
        cascade="all, delete-orphan"
    )


class Subject(Base):
    __tablename__ = "subjects"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    total_classes = Column(Integer, default=0)
    attended_classes = Column(Integer, default=0)


class Attendance(Base):
    __tablename__ = "attendance"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(
        Integer,
        ForeignKey("students.id"),
        nullable=False
    )
    subject = Column(String, nullable=False)
    date = Column(Date, nullable=False)
    present = Column(Boolean, default=False)

    student = relationship(
        "Student",
        back_populates="attendance"
    )