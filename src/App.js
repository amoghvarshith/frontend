// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import Navbar from './Navbar';
import Attendance from './Attendance';
import AdminPage from './AdminPage';
// import EligibilityPage from './EligibilityPage';
// import DetailsPage from './DetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/attendance" element={<Attendance />} />
        
      </Routes>
    </Router>
  );
}

export default App;
