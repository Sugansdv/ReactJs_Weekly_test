import React, { useState } from "react";
import "../assets/css/LoginToggle.css";

function LoginToggle() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username.trim() === "") {
      setError("Username cannot be empty.");
      return;
    }
    setIsLoggedIn(true);
    setError("");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleClear = () => {
    setUsername("");
    setIsLoggedIn(false);
    setError("");
  };

  return (
    <>
      <div className="login-container">
        <h2>Login Status Toggle</h2>

        {!isLoggedIn ? (
          <>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`login-input ${error ? "input-error" : ""}`}
            />
            {error && <p className="error-msg">{error}</p>}

            <div className="button-row">
              <button
                onClick={handleLogin}
                disabled={username.trim() === ""}
                className="btn login-button"
              >
                Login
              </button>
              <button onClick={handleClear} className="btn clear-button">
                Clear
              </button>
            </div>

            <p>Please login</p>
          </>
        ) : (
          <>
            <p className="greet-user">Welcome, {username}!</p>
            <div className="button-row">
              <button onClick={handleLogout} className="btn logout-button">
                Logout
              </button>
              <button onClick={handleClear} className="btn clear-button">
                Clear
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default LoginToggle;
