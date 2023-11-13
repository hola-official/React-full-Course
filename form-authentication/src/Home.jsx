// src/components/Dashboard.jsx
import React from 'react';

const Home = ({ username, handleLogout }) => {
  return (
    <section>
      <h1>Welcome, {username}!</h1>
      <button onClick={handleLogout}>Logout</button>
    </section>
  );
};

export default Home;
