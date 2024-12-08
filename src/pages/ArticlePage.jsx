import React from 'react'
import { useNavigate } from 'react-router-dom';

const ArticlePage = () => {

  const navigate = useNavigate();

  return (
    <>
    <div className="articlepage-body">
      <div className="articlepage-container">
        <div className="articlepage-container-back">
          <img src="src\assets\articlepage\Back.png" onClick={() => navigate('/')}/>
        </div>
        <div className="articlepage-title">
          <h1>Al-Jihad Article</h1>
        </div>
        <div className="articlepage-search-searchbar">
          <button className="articlepage-search-searchbar-icon">
            <img src="src\assets\articlepage\search.png"/>
          </button>
          <input id="search-input" type="text" placeholder="Cari artikel" />
        </div>
        <div className="articlepage-main">
          <div className="articlepage-main-core">
            <div className="articlepage-main-core-left">
              <div className="articlepage-main-core-left-image">
                <img src="src\assets\articlepage\contoh gambar artikel.png"/>
              </div>
            </div>
            <div className="articlepage-main-core-right">
              <div className="articlepage-main-core-right-title">
                <h2>9 SEPTEMBER 2024</h2>
                <br />
                <h1>Keutamaan berbakti kepada orang tua</h1>
              </div>
              <br />
              <br />
              <div className="articlepage-main-core-right-button">
                <button>LIHAT</button>
              </div>
            </div>
          </div>
          <div className="articlepage-main-core">
            <div className="articlepage-main-core-left">
              <div className="articlepage-main-core-left-image">
                <img src="src\assets\articlepage\contoh gambar artikel.png"/>
              </div>
            </div>
            <div className="articlepage-main-core-right">
              <div className="articlepage-main-core-right-title">
                <h2>9 SEPTEMBER 2024</h2>
                <br />
                <h1>Keutamaan berbakti kepada orang tua</h1>
              </div>
              <br />
              <br />
              <div className="articlepage-main-core-right-button">
                <button>LIHAT</button>
              </div>
            </div>
          </div>
          <div className="articlepage-main-core">
            <div className="articlepage-main-core-left">
              <div className="articlepage-main-core-left-image">
                <img src="src\assets\articlepage\contoh gambar artikel.png"/>
              </div>
            </div>
            <div className="articlepage-main-core-right">
              <div className="articlepage-main-core-right-title">
                <h2>9 SEPTEMBER 2024</h2>
                <br />
                <h1>Keutamaan berbakti kepada orang tua</h1>
              </div>
              <br />
              <br />
              <div className="articlepage-main-core-right-button">
                <button>LIHAT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ArticlePage