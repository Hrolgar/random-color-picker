import React, { useState, useEffect } from "react";
import "./Hexdiv.css";

function Hexdiv() {
  const hexValue = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const [hex, setHex] = useState("");

  //! Create random hexCode
  function handleHex() {
    let hexCode = "#";

    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * hexValue.length);
      hexCode += hexValue[index];
    }
    setHex(hexCode);
  }

  //! Do this on render
  useEffect(() => {
    handleHex();
  }, []);

  //! Create rgb from hexcode
  function hexToRGB(hex) {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    return "(" + r + ", " + g + ", " + b + ")";
  }

  return (
    <div style={{ backgroundColor: hex }} className="hex__div">
      <h1>
        HEX COLOR: <span>{hex}</span>
      </h1>
      <h3>rgb{hexToRGB(hex)} </h3>
      <button onClick={handleHex}>Shuffle</button>
    </div>
  );
}

export default Hexdiv;
