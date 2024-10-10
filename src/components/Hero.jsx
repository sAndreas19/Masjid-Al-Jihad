import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Hero = () => {
  // State untuk menyimpan waktu saat ini
  const [currentTime, setCurrentTime] = useState(new Date());
  // State untuk menyimpan jadwal sholat yang diambil dari API
  const [jadwal, setJadwal] = useState({});
  // State untuk menyimpan waktu sholat yang sedang aktif
  const [activeTime, setActiveTime] = useState('');

  // Mendapatkan tahun, bulan, dan hari saat ini
  const getDate = new Date();
  const getYear = getDate.getFullYear();
  const getMonth = getDate.getMonth() + 1;
  const getDay = getDate.getDate();

  // Mendapatkan informasi hari dalam seminggu dan bulan dalam bahasa Indonesia
  const today = new Date();
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", 
                "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  // Mendapatkan nama hari dan bulan dalam format yang diinginkan
  const dayName = days[today.getDay()];
  const date = today.getDate();
  const monthName = months[today.getMonth()];
  const year = today.getFullYear();

  // Format tanggal untuk ditampilkan di halaman
  const formattedDate = `${dayName}, ${date} ${monthName} ${year}`;

  // Fungsi untuk menambahkan '0' jika bulan kurang dari 10
  function bulan() {
    if (getMonth < 10) {
      return `0${getMonth}`;
    } else {
      return getMonth;
    }
  }

  // Fungsi untuk menambahkan '0' jika hari kurang dari 10
  function hari() {
    if (getDay < 10) {
      return `0${getDay}`;
    } else {
      return getDay;
    }
  }

  // Format tanggal dalam format YYYY-MM-DD untuk API
  const tanggal = `${getYear}-${bulan()}-${hari()}`;

  // Fungsi untuk mengambil jadwal sholat dari API
  function getJadwalSholat() {
    fetch('https://api.myquran.com/v2/sholat/jadwal/0228/' + tanggal)
      .then(response => response.json())
      .then(data => {
        // Menyimpan data jadwal sholat ke state
        setJadwal(data.data.jadwal);
        // Memperbarui waktu sholat yang aktif
        updateActiveTime(data.data.jadwal);
      });
  }

  // Fungsi untuk memperbarui waktu sholat yang aktif
  const updateActiveTime = (jadwal) => {
    // Array untuk menampung nama waktu sholat
    const times = ['imsak', 'subuh', 'terbit', 'dzuhur', 'ashar', 'maghrib', 'isya'];
    // Loop melalui setiap waktu sholat
    for (let i = 0; i < times.length; i++) {
      // Mendapatkan waktu sholat dari API
      const sholatTime = jadwal[times[i]];
      const [hour, minute] = sholatTime.split(':').map(Number);
      // Membuat objek Date untuk waktu sholat
      const sholatDate = new Date();
      sholatDate.setHours(hour, minute, 0, 0);

      // Jika waktu sekarang sudah melewati waktu sholat, perbarui waktu aktif
      if (currentTime >= sholatDate) {
        setActiveTime(times[i]);
      }
    }
  };

  // Menggunakan useEffect untuk memperbarui waktu setiap detik
  useEffect(() => {
    // Memanggil fungsi untuk mengambil jadwal sholat dari API
    getJadwalSholat();
    // Memperbarui waktu setiap detik
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Membersihkan interval saat komponen dibongkar
    return () => clearInterval(interval);
  }, [currentTime]);

  return (
    <>
      <div className="hero-container">
        <Navbar/>
        <div className="hero-row">
          <div className="hero-title">
            <h1>MASJID AL-JIHAD</h1>
            <h3>MEDAN BARU</h3>
          </div>
        </div>
      </div>
      <div className="jadwal-sholat">
        <div className="jadwal-sholat-title">
          <h3 className='tanggal'>{formattedDate}</h3>
        </div>
        <div className="jadwal-sholat-time">
          {/* Menggunakan class 'active' jika waktu sholat saat ini sedang aktif */}
          <div className={`jadwal-sholat-time-core ${activeTime === 'imsak' ? 'active' : ''}`}>
            <h4>Imsak</h4>
            <p className='imsak'>{jadwal.imsak}</p>
          </div>
          <div className={`jadwal-sholat-time-core ${activeTime === 'subuh' ? 'active' : ''}`}>
            <h4>Shubuh</h4>
            <p className='shubuh'>{jadwal.subuh}</p>
          </div>
          <div className={`jadwal-sholat-time-core ${activeTime === 'terbit' ? 'active' : ''}`}>
            <h4>Terbit</h4>
            <p className='terbit'>{jadwal.terbit}</p>
          </div>
          <div className={`jadwal-sholat-time-core ${activeTime === 'dzuhur' ? 'active' : ''}`}>
            <h4>Dzuhur</h4>
            <p className='dzuhur'>{jadwal.dzuhur}</p>
          </div>
          <div className={`jadwal-sholat-time-core ${activeTime === 'ashar' ? 'active' : ''}`}>
            <h4>Ashar</h4>
            <p className='ashar'>{jadwal.ashar}</p>
          </div>
          <div className={`jadwal-sholat-time-core ${activeTime === 'maghrib' ? 'active' : ''}`}>
            <h4>Maghrib</h4>
            <p className='maghrib'>{jadwal.maghrib}</p>
          </div>
          <div className={`jadwal-sholat-time-core ${activeTime === 'isya' ? 'active' : ''}`}>
            <h4>Isya</h4>
            <p className='isya'>{jadwal.isya}</p>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Hero;
