import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllInfaqs, deleteInfaq } from "../data/infaq-idb";

const InfaqAdmin = () => {
  const [infaqs, setInfaqs] = useState([]);
  const navigate = useNavigate();

  // Fungsi untuk mengonversi bulan numerik menjadi nama bulan
  const getMonthName = (monthNumber) => {
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    return months[monthNumber - 1]; // Array index dimulai dari 0
  };

  // Fungsi untuk memformat tanggal
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    const monthName = getMonthName(parseInt(month, 10)); // Konversi bulan menjadi nama
    return `${day} ${monthName} ${year}`;
  };

  // Mengambil data infaq dari IndexedDB
  useEffect(() => {
    const fetchInfaqs = async () => {
      const infaqsFromDB = await getAllInfaqs();
      setInfaqs(infaqsFromDB);
    };
    fetchInfaqs();
  }, []);

  // Fungsi untuk menghapus entri infaq
  const handleDelete = async (id) => {
    await deleteInfaq(id);
    setInfaqs(infaqs.filter((infaq) => infaq.id !== id));
  };

  return (
    <div>
      <div className="admin-main-topic-infaq-btn">
        <button onClick={() => navigate("/updateinfaq")}>Perbaharui Infaq</button>
      </div>
      <div className="admin-main-topic-infaq">
        {infaqs.length > 0 ? (
          <table className="infaq-table responsive-table">
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Jumlah</th>
                <th>Dari</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {infaqs.map((infaq) => (
                <tr key={infaq.id}>
                  <td>{formatDate(infaq.date)}</td>
                  <td>Rp{parseInt(infaq.amount).toLocaleString("id-ID")}</td>
                  <td>{infaq.from}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(infaq.id)}
                      className="delete-button"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Belum ada data infaq.</p>
        )}
      </div>
    </div>
  );
};

export default InfaqAdmin;
