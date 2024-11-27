import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TulisArticle = () => {
  const navigate = useNavigate();
  const STORAGE_KEY = "ARTICLES_DATA";
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result); // Simpan URL gambar
      };
      reader.readAsDataURL(file); // Membaca file sebagai Data URL
    }
  };

  // Fungsi untuk menyimpan artikel ke localStorage
  const handleSubmit = () => {
    const title = document.getElementById("inputJudul").value;
    const image = document.getElementById("inputImage").value;
    const date = document.getElementById("inputTanggal").value;
    const content = document.getElementById("inputContent").value;

    if (!title || !image || !date || !content) {
      alert("Harap isi semua data!");
      return;
    }

    const newArticle = {
      id: +new Date(),
      title,
      image,
      date,
      content,
    };

    // Ambil artikel yang sudah ada dari localStorage
    const storedArticles = localStorage.getItem(STORAGE_KEY);
    const articles = storedArticles ? JSON.parse(storedArticles) : [];

    // Tambahkan artikel baru ke array dan simpan ke localStorage
    articles.push(newArticle);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));

    // Navigasi kembali ke halaman admin
    navigate("/admin");
  };

  return (
    <>
      <div className="tulisarticle-body">
        <div className="tulisarticle-container">
          <div className="tulisarticle-top">
            <button onClick={() => navigate("/admin")}>Kembali</button>
          </div>
          <div className="tulisarticle-main">
            <div className="tulisarticle-main-title">
              <h1>Tulis Artikel</h1>
            </div>
            <div className="tulisarticle-main-core">
              <div className="tulisarticle-main-core-tanggal">
                <h5>Tanggal</h5>
                <input type="text" id="inputTanggal" value={new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric", })} readOnly />
              </div>
              <div className="tulisarticle-main-core-judul">
                <h5>Judul</h5>
                <input type="text" id="inputJudul" />
              </div>
              <div className="tulisarticle-main-core-fotosampul">
                <h5>Foto Sampul</h5>
                <input onChange={handleImageChange} type="file" accept=".jpg, .jpeg, .png" id="inputImage" />
                {previewImage && (
                  <div className="image-preview">
                    <h5>Pratinjau Gambar:</h5>
                    <img src={previewImage} alt="Pratinjau" style={{ maxWidth: "100%", marginTop: "5px" }} />
                  </div>
                )}
              </div>
              <div className="tulisarticle-main-core-isikonten">
                <h5>Isi Konten</h5>
                <textarea id="inputContent" />
              </div>
              <div id="inputArticle" className="tulisarticle-main-core-btnsubmit">
                <button onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TulisArticle;
