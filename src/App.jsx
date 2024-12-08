import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import LandingPage from './pages/LandingPage'
import LoginAdmin from './pages/LoginAdmin';
import Profil from './pages/Profil';
import Admin from './pages/Admin';
import TulisArticle from './pages/TulisArticle';
import UpdateInfaq from './pages/UpdateInfaq';
import ArticlePage from './pages/ArticlePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/loginadmin' element={<LoginAdmin/>} />
        <Route path='/profil' element={<Profil/>} />
        <Route path='/articlepage' element={<ArticlePage/>} />

        <Route path='/admin' element={<PrivateRoute><Admin /></PrivateRoute>} />
        <Route path='/tulisarticle' element={<PrivateRoute><TulisArticle/></PrivateRoute>} />
        <Route path='/updateinfaq' element={<PrivateRoute><UpdateInfaq/></PrivateRoute>}/>
      </Routes>
    </Router>
  )
}

export default App