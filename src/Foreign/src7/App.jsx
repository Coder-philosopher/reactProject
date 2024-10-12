// src/App.js
import { useState } from "react";
import useCoinInfo from "./hooks/useCoinInfo";
import CurrencySelector from "./components/CurrencySelector";
import CryptoSelector from "./components/iamcs";
import CryptoDisplay from "./components/iamcd";

function App7() {
  const [currency, setCurrency] = useState("inr");
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const { data, loading } = useCoinInfo(currency);

  const handleCryptoChange = (cryptoId) => {
    const selected = data.find((crypto) => crypto.id === cryptoId);
    setSelectedCrypto(selected);
  };

  return (
    <div className="min-h-screen bg-cover bg-fixed bg-gradient-to-r from-blue-800 to-purple-900 text-black p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        Cryptocurrency Tracker
      </h1>

      <div className="max-w-xl mx-auto">
        <CurrencySelector currency={currency} onCurrencyChange={setCurrency} />

        {loading ? (
          <p>Loading cryptocurrencies...</p>
        ) : (
          <CryptoSelector
            cryptoList={data}
            selectedCrypto={selectedCrypto ? selectedCrypto.id : ""}
            onCryptoChange={handleCryptoChange}
          />
        )}

        {selectedCrypto && (
          <CryptoDisplay crypto={selectedCrypto} currency={currency} />
        )}
      </div>
    </div>
  );
}

export default App7;
