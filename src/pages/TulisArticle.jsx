import React from 'react'
import { useNavigate } from 'react-router-dom'

const TulisArticle = () => {

    const navigate = useNavigate();

  return (
    <>
    <div className="tulisarticle-body">
      <div className="tulisarticle-container">
        <div className="tulisarticle-top">
          <button onClick={() => navigate('/admin')}>Kembali</button>
        </div>
        <div className="tulisarticle-main">
          <div className="tulisarticle-main-title">
            <h1>Tulis Artikel</h1>
          </div>
          <div className="tulisarticle-main-core">
            <div className="tulisarticle-main-core-tanggal">
              <h5>Tanggal</h5>
              <h4>Minggu, 27 Oktober 2024</h4>
            </div>
            <div className="tulisarticle-main-core-judul">
              <h5>Judul</h5>
              <input type="text" />
            </div>
            <div className="tulisarticle-main-core-fotosampul">
              <h5>Foto Sampul</h5>
              <input type="file" />
            </div>
            <div className="tulisarticle-main-core-isikonten">
              <h5>Isi Konten</h5>
              <textarea />
            </div>
            <div className="tulisarticle-main-core-btnsubmit">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default TulisArticle