import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import LandingPage from './pages/LandingPage'
import LoginAdmin from './pages/LoginAdmin';
import Admin from './pages/Admin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/loginadmin' element={<LoginAdmin/>} />

        <Route path='/admin' element={<PrivateRoute><Admin/></PrivateRoute>} />
      </Routes>
    </Router>
  )
}

export default App