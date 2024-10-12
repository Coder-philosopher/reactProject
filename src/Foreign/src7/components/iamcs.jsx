// src/components/CryptoSelector.js
import React from 'react';

function CryptoSelector({ cryptoList, selectedCrypto, onCryptoChange }) {
  return (
    <div className="mb-4">
      <label className="text-[#FF0081] bg-[#00FF7E] p-2 text-[22px] font-bold rounded-lg">Select Cryptocurrency:</label>
      <select
        value={selectedCrypto}
        onChange={(e) => onCryptoChange(e.target.value)}
        className="ml-2 p-2 border rounded-md outline-none cursor-pointer"
      >
        {cryptoList.map(({id,name}) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CryptoSelector;
