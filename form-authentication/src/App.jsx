// src/App.jsx
import React, { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login'
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LinkPage from './components/LinkPage';
import Unauthorized from './components/Unauthorized';
import Editor from './components/Editor'
import Admin from './components/Admin'
import Lounge from './components/Lounge'
import Missing from './components/Missing'
import RequireAuth from './components/RequireAuth';
import PersistLogin from './components/PersistLogin';

const ROLES = {
  'User': 4000,
  'Editor': 1984,
  'Admin': 5150
}

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* public routes */}
        <Route path='login' element={<Login handleLogin={handleLogin} />} />
        <Route index path='linkpage' element={<LinkPage />} />
        <Route index path='unauthorized' element={<Unauthorized />} />
        {/* Private route */}
        <Route element={<PersistLogin/>}>

        <Route element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Editor, ROLES.Admin]} />}>
          <Route path='/' element={<Home username={user} handleLogout={handleLogout} />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
          <Route path='editor' element={<Editor />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Editor]} />}>
          <Route path='lounge' element={<Lounge />} />
        </Route>
        </Route>

        {/* catch all error */}
        <Route path='*' element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;


{/* {user ? (
        <Home username={user} handleLogout={handleLogout} />
      ) : (
        <Login handleLogin={handleLogin} />
      )} */}
