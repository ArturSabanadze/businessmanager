import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './LoginForm2.css'; // Add your styles here

const LoginForm2 = ({ onSubmit, buttonText = 'Login', errorMessage }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit({ email, password });
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit" className="login-button">
                {buttonText}
            </button>
        </form>
    );
};

LoginForm2.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    buttonText: PropTypes.string,
    errorMessage: PropTypes.string,
};

export default LoginForm2;