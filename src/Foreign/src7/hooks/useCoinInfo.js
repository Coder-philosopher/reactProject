// // src/hooks/useCoinInfo.js
import { useState, useEffect, useCallback } from "react";

function useCoinInfo(currency) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCoinData = useCallback(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
    console.log("rerender");
  }, [currency]);
  // console.log(fetchCoinData);

  useEffect(() => {
    fetchCoinData();
  }, [fetchCoinData]);

  return { data, loading };
}

export default useCoinInfo;
// src/hooks/useCoinInfo.js
// import { useState, useEffect, useCallback } from 'react';

// function useCoinInfo(currency) {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchCoinData = useCallback(() => {
//     const localData = localStorage.getItem(`coinData-${currency}`);

//     if (localData) {
//       // If local data exists, parse and use it
//       setData(JSON.parse(localData));
//       setLoading(false);
//     } else {
//       // If no local data, fetch from API
//       fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`)
//         .then((response) => response.json())
//         .then((result) => {
//           setData(result);
//           setLoading(false);
//           // Save the fetched data to local storage
//           localStorage.setItem(`coinData-${currency}`, JSON.stringify(result));
//         })
//         .catch((error) => {
//           console.error('Error fetching data:', error);
//           setLoading(false);
//         });
//     }
//   }, [currency]);

//   useEffect(() => {
//     fetchCoinData();
//   }, [fetchCoinData]);

//   return { data, loading };
// }

// export default useCoinInfo;
