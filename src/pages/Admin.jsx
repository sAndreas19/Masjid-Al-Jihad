import React from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authtoken');
    navigate('/loginadmin')
  }

  return (
    <div>
      <h1>Selamat Datang, Admin</h1>
      <p>Ini adalah halaman dashboard admin.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Admin;