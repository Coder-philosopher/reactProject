import { useState } from "react";
import "./App.css";
import useNationality from "./apihook/Hook";
function App4() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const data = useNationality(submitted ? name : "");

  function Clicked() {
    setSubmitted(true);
  }

  return (
    <div className="font-mono text-white flex flex-col items-center justify-center">
      <h1 className="text-2xl">
        Enter Your Name, I can Predict Your Nationality
      </h1>
      <label className="mt-[30px] mb-[12px] text-xl">Enter Your Name:</label>
      <div>
        <input
          className="text-[20px] px-[8px] py-[3px] rounded-l-[8px] text-blue-600 font-extrabold outline-none"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update name on input change
        />
        <button
          className="bg-orange-500 text-black text-[20px] px-[5px] py-[3px] rounded-r-[8px] font-extrabold"
          onClick={Clicked} // Call Clicked on button click
        >
          Submit
        </button>
        {submitted && (
          <>
            <p className="text-white mt-4">Your Name is {name}</p>

            {data && data.country && (
              <div className="text-white mt-4">
                {data.country.map((country) => (
                  <p key={country.country_id}>
                    {`Predicted Nationality: ${
                      country.country_id
                    }, Probability: ${(country.probability * 100).toFixed(4)}%`}
                  </p>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App4;
