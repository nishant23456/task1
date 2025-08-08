// src/Navbar.jsx
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './Navbar.css';

function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav style={{
      padding: '10px',
      backgroundColor: darkMode ? '#333' : '#eee',
      color: darkMode ? '#fff' : '#000'
    }}>
      <h2>My Website</h2>
      <button onClick={toggleTheme}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </nav>
  );
}

export default Navbar;
