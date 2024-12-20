import React from 'react'

const Article = () => {
  return (
    <>
    <div className="article-body">
      <div className="article-container">
        <div className="article-image">
          <div className="article-image-core">
            <img src="src\assets\article-main\patuh.png"/>
            <div className="article-image-core-explain">
              <div className="article-image-core-explain-top">
                <h1>Tambah wawasanmu dengan membaca artikel kami</h1>
                <p>Al-JIHAD ARTICLE</p>
              </div>
              <br />
              <div className="article-image-core-explain-bottom">
                <button>LIHAT SEMUA ARTIKEL</button>
              </div>
            </div>
          </div>
        </div>
        <div className="article-right">
          <div className="article-right-top">
            <h1>Lihat artikel</h1><h1>lainnyaa</h1>
            <br />
            <img src="src\assets\article-main\see button.png"/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Article