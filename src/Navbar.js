// src/Navbar.js
import React from 'react';
import './Navbar.css'; // Ensure this CSS file contains your styles

function Navbar() {
  const username = localStorage.getItem('username'); // Get the logged-in username

  const handleLogout = () => {
      localStorage.removeItem('username'); // Clear the stored username
      window.location.href = '/'; // Redirect to the login page
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXaOpl3_NjyZDX9MeaHvcyZGQZ0vxwYhhtqA&s"
            alt="Logo"
            className="logo"
          />
          <h1 className="navbar-title">Ticketing System</h1>
        </div>

        <div className="navbar-right">
          <ul>
            <li><a href="/attendance">Attendance</a></li>
            <li><a href="/eligibility">Eligibility</a></li>
            <li><a href="/details">Details</a></li>
             {/* Logout button */}
      <button onClick={handleLogout} className="logout-button">Logout</button>

          </ul>
        </div>
      </nav>

      {/* Display username */}
      <div className="welcome-message">
        Welcome, {username || 'Guest'}!
      </div>

     

      {/* AI Robot Dancing Image */}
      <div className="robot-container">
        <img
          src="https://i.pinimg.com/736x/f8/1c/8e/f81c8e55dbd500f3c5e21fbbaee19e00.jpg"
          alt="AI Robot Dancing"
          className="robot-image"
        />
      </div>
    </div>
  );
}

export default Navbar;
