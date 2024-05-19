import React, { useState } from 'react';
import './index.css';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', credentials);
    // You can add login logic here, like sending the credentials to a server for validation
  };

  return (
    <div className="page-container login-page">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" className="username-input" name="username" placeholder="Username" value={credentials.username} onChange={handleChange} />
          </label>
          <label>
            <input type="password" className="password-input" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} />
          </label>
          <button className="getestimatebutoneee" allert="success" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
