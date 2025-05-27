import React, { useState } from "react";
import "../assets/Css/CharCounter.css";

function CharCounter() {
  const [text, setText] = useState("");

  const handleClear = () => {
    setText("");
  };

  return (
    <>
      <div className="char-counter">
        <h2 className="char-counter__title">Live Character Counter</h2>
        <textarea
          className="char-counter__input"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
        />
        <p className="char-counter__count">Character Count: {text.length}</p>
        <button className="char-counter__clear-btn" onClick={handleClear}>
          Clear
        </button>
      </div>
    </>
  );
}

export default CharCounter;

