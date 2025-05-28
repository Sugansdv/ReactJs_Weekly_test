import React, { useState, useEffect } from 'react';
import '../assets/Css/ThemeToggle.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('app-theme') || 'light'
  );

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="toggle-container">
      <button onClick={toggleTheme} className="toggle-btn">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
