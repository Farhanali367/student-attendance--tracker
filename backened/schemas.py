from datetime import date
from pydantic import BaseModel, EmailStr


class StudentCreate(BaseModel):
    name: str
    email: EmailStr
    password: str


class StudentResponse(BaseModel):
    id: int
    name: str
    email: EmailStr

    class Config:
        from_attributes = True


class AttendanceCreate(BaseModel):
    student_id: int
    subject: str
    date: date
    present: bool


class AttendanceResponse(BaseModel):
    id: int
    student_id: int
    subject: str
    date: date
    present: bool

    class Config:
        from_attributes = True