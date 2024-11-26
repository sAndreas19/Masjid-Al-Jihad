import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Konstanta untuk Local Storage
const STORAGE_KEY = "PESAN_DATA";

// Komponen utama untuk Admin Artikel
const PesanAdmin = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  // Fungsi untuk memuat data dari localStorage
  const loadArticles = () => {
    const storedArticles = localStorage.getItem(STORAGE_KEY);
    if (storedArticles) {
      setArticles(JSON.parse(storedArticles));
    }
  };

  // Fungsi untuk menyimpan data ke localStorage
  const saveArticles = (updatedArticles) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedArticles));
    setArticles(updatedArticles);
  };

  // Fungsi untuk menghapus artikel
  const removeArticle = (id) => {
    const updatedArticles = articles.filter((article) => article.id !== id);
    saveArticles(updatedArticles);
  };

  // Memuat data saat komponen di-mount
  useEffect(() => {
    loadArticles();
  }, []);

  return (
    <div>
      <div className="admin-main-topic-artikel-btn">
        <button onClick={() => navigate("/tulisarticle")}>Tambahkan Pesan</button>
      </div>
      <div className="admin-main-topic-artikel">
      <div id="articlesContent" className="admin-main-topic-artikel">
        {articles.length > 0 ? (
          articles.map((article) => (
            <div key={article.id} className="admin-main-topic-artikel-content">
              <img
                src={article.image}
                alt={article.title}
                className="admin-main-topic-artikel-content-gambar-artikel"
              />
              <h1>{article.title}</h1>
              <h2>{article.date}</h2>
              {/* <p>{article.content}</p> */}
              <div className="admin-main-topic-artikel-content-control">
                {/* <button onClick={() => removeArticle(article.id)}>Hapus</button> */}
                <img onClick={() => removeArticle(article.id)} src="src\assets\admin\Trash.png"/>
              </div>
            </div>
          ))
        ) : (
          <p>Belum ada Pesan</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default PesanAdmin;
