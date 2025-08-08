// src/About.jsx
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './About.css';

function About() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div style={{
      padding: '20px',
      backgroundColor: darkMode ? '#444' : '#f9f9f9',
      color: darkMode ? '#fff' : '#000'
    }}>
      <h3>About Page</h3>
      <p>This is a sample about page.</p>
    </div>
  );
}

export default About;
