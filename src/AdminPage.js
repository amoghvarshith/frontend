// src/AdminPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './AdminPage.css'; // Ensure this CSS file contains your styles

const AdminPage = () => {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [attendance, setAttendance] = useState({});
    const [error, setError] = useState('');
    
    const navigate = useNavigate(); // Initialize useNavigate

    // Function to fetch students from local storage
    const fetchStudents = () => {
        const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
        setStudents(storedStudents);
        // Initialize attendance state based on fetched data
        const initialAttendance = {};
        storedStudents.forEach(student => {
            initialAttendance[student.rollNumber] = student.attendance;
        });
        setAttendance(initialAttendance);
    };

    // Function to add a new student
    const addStudent = (e) => {
        e.preventDefault();
        if (name && rollNumber) {
            const newStudent = { rollNumber, name, attendance: false };

            // Add student to local storage
            const updatedStudents = [...students, newStudent];
            setStudents(updatedStudents);
            localStorage.setItem('students', JSON.stringify(updatedStudents));

            // Clear input fields
            setName('');
            setRollNumber('');
            setError('');
        } else {
            setError('Please enter both roll number and student name');
        }
    };

    // Function to delete a student
    const deleteStudent = (rollNumber) => {
        const updatedStudents = students.filter(student => student.rollNumber !== rollNumber);
        setStudents(updatedStudents);
        localStorage.setItem('students', JSON.stringify(updatedStudents));
    };

    // Function to mark attendance
    const markAttendance = (rollNumber) => {
        setAttendance((prev) => {
            const updatedAttendance = {
                ...prev,
                [rollNumber]: !prev[rollNumber],
            };

            // Update attendance in local storage
            const updatedStudents = students.map(student => 
                student.rollNumber === rollNumber ? { ...student, attendance: updatedAttendance[rollNumber] } : student
            );
            localStorage.setItem('students', JSON.stringify(updatedStudents));

            return updatedAttendance;
        });
    };

    // Fetch students on component mount
    useEffect(() => {
        fetchStudents();
    }, []);

    // Function to handle logout
    const handleLogout = () => {
        // Clear any necessary state or local storage if required
        navigate('/'); // Redirect to login page
    };

    return (
        <div className="admin-container">
            <div className="form-card">
                <h2>Add New Student</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={addStudent}>
                    <div className="input-group">
                        <label>Roll Number:</label>
                        <input
                            type="text"
                            value={rollNumber}
                            onChange={(e) => setRollNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="add-student-button">Add Student</button>
                </form>
            </div>

            <div className="students-card">
                <h2>Registered Students</h2>
                <ul className="student-list">
                    {students.map((student) => (
                        <li key={student.rollNumber} className="student-item">
                            <div className="student-details">
                                <p>Roll Number: {student.rollNumber}</p>
                                <p>Name: {student.name}</p>
                            </div>
                            <button className="attendance-button" onClick={() => markAttendance(student.rollNumber)}>
                                {attendance[student.rollNumber] ? 'Mark Absent' : 'Mark Present'}
                            </button>
                            <button className="delete-button" onClick={() => deleteStudent(student.rollNumber)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Logout Button */}
            <div className="logout-container">
                <button className="logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default AdminPage;
