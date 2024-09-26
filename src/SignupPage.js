// src/SignupPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css'; // Import the CSS file

function SignupPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        if (firstName && lastName && username && password && rePassword) {
            if (password === rePassword) {
                setError('');
                navigate('/'); // Redirect to login after successful signup
            } else {
                setError('Passwords do not match');
            }
        } else {
            setError('Please fill all fields');
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2>Sign Up</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSignup}>
                    <div className="input-group">
                        <label>First Name:</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Last Name:</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Re-Enter Password:</label>
                        <input
                            type="password"
                            value={rePassword}
                            onChange={(e) => setRePassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignupPage;
