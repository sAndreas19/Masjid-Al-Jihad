import React, { useState } from 'react';

const InfaqUser = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    const accountNumber = "9236593409189";
    navigator.clipboard.writeText(accountNumber);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000); // Hilangkan notifikasi setelah 2 detik
  };

  return (
    <>
      <div className="infaquser-body">
        <div className="infaquser-container">
          <h1>Mari sisihkan hartamu untuk Investasi Akhirat</h1>
          <h2>Berikan infaq terbaikmu!</h2>
          <br />
          <br />
          <br />
          <button onClick={() => setIsOverlayOpen(true)}>INFAQ SEKARANG</button>
        </div>
      </div>

      {isOverlayOpen && (
        <div className="infaquser-overlay">
          <div className="infaquser-overlay-content">
            <div className="infaquser-overlay-content-head">
                <button className="infaquser-close-btn" onClick={() => setIsOverlayOpen(false)}><img src='src\assets\infaquser\Close.png'></img></button>
            </div>
            <h3>Nomor Rekening Infaq</h3>
            <div className="infaquser-account-info">
              <input
                type="text"
                value="12345678901234567"
                readOnly
                className="account-input"
              />
              <button className="infaquser-copy-btn" onClick={handleCopy}>
                <img src="src\assets\infaquser\Copy.png"/>
              </button>
            </div>
            {copySuccess && <div className="infaquser-copy-notification">Nomor Rekening Berhasil Disalin!</div>}
          </div>
        </div>
      )}
    </>
  );
};

export default InfaqUser;
