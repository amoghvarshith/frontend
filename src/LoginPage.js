import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import the CSS file

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate a successful login for demo purposes
        if (username === 'user' && password === 'password') {
            setError('');
            navigate('/navbar'); // Navigate to Navbar page upon successful login
        } else {
            setError('Invalid credentials');
        }
    };

    const handleAdminLogin = (e) => {
        e.preventDefault();
        // Simulate a successful admin login for demo purposes
        if (username === 'admin' && password === 'adminpassword') {
            setError('');
            navigate('/admin'); // Navigate to the Admin page upon successful login
        } else {
            setError('Invalid admin credentials');
        }
    };

    const handleSignupRedirect = () => {
        navigate('/signup'); // Redirect to the signup page if needed
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Login</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
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
                    <button type="submit">Login</button> 
                </form>

                {/* Admin login button */}
                <button onClick={handleAdminLogin} className="admin-login-button">Admin Login</button>
                
                {/* Redirect to Signup */}
                <button onClick={handleSignupRedirect} className="signup-redirect">Don't have an account? Sign Up</button>
            </div>
        </div>
    );
}

export default LoginPage;
