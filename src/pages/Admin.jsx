import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleAdmin from '../components/ArticleAdmin';

const Admin = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update waktu setiap detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Membersihkan interval saat komponen di-unmount
    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authtoken');
    navigate('/loginadmin')
  }

  return (
    <>
    <div className="admin-body">
      <div className="admin-body-container">
        <div className="admin-top">
          <div className="admin-top-date">
            <button onClick={handleLogout}>Keluar</button>
            <p>{currentTime.toLocaleDateString()}</p>
          </div>
          <div className="admin-top-title">
            <h1>السلام عليكم أيها المسؤول</h1>
          </div>
        </div>
        <div className="admin-main">
          <div className="admin-main-panel">
            <div className="admin-main-panel-core">
              <h2 className='admin-main-panel-core-artikel'>Artikel</h2>
              <h2 className='admin-main-panel-core-infaq'>Infaq</h2>
              <h2 className='admin-main-panel-core-pesan'>Pesan</h2>
            </div>
            <hr />
          </div>
          <div className="admin-main-topic">

            {/* Bagian Artikel */}
            <div className="admin-main-topic-artikel">
              <div className="admin-main-topic-artikel-btn">
              <button onClick={() => navigate('/tulisarticle')}>Tulis Artikel</button>
              </div>
              <ArticleAdmin/>
            </div>

            {/* Bagian Infaq */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Admin;