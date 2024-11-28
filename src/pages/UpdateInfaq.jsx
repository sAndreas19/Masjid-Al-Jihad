import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveInfaq } from "../data/infaq-idb";

const UpdateInfaq = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async () => {
    if (!amount || !from || !date) {
      alert("Harap isi semua data!");
      return;
    }

    const newInfaq = {
      id: +new Date(), // ID unik berdasarkan timestamp
      amount,
      date,
      from,
    };

    await saveInfaq(newInfaq);
    navigate("/admin");
  };

  return (
    <div className="update-infaq-body">
      <div className="update-infaq-container">
        <div className="update-infaq-top">
          <button onClick={() => navigate("/admin")}>Kembali</button>
        </div>
        <div className="update-infaq-main">
          <div className="update-infaq-main-title">
            <h1>Perbaharui Infaq</h1>
          </div>
          <div className="update-infaq-main-core">
            <div className="update-infaq-main-core-tanggal">
              <h5>Tanggal</h5>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="update-infaq-main-core-jumlah">
              <h5>Jumlah</h5>
              <input
                type="number"
                min="1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Masukkan jumlah infaq"
              />
            </div>
            <div className="update-infaq-main-core-dari">
              <h5>Dari</h5>
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Masukkan nama pemberi"
              />
            </div>
            <div className="update-infaq-main-core-btnsubmit">
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateInfaq;
