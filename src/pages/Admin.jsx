import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleAdmin from '../components/ArticleAdmin';
import InfaqAdmin from '../components/InfaqAdmin';
import PesanAdmin from '../components/PesanAdmin';

const Admin = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activePage, setActivePage] = useState("ArticleAdmin");
  const [activePanel, setActivePanel] = useState("article");

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
    navigate('/loginadmin');
  };

  const handlePageChange = (page, panel) => {
    setActivePage(page); // Update state activePage
    setActivePanel(panel); // Update state activePanel
  };

  const pageComponents = {
    ArticleAdmin: <ArticleAdmin />,
    InfaqAdmin: <InfaqAdmin />,
    PesanAdmin: <PesanAdmin />,
  };

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
                <h2
                  id="article"
                  className={`admin-main-panel-core-artikel ${
                    activePanel === "article" ? "active" : ""
                  }`}
                  onClick={() => handlePageChange("ArticleAdmin", "article")}
                >
                  Artikel
                </h2>
                <h2
                  id="infaq"
                  className={`admin-main-panel-core-infaq ${
                    activePanel === "infaq" ? "active" : ""
                  }`}
                  onClick={() => handlePageChange("InfaqAdmin", "infaq")}
                >
                  Infaq
                </h2>
                <h2
                  id="pesan"
                  className={`admin-main-panel-core-pesan ${
                    activePanel === "pesan" ? "active" : ""
                  }`}
                  onClick={() => handlePageChange("PesanAdmin", "pesan")}
                >
                  Pesan
                </h2>
              </div>
              <hr />
            </div>
            <div className="admin-main-topic">
              {/* Bagian Artikel */}
              <div className="admin-main-topic-artikel">
                {pageComponents[activePage]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
