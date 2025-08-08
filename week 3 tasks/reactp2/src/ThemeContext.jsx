// src/ThemeContext.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  const themeStyles = {
    backgroundColor: darkMode ? '#222' : '#fff',
    color: darkMode ? '#fff' : '#000',
    minHeight: '100vh',
    transition: '0.3s',
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};
