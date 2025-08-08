// src/App.jsx
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import './App.css';

function App() {
  const { themeStyles } = useContext(ThemeContext);

  return (
    <div style={themeStyles}>
      <Navbar />
      <About />
      <Contact />
    </div>
  );
}

export default App;
