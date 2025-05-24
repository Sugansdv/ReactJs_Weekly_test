import React, { useState } from "react";
import "../assets/css/AgeIncreaserCard.css";

function AgeIncreaserCard({ name }) {
  const defaultAge = 25;
  const [age, setAge] = useState(defaultAge);

  const increaseAge = () => {
    setAge(age + 1);
  };

  const clearAge = () => {
    setAge(defaultAge);
  };

  return (
    <>
      <div className="age-card">
        <h2>Age Increaser Card</h2>
        <h2 className="person-name">{name}</h2>
        <p className="person-age">Age: {age}</p>

        <div className="button-row">
          <button className="btn increase-btn" onClick={increaseAge}>
            Increase Age
          </button>
          <button className="btn clear-btn" onClick={clearAge}>
            Clear
          </button>
        </div>
      </div>
    </>
  );
}

export default AgeIncreaserCard;
