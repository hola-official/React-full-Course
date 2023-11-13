// src/components/LoginForm.jsx
import React, { useState } from 'react';

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation, you'd typically want to do more here
    if (username && password) {
      handleLogin(username);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>
            Username:
          </label>
          <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          <label htmlFor='password'>
            Password:
          </label>
          <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
