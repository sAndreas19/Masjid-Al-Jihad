import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllArticles, deleteArticle } from "../data/article-idb";

const ArticleAdmin = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      const articlesFromDB = await getAllArticles();
      setArticles(articlesFromDB);
    };
    fetchArticles();
  }, []);

  const handleDelete = async (id) => {
    await deleteArticle(id);
    setArticles(articles.filter((article) => article.id !== id));
  };

  return (
    <div>
      <div className="admin-main-topic-artikel-btn">
        <button onClick={() => navigate("/tulisarticle")}>Tulis Artikel</button>
      </div>
      <div className="admin-main-topic-artikel">
        {articles.length > 0 ? (
          articles.map((article) => (
            <div key={article.id} className="admin-main-topic-artikel-content">
              <img
                src={URL.createObjectURL(article.image)}
                alt={article.title}
                className="admin-main-topic-artikel-content-gambar-artikel"
              />
              <h1>{article.title}</h1>
              <h2>{article.date}</h2>
              <div className="admin-main-topic-artikel-content-control">
                <img
                  onClick={() => handleDelete(article.id)}
                  src="src/assets/admin/Trash.png"
                  alt="Hapus"
                />
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
