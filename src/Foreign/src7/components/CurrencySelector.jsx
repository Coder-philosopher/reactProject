// src/components/CurrencySelector.jsx
import React from "react";

// Updated currency list with names.
const currencies = [
  { code: "inr", name: "Indian Rupee" },
  { code: "usd", name: "US Dollar" },
  { code: "eur", name: "Euro" },
  { code: "gbp", name: "British Pound" },
  { code: "jpy", name: "Japanese Yen" },
  { code: "cny", name: "Chinese Yuan" },
  { code: "cad", name: "Canadian Dollar" },
  { code: "aud", name: "Australian Dollar" },
  { code: "chf", name: "Swiss Franc" },
  { code: "krw", name: "South Korean Won" },
  { code: "brl", name: "Brazilian Real" },
  { code: "rub", name: "Russian Ruble" },
  { code: "mxn", name: "Mexican Peso" },
  { code: "idr", name: "Indonesian Rupiah" },
  { code: "zar", name: "South African Rand" },
  { code: "try", name: "Turkish Lira" },
  { code: "sgd", name: "Singapore Dollar" },
  { code: "thb", name: "Thai Baht" },
  { code: "sek", name: "Swedish Krona" },
  { code: "pln", name: "Polish Zloty" },
  { code: "nok", name: "Norwegian Krone" },
  { code: "myr", name: "Malaysian Ringgit" },
  { code: "dkk", name: "Danish Krone" },
  { code: "hkd", name: "Hong Kong Dollar" },
  { code: "czk", name: "Czech Koruna" },
  { code: "clp", name: "Chilean Peso" },
  { code: "php", name: "Philippine Peso" },
  { code: "aed", name: "United Arab Emirates Dirham" },
  { code: "vnd", name: "Vietnamese Dong" },
  { code: "sar", name: "Saudi Riyal" },
  { code: "ils", name: "Israeli New Shekel" },
  { code: "huf", name: "Hungarian Forint" },
  { code: "ngn", name: "Nigerian Naira" },
  { code: "bdt", name: "Bangladeshi Taka" },
  { code: "ron", name: "Romanian Leu" },
  { code: "egp", name: "Egyptian Pound" },
  { code: "pkr", name: "Pakistani Rupee" },
  { code: "cop", name: "Colombian Peso" },
  { code: "uah", name: "Ukrainian Hryvnia" },
  { code: "qar", name: "Qatari Rial" },
  { code: "kzt", name: "Kazakhstani Tenge" },
  { code: "kes", name: "Kenyan Shilling" },
  { code: "lkr", name: "Sri Lankan Rupee" },
  { code: "omr", name: "Omani Rial" },
  { code: "kwd", name: "Kuwaiti Dinar" },
  { code: "pen", name: "Peruvian Sol" },
  { code: "twd", name: "New Taiwan Dollar" },
  { code: "vef", name: "Venezuelan Bolívar" },
];

function CurrencySelector({ currency, onCurrencyChange }) {
  return (
    <div className="mb-4">
      <label className="bg-[#FF0081] text-[#00FF7E] p-2 text-[22px] font-bold rounded-lg">
        Select Currency:
      </label>
      <select
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
        className="ml-2 p-2 border rounded-md outline-none cursor-pointer"
      >
        {currencies.map(({ code, name }) => (
          <option key={code} value={code}>
            {`${name} (${code.toUpperCase()})`} {/* Display name and code */}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencySelector;
