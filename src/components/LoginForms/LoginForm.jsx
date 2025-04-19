import React, { useState } from 'react';
import './LoginForm.css'; // Add your styles here


const LoginForm = ( {cssID, onSubmit, buttonText = 'Login', errorMessage} ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const cssIDhandler = () => cssID || '1';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit({ email, password });
        }
    };

    return (
        <form id={"login-form-"+cssIDhandler()} onSubmit={handleSubmit}>
            <div id={"form-group-"+cssIDhandler()}>
                <label htmlFor="login1-email">Email</label>
                <input
                    type="email"
                    autoComplete="username"
                    id="login1-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
            </div>
            <div id= {"form-group-"+cssIDhandler()}>
                <label htmlFor="login-password-1">Password</label>
                <input
                    type="password"
                    autoComplete="current-password"
                    id="login-password-1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit" id={"login-button-"+cssIDhandler()}>
                {buttonText}
            </button>
        </form>
    );
};
export default LoginForm;