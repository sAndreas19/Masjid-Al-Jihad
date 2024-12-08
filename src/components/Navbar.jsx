import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()


  return (
    <>
    <nav>
      <div className="left-nav">
        <img src="src\assets\navbar\logo al jihad.png" alt="Logo" className="logo-left-nav"/>
        <ul>
          <li onClick={() => navigate('/profil')}><a href="">Profil</a></li>
          <li onClick={() => navigate('/articlepage')}><a href="">Artikel</a></li>
          <li onClick={() => navigate('/')}><a href="">Kontak</a></li>
        </ul>
      </div>
      <div className="right-nav">
        <img src="src\assets\navbar\admin.png" onClick={() => navigate('/LoginAdmin')}/>
      </div>
    </nav>
    </>
  )
}

export default Navbar