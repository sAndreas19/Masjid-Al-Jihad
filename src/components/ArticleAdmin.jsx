import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Konstanta untuk Local Storage
const STORAGE_KEY = "ARTICLES_DATA";

// Komponen utama untuk Admin Artikel
const ArticleAdmin = () => {
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
      {/* <div>
        <button onClick={() => navigate("/tulisarticle")}>Tulis Artikel</button>
      </div> */}
      <div id="articlesContent" className="admin-main-topic-artikel-content">
        {articles.length > 0 ? (
          articles.map((article) => (
            <div key={article.id} className="article-item">
              <img
                src={article.image}
                alt={article.title}
                className="article-image"
              />
              <h3>{article.title}</h3>
              <p>{article.date}</p>
              <p>{article.content}</p>
              <div className="article-actions">
                <button onClick={() => removeArticle(article.id)}>Hapus</button>
              </div>
            </div>
          ))
        ) : (
          <p>Belum ada artikel.</p>
        )}
      </div>
    </div>
  );
};

export default ArticleAdmin;
