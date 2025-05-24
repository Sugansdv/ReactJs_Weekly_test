import React, { useState } from "react";
import "../assets/css/FavoriteFruitSelector.css";

import appleImg from "../assets/Apple.webp";
import bananaImg from "../assets/banana.webp";
import orangeImg from "../assets/Orange.webp";
import mangoImg from "../assets/mango.webp";

const fruits = [
  { name: "Apple", img: appleImg },
  { name: "Banana", img: bananaImg },
  { name: "Orange", img: orangeImg },
  { name: "Mango", img: mangoImg },
];

function FavoriteFruitSelector() {
  const [selectedFruit, setSelectedFruit] = useState("");

  const handleChange = (e) => {
    setSelectedFruit(e.target.value);
  };

  const handleClear = () => {
    setSelectedFruit("");
  };

  const fruitObj = fruits.find(fruit => fruit.name === selectedFruit);

  return (
    <>
      <div className="fruit-selector-container">
        <h2 className="fruit-selector-title">Favorite Fruit Selector</h2>
        <select
          className="fruit-selector-dropdown"
          value={selectedFruit}
          onChange={handleChange}
        >
          <option value="">-- Choose a fruit --</option>
          {fruits.map((fruit) => (
            <option key={fruit.name} value={fruit.name}>
              {fruit.name}
            </option>
          ))}
        </select>

        <div className="fruit-selector-buttons">
          <button
            className="fruit-selector-clear-btn"
            onClick={handleClear}
            disabled={!selectedFruit}
          >
            Clear
          </button>
        </div>

        {selectedFruit && (
          <div className="fruit-display">
            <p className="fruit-display__name">Your favorite fruit: {selectedFruit}</p>
            <img
              src={fruitObj.img}
              alt={selectedFruit}
              className="fruit-display__image"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default FavoriteFruitSelector;