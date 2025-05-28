import React, { useState } from "react";
import "../assets/Css/CharCounter.css";

function CharCounter() {
  const [text, setText] = useState("");

  const handleClear = () => {
    setText("");
  };

  return (
    <>
      <div className="count-container">
        <h2 className="count-title">Live Character Counter</h2>
        <textarea
          className="count-input"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
        />
        <p className="char-count">Character Count: {text.length}</p>
        <button className="clear-btn" onClick={handleClear}>
          Clear
        </button>
      </div>
    </>
  );
}

export default CharCounter;

