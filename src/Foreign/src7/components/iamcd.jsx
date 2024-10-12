// src/components/CryptoDisplay.js
import React from 'react';

function CryptoDisplay({ crypto, currency }) {
  if (!crypto) return null;

  return (
    <div className="p-6 bg-[#8acb3a] rounded-md shadow-md">
      <h2 className="text-2xl mb-4">{crypto.name}</h2>
      <p className="text-lg">
        Price in {currency.toUpperCase()}: {crypto.current_price}
      </p>
      <p className="text-lg">Market Cap: {crypto.market_cap}</p>
      <p className="text-lg">24h High: {crypto.high_24h}</p>
      <p className="text-lg">24h Low: {crypto.low_24h}</p>
    </div>
  );
}

export default CryptoDisplay;
