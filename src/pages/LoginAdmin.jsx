import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginAdmin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [inputText, setInputText] = useState('');
  const [hash, setHash] = useState('');
  const [copySucces, setCopySucces] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Mengirim email dan password ke backend
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      // Jika login berhasil, simpan token dan arahkan ke halaman admin
      if (data.success) {
        localStorage.setItem('authToken', data.token); // Simpan token dari server
        navigate('/admin');
      } else {
        setErrorMessage('Email atau password salah');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Terjadi kesalahan, silakan coba lagi.');
    }
  };

  const generateHash = async (text) => {
    const endcoder = new TextEncoder();
    const dataHash = endcoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataHash);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    setHash(hashHex);
  };

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);
    if (text) {
      generateHash(text);
    } else {
      setHash('')
    }
    setCopySucces('');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hash).then(() => {
      setCopySucces('تم نسخ التجزئة بنجاح!')
      setTimeout(() => setCopySucces(''), 2000);
    });
  };

  return (
    <>
    <div className="login-admin-body">
      <div className="login-admin-top">
        <h3 onClick={() => navigate('/')}>Kembali</h3>
      </div>
      <div className='login-admin-container'>
        <h2>تسجيل دخول المسؤول</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <div className='login-admin-form-email'>
            <label>البريد الإلكتروني</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='login-admin-form-password'>
            <label>كلمة المرور</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <br />
          {errorMessage && <p>{errorMessage}</p>}
          <button className='login-admin-form-button' type="submit">تسجيل الدخول</button>
        </form>
      </div>
      <div className="login-admin-hash">
        <h2>تجزئة كلمة المرور</h2>
        <br />
        <input type="password" value={inputText} onChange={handleInputChange} placeholder='أدخل كلمة المرور'/>
        <input type="text" value={hash} readOnly/>
        {copySucces && <p>{copySucces}</p>}
        <button onClick={copyToClipboard}>نسخ</button>
      </div>
    </div>
    </>
  );
};

export default LoginAdmin;