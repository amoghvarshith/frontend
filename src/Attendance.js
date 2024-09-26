// src/Attendance.js
import React, { useState, useEffect } from 'react';
import './Attendance.css'; // Ensure to create this CSS file

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [certificates, setCertificates] = useState({}); // State to manage selected certificates

  useEffect(() => {
    // Fetch student data from local storage
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    
    // Sort students by name
    const sortedStudents = storedStudents.sort((a, b) => a.name.localeCompare(b.name));
    
    // Determine eligibility based on attendance
    const updatedAttendanceData = sortedStudents.map(student => {
      const attendancePercentage = student.attendance ? 100 : 0; // Check if marked present
      return {
        ...student,
        attendancePercentage, // Add attendance percentage
        eligible: attendancePercentage > 50, // Allow certification if attendance is greater than 50%
      };
    });

    setAttendanceData(updatedAttendanceData);
  }, []);

  const handleCertificateSelection = (rollNumber, certificate) => {
    setCertificates((prev) => ({
      ...prev,
      [rollNumber]: certificate,
    }));
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Attendance Records</h2>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Attendance (%)</th>
            <th>Eligible for Certificate</th>
            <th>Generate Certificate</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((student, index) => (
            <tr key={student.rollNumber}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.rollNumber}</td>
              <td>{student.attendancePercentage}%</td> {/* Reflect the attendance percentage */}
              <td>{student.eligible ? "Yes" : "No"}</td>
              <td>
                {student.eligible ? (
                  <div>
                    <button
                      onClick={() => handleCertificateSelection(student.rollNumber, null)}
                    >
                      Generate Certificate
                    </button>
                    {certificates[student.rollNumber] === null && (
                      <select
                        onChange={(e) => handleCertificateSelection(student.rollNumber, e.target.value)}
                      >
                        <option value="">Select a certificate</option>
                        <option value="Certificate of Excellence">Certificate of Excellence</option>
                        <option value="Certificate of Achievement">Certificate of Achievement</option>
                        <option value="Certificate of Participation">Certificate of Participation</option>
                        <option value="Certificate of Merit">Certificate of Merit</option>
                        <option value="Certificate of Completion">Certificate of Completion</option>
                      </select>
                    )}
                    {certificates[student.rollNumber] && (
                      <span>Selected: {certificates[student.rollNumber]}</span>
                    )}
                  </div>
                ) : (
                  <span>N/A</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
