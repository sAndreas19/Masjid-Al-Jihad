import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav>
      <div className="left-nav">
        <img src="src\assets\navbar\logo al jihad.png" alt="Logo" className="logo-left-nav"/>
        <ul>
          <li onClick={() => navigate('/')}><a href="">Profil</a></li>
          <li onClick={() => navigate('/')}><a href="">Berita</a></li>
          <li onClick={() => navigate('/')}><a href="">Artikel</a></li>
          <li onClick={() => navigate('/')}><a href="">Kontak</a></li>
        </ul>
      </div>
      <div className="right-nav">
        <img src="src\assets\navbar\admin.png"/>
      </div>
    </nav>
    </>
  )
}

export default Navbar