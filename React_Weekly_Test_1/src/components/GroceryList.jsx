import React, { useState } from "react";
import "../assets/css/GroceryList.css";

function GroceryList() {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("kg");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (itemName.trim() !== "" && quantity.trim() !== "") {
      const newItem = {
        name: itemName,
        quantity: quantity,
        unit: unit
      };
      setItems([...items, newItem]);
      setItemName("");
      setQuantity("");
      setUnit("kg");
    } else {
      alert("Please enter item name and quantity.");
    }
  };

  const handleClear = () => {
    setItemName("");
    setQuantity("");
    setUnit("kg");
  };

  const handleDelete = (indexToDelete) => {
    const updatedItems = items.filter((_, index) => index !== indexToDelete);
    setItems(updatedItems);
  };

  return (
    <>
      <div className="app-container">
        <h2>Grocery List App</h2>
        <div className="input-section">
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Enter item name"
          />
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Qty"
            min="1"
          />
          <select value={unit} onChange={(e) => setUnit(e.target.value)}>
            <option value="kg">kg</option>
            <option value="gm">gm</option>
            <option value="no.">no.</option>
            <option value="litre">litre</option>
            <option value="ml">ml</option>
          </select>
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleClear} className="clear-btn">Clear</button>
        </div>
        <ul className="item-list">
          {items.map((item, index) => (
            <li key={index} className="item-row">
              <span>{item.name} - <strong>{item.quantity} {item.unit}</strong></span>
              <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default GroceryList;
