import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveArticle } from "../data/article-idb";

const TulisArticle = () => {
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState(null);
  const [date, setDate] = useState(""); // State untuk tanggal

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleSubmit = async () => {
    const title = document.getElementById("inputJudul").value;
    const content = document.getElementById("inputContent").value;

    if (!title || !imageFile || !date || !content) {
      alert("Harap isi semua data!");
      return;
    }

    const newArticle = {
      id: +new Date(),
      title,
      image: imageFile, // Simpan gambar sebagai Blob
      date,
      content,
    };

    await saveArticle(newArticle);
    navigate("/admin");
  };

  return (
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
              <input
                type="text"
                id="inputTanggal"
                value={date}
                onChange={(e) => setDate(e.target.value)} // Update state tanggal
                placeholder="DD/MM/YYYY"
              />
            </div>
            <div className="tulisarticle-main-core-judul">
              <h5>Judul</h5>
              <input type="text" id="inputJudul" placeholder="Masukkan judul artikel" />
            </div>
            <div className="tulisarticle-main-core-fotosampul">
              <h5>Foto Sampul</h5>
              <input
                type="file"
                accept=".jpg, .jpeg, .png"
                id="inputImage"
                onChange={handleImageChange}
              />
            </div>
            <div className="tulisarticle-main-core-isikonten">
              <h5>Isi Konten</h5>
              <textarea id="inputContent" placeholder="Masukkan isi artikel" />
            </div>
            <div id="inputArticle" className="tulisarticle-main-core-btnsubmit">
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TulisArticle;
