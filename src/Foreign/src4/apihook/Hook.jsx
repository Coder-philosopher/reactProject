import { useEffect, useState } from "react";

function useNationality(name) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (name) {
      fetch(`https://api.nationalize.io/?name=${name}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [name]);

  return data;
}

export default useNationality;
