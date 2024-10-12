import { useState } from "react";
import "./Button.css";
function Button() {
  const [count, setCount] = useState(0);

  const CallPlus = () => {
    if (count <= 12) {
      setCount(count + 1);
    }
  };

  const CallMinus = () => {
    if (count >= -12) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button className="CounterButton" onClick={CallPlus}>
        Counter++
      </button>
      <button className="CounterButton" onClick={CallMinus}>
        Counter--
      </button>

      <div className="text">
        {count > 12
          ? `You have reached the UpperLimit (Only 12 count allowed)`
          : count < -12
          ? `You have reached the LowerLimit (Only -12 count allowed)`
          : `Total Count:${count}`}
      </div>
    </div>
  );
}

export default Button;
