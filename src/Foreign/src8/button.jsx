import React, { useState } from "react";
import "./Button.css";

function Buttonch() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const CallPlus = () => {
    if (count < 12) {
      setCount(count + 1);
      setMessage(`Total Count: ${count + 1}`);
    } else {
      setMessage("You have reached the Upper Limit (Only 12 count allowed)");
    }
  };

  const CallMinus = () => {
    if (count > -12) {
      setCount(count - 1);
      setMessage(`Total Count: ${count - 1}`);
    } else {
      setMessage("You have reached the Lower Limit (Only -12 count allowed)");
    }
  };

  return (
    <>
      <button className="CounterButton" onClick={CallPlus}>
        Counter++
      </button>
      <button className="CounterButton" onClick={CallMinus}>
        Counter--
      </button>
      <p className="text">{message}</p>
    </>
  );
}

export default Buttonch;
