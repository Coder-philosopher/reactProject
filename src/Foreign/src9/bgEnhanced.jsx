import { useState, useEffect } from "react";
/* Here There is no use of useEffect hook we've used it for just to show the concept */
function BgChanger() {
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [intervalId, setIntervalId] = useState(null);
  console.log(intervalId);
  document.body.style.backgroundColor = bgColor;

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  function startColorChange() {
    if (!intervalId) {
      const id = setInterval(() => {
        const newColor = Code();
        setBgColor(newColor);
      }, 1000);

      setIntervalId(id);
    }
  }

  return (
    <>
      <button id="but" onClick={startColorChange}>
        Click Me
      </button>
      <div id="colorCode" className="text">
        Background Color: {bgColor}
      </div>
      {/* <style>{`body { background-color: ${bgColor}; }`}</style> */}
    </>
  );
}

function Code() {
  let hex = "#";
  const code = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    hex += code[Math.floor(Math.random() * 16)];
  }
  return hex;
}

export default BgChanger;
