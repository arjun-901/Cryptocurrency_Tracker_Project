// src/LoginPage.js
import React from 'react';
import './Singin.css';

const LoginPage = () => {
    return (
        <div className="signin-page">
            <div className="signin-container">
                <form className="signin-form">
                    <h3>Sign In</h3>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Enter your username" id="username" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter your password" id="password" required />
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
