import React from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

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
            <p>Minggu, 27 Oktober 2024</p>
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
              <div className="admin-main-topic-artikel-content">
                <img className='admin-main-topic-artikel-content-gambar-artikel' src="src\assets\admin\Example Picture.png"/>
                <h1>Ini Contoh Judul Artikel</h1>
                <h2>13 September 2024</h2>
                <div className="admin-main-topic-artikel-content-control">
                  <button>LIHAT</button>
                  <img src="src\assets\admin\Trash.png"/>
                </div>
              </div>
              <div className="admin-main-topic-artikel-content">
                <img className='admin-main-topic-artikel-content-gambar-artikel' src="src\assets\admin\Example Picture.png"/>
                <h1>Ini Contoh Judul Artikel</h1>
                <h2>13 September 2024</h2>
                <div className="admin-main-topic-artikel-content-control">
                  <button>LIHAT</button>
                  <img src="src\assets\admin\Trash.png"/>
                </div>
              </div>
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