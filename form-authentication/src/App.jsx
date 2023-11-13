// src/App.jsx
import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <section className='App'>
      {user ? (
        <Home username={user} handleLogout={handleLogout} />
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </section>
  );
};

export default App;
