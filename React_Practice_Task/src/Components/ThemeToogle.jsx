import React, { useState } from "react";
import "../assets/Css/ThemeToggle.css";

const ThemeToggle = () => {
  const savedTheme = localStorage.getItem("app-theme") || "light";

  document.body.setAttribute("data-theme", savedTheme);

  const [theme, setTheme] = useState(savedTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("app-theme", newTheme);
  };

  return (
    <div className="toggle-container">
      <button onClick={toggleTheme} className="toggle-btn">
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
