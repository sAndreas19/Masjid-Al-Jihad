import React, { useState } from 'react';

const HashGenerator = () => {
    const [inputText, setInputText] = useState('');
    const [hash, setHash] = useState('');

    // Fungsi untuk menghasilkan hash
    const generateHash = async (text) => {
        const encoder = new TextEncoder();
        const data = encoder.encode(text);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        setHash(hashHex);
    };

    // Handler ketika input berubah
    const handleInputChange = (event) => {
        const text = event.target.value;
        setInputText(text);
        if (text) {
            generateHash(text);
        } else {
            setHash('');
        }
    };

    return (
        <div>
            <h2>Hash Generator (SHA-256)</h2>
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Masukkan teks untuk di-hash"
            />
            <p>Hash: {hash}</p>
        </div>
    );
};

export default HashGenerator;
