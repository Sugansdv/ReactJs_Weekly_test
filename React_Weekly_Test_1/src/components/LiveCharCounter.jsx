import React, { useState } from "react";
import "../assets/css/LiveCharCounter.css";

function LiveCharCounter() {
  const [text, setText] = useState("");

  const handleClear = () => {
    setText("");
  };

  return (
    <>
      <div className="live-char-counter">
        <h2 className="live-char-counter__title">Live Character Counter</h2>
        <textarea
          className="live-char-counter__input"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
        />
        <p className="live-char-counter__count">Character Count: {text.length}</p>
        <button className="live-char-counter__clear-btn" onClick={handleClear}>
          Clear
        </button>
      </div>
    </>
  );
}

export default LiveCharCounter;

