import React, { useState } from 'react';
import '../assets/Css/BMICalculator.css';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!weight || !height || weight <= 0 || height <= 0) 
      {
         window.alert("Please enter valid numbers for weight and height.");
        return
      };

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters ** 2)).toFixed(1);
    setBmi(bmiValue);
    setCategory(getCategory(bmiValue));
  };

  const clearForm = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setCategory('');
  };

  const getCategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 24.9) return 'Normal weight';
    if (bmi < 29.9) return 'Overweight';
    return 'Obesity';
  };

  return (
    <div className="bmi-container">
      <h2>BMI Calculator</h2>
      <form onSubmit={calculateBMI} className="bmi-form">
        <div className="form-group">
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <div className="button-group">
          <button type="submit">Calculate BMI</button>
          <button type="button" onClick={clearForm} className="clear-button">Clear</button>
        </div>
      </form>

      {bmi && (
        <div className="bmi-result">
          <p>Your BMI: <strong>{bmi}</strong></p>
          <p>Category: <strong>{category}</strong></p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
