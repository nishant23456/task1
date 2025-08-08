import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from '../../reactp2/src/pages/About';
import Contact from './pages/Contact';
import Setup from './pages/Setup';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/setup" element={<Setup />} />
      </Routes>
    </Router>
  );
}

export default App;
